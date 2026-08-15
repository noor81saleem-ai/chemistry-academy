import { notFound } from 'next/navigation';
import { fscGrades } from '@/data/curriculum';
import { getChapterContent } from '@/data/chapter-content/registry';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TopicReader, TopicMCQs, TopicShortQuestions } from '@/components/TopicReader';

export function generateStaticParams() {
  const grade = fscGrades.find((g) => g.slug === 'grade-12')!;
  const params: { slug: string; number: string }[] = [];
  for (const ch of grade.chapters) {
    const content = getChapterContent('grade-12', ch.slug);
    if (content) for (const t of content.chapterTests) params.push({ slug: ch.slug, number: String(t.number) });
  }
  return params;
}

export default function TestPage({ params }: { params: { slug: string; number: string } }) {
  const content = getChapterContent('grade-12', params.slug);
  if (!content) notFound();
  const test = content.chapterTests.find((t) => t.number === parseInt(params.number, 10));
  if (!test) notFound();
  return (
    <div className="container-narrow py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'FSc', href: '/fsc' }, { label: 'Grade 12', href: '/fsc/grade-12' }, { label: content.title, href: '/fsc/grade-12/' + params.slug }, { label: 'Test ' + params.number }]} />
      <div className="mt-6">
        <TopicReader backHref={'/fsc/grade-12/' + params.slug} backLabel={'Back to ' + content.title} title={test.title} subtitle={'Chapter Test ' + params.number + ' · ' + content.title}>
          {test.mcqs.length > 0 && (<div className="mb-8"><h2 className="text-xl font-serif font-semibold text-ink mb-4">Multiple Choice Questions</h2><TopicMCQs mcqs={test.mcqs} /></div>)}
          {test.shortQuestions.length > 0 && (<div><h2 className="text-xl font-serif font-semibold text-ink mb-4">Short Questions</h2><TopicShortQuestions questions={test.shortQuestions} /></div>)}
        </TopicReader>
      </div>
    </div>
  );
}
