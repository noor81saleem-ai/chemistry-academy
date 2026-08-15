import { notFound } from 'next/navigation';
import { getPost, blogPosts } from '@/data/blog';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TopicReader } from '@/components/TopicReader';
import { ContentRenderer } from '@/components/ContentRenderer';
import { formatDate } from '@/lib/utils';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const blocks = post.body.map((b) => {
    if (b.type === 'p') return { type: 'paragraph' as const, text: b.text };
    if (b.type === 'h2') return { type: 'heading' as const, text: b.text };
    if (b.type === 'h3') return { type: 'heading' as const, text: b.text };
    if (b.type === 'ul') return { type: 'bullets' as const, items: b.items };
    if (b.type === 'ol') return { type: 'numbers' as const, items: b.items };
    if (b.type === 'equation') return { type: 'equation' as const, latex: b.latex, caption: b.caption };
    if (b.type === 'callout') {
      if (b.variant === 'warning') return { type: 'warning' as const, text: b.text };
      if (b.variant === 'definition') return { type: 'definition' as const, term: b.title, text: b.text };
      return { type: 'note' as const, text: b.text };
    }
    return { type: 'paragraph' as const, text: '' };
  });

  return (
    <div className="container-narrow py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: post.title }]} />
      <div className="mt-6">
        <TopicReader backHref="/blog" backLabel="Back to Blog" title={post.title} subtitle={`${post.category} · ${formatDate(post.date)} · ${post.readingTime}`}>
          <ContentRenderer blocks={blocks} />
        </TopicReader>
      </div>
    </div>
  );
}
