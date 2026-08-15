import { notFound } from 'next/navigation';
import { fscGrades } from '@/data/curriculum';
import { getChapterContent } from '@/data/chapter-content/registry';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TopicReader, TopicNumericals } from '@/components/TopicReader';

export function generateStaticParams() {
  const grade = fscGrades.find((g) => g.slug === 'grade-12')!;
  const params: { slug: string; number: string }[] = [];
  for (const ch of grade.chapters) {
    const content = getChapterContent('grade-12', ch.slug);
    if (content) for (const n of content.numericals) params.push({ slug: ch.slug, number: String(n.number) });
  }
  return params;
}

export default function NumericalPage({ params }: { params: { slug: string; number: string } }) {
  const content = getChapterContent('grade-12', params.slug);
  if (!content) notFound();
  const numerical = content.numericals.find((n) => n.number === parseInt(params.number, 10));
  if (!numerical) notFound();
  return (
    <div className="container-narrow py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'FSc', href: '/fsc' }, { label: 'Grade 12', href: '/fsc/grade-12' }, { label: content.title, href: '/fsc/grade-12/' + params.slug }, { label: 'Numerical ' + params.number }]} />
      <div className="mt-6">
        <TopicReader backHref={'/fsc/grade-12/' + params.slug} backLabel={'Back to ' + content.title} title={'Numerical ' + params.number} subtitle={'Problem ' + params.number + ' · ' + content.title}>
          <TopicNumericals numericals={[numerical]} />
        </TopicReader>
      </div>
    </div>
  );
}
