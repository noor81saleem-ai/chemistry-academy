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
    if (content) for (const q of content.longQuestions) params.push({ slug: ch.slug, number: String(q.number) });
  }
  return params;
}

export default function LongQuestionPage({ params }: { params: { slug: string; number: string } }) {
  const content = getChapterContent('grade-11', params.slug);
  if (!content) notFound();
  const question = content.longQuestions.find((q) => q.number === parseInt(params.number, 10));
  if (!question) notFound();
  return (
    <div className="container-narrow py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'FSc', href: '/fsc' }, { label: 'Grade 11', href: '/fsc/grade-11' }, { label: content.title, href: '/fsc/grade-11/' + params.slug }, { label: 'Long Question ' + params.number }]} />
      <div className="mt-6">
        <TopicReader backHref={'/fsc/grade-11/' + params.slug} backLabel={'Back to ' + content.title} title={question.question} subtitle={'Long Question ' + params.number + ' · ' + content.title}>
          <TopicContent blocks={question.answer} />
        </TopicReader>
      </div>
    </div>
  );
}
