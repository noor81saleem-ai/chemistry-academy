import { notFound } from 'next/navigation';
import { fscGrades } from '@/data/curriculum';
import { getChapterContent } from '@/data/chapter-content/registry';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TopicReader, TopicContent } from '@/components/TopicReader';

export function generateStaticParams() {
  return fscGrades.find((g) => g.slug === 'grade-11')!.chapters.map((ch) => ({ slug: ch.slug }));
}

export default function KeyConceptsPage({ params }: { params: { slug: string } }) {
  const content = getChapterContent('grade-11', params.slug);
  if (!content) notFound();
  return (
    <div className="container-narrow py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'FSc', href: '/fsc' }, { label: 'Grade 11', href: '/fsc/grade-11' }, { label: content.title, href: '/fsc/grade-11/' + params.slug }, { label: 'Key Concepts' }]} />
      <div className="mt-6">
        <TopicReader backHref={'/fsc/grade-11/' + params.slug} backLabel={'Back to ' + content.title} title="Key Concepts" subtitle={content.title}>
          <TopicContent blocks={content.keyConcepts} />
        </TopicReader>
      </div>
    </div>
  );
}
