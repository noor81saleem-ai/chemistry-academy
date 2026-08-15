import { blogPosts } from '@/data/blog';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { BlogCard } from '@/components/BlogCard';

export const metadata = { title: 'Blog' };

export default function BlogPage() {
  return (
    <div className="container-wide py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
      <div className="mt-6 mb-8">
        <span className="eyebrow mb-2">Articles & Guides</span>
        <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-ink">Chemistry Blog</h1>
        <p className="mt-3 text-ink-muted max-w-2xl leading-relaxed">Articles on Chemistry concepts, study techniques, exam preparation and more from Professor Noor Saleem.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (<BlogCard key={post.slug} post={post} />))}
      </div>
    </div>
  );
}
