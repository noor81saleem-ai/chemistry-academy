import { notFound } from 'next/navigation';
import { fscGrades } from '@/data/curriculum';
import { getChapterContent } from '@/data/chapter-content/registry';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TopicReader, TopicContent } from '@/components/TopicReader';

export function generateStaticParams() {
  const grade = fscGrades.find((g) => g.slug === 'grade-11')!;
  const params: { slug: string; number: string }[] = [];
  for (const ch of grade.chapters) {
    const content = getChapterContent('grade-11', ch.slug);
    if (content) for (const lec of content.lectures) params.push({ slug: ch.slug, number: String(lec.number) });
  }
  return params;
}

export default function LecturePage({ params }: { params: { slug: string; number: string } }) {
  const content = getChapterContent('grade-11', params.slug);
  if (!content) notFound();
  const lecture = content.lectures.find((l) => l.number === parseInt(params.number, 10));
  if (!lecture) notFound();
  return (
    <div className="container-narrow py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'FSc', href: '/fsc' }, { label: 'Grade 11', href: '/fsc/grade-11' }, { label: content.title, href: '/fsc/grade-11/' + params.slug }, { label: 'Lecture ' + lecture.number }]} />
      <div className="mt-6">
        <TopicReader backHref={'/fsc/grade-11/' + params.slug} backLabel={'Back to ' + content.title} title={lecture.title} subtitle={'Lecture ' + lecture.number + ' · ' + content.title}>
          <TopicContent blocks={lecture.content} />
        </TopicReader>
      </div>
    </div>
  );
}
