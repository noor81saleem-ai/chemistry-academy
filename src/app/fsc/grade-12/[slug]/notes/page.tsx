import { notFound } from 'next/navigation';
import { fscGrades } from '@/data/curriculum';
import { getChapterContent } from '@/data/chapter-content/registry';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TopicReader, TopicContent } from '@/components/TopicReader';

export function generateStaticParams() {
  return fscGrades.find((g) => g.slug === 'grade-12')!.chapters.map((ch) => ({ slug: ch.slug }));
}

export default function StudyNotesPage({ params }: { params: { slug: string } }) {
  const content = getChapterContent('grade-12', params.slug);
  if (!content) notFound();
  return (
    <div className="container-narrow py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'FSc', href: '/fsc' }, { label: 'Grade 12', href: '/fsc/grade-12' }, { label: content.title, href: '/fsc/grade-12/' + params.slug }, { label: 'Study Notes' }]} />
      <div className="mt-6">
        <TopicReader backHref={'/fsc/grade-12/' + params.slug} backLabel={'Back to ' + content.title} title="Study Notes" subtitle={content.title}>
          <TopicContent blocks={content.studyNotes} />
        </TopicReader>
      </div>
    </div>
  );
}
