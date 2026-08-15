import { fscGrades } from '@/data/curriculum';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ChapterCard } from '@/components/ChapterCard';

export const metadata = { title: 'Grade 11 Chemistry' };

export default function Grade11Page() {
  const grade = fscGrades.find((g) => g.slug === 'grade-11')!;
  return (
    <div className="container-wide py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'FSc', href: '/fsc' }, { label: grade.title }]} />
      <div className="mt-6 mb-8">
        <span className="eyebrow mb-2">FSc Part 1</span>
        <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-ink">{grade.title}</h1>
        <p className="mt-3 text-ink-muted max-w-2xl leading-relaxed">{grade.description}</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {grade.chapters.map((ch) => (<ChapterCard key={ch.slug} href={`/fsc/${grade.slug}/${ch.slug}`} number={ch.number} title={ch.title} hasContent={ch.hasContent} />))}
      </div>
    </div>
  );
}
