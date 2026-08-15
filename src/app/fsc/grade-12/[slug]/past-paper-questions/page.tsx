import { notFound } from 'next/navigation';
import { fscGrades } from '@/data/curriculum';
import { getChapterContent } from '@/data/chapter-content/registry';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TopicReader, TopicShortQuestions } from '@/components/TopicReader';

export function generateStaticParams() {
  return fscGrades.find((g) => g.slug === 'grade-12')!.chapters.map((ch) => ({ slug: ch.slug }));
}

export default function PastPaperQuestionsPage({ params }: { params: { slug: string } }) {
  const content = getChapterContent('grade-12', params.slug);
  if (!content) notFound();
  const questions = content.pastPaperQuestions.map((q) => ({ number: q.number, question: q.question, answer: q.answer + ' (Source: ' + q.source + ')' }));
  return (
    <div className="container-narrow py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'FSc', href: '/fsc' }, { label: 'Grade 12', href: '/fsc/grade-12' }, { label: content.title, href: '/fsc/grade-12/' + params.slug }, { label: 'Past Paper Questions' }]} />
      <div className="mt-6">
        <TopicReader backHref={'/fsc/grade-12/' + params.slug} backLabel={'Back to ' + content.title} title="Past Paper Questions" subtitle={questions.length + ' questions · ' + content.title}>
          <TopicShortQuestions questions={questions} />
        </TopicReader>
      </div>
    </div>
  );
}
