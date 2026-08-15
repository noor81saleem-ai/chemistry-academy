import { fundamentalsUnits } from '@/data/curriculum';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ChapterCard } from '@/components/ChapterCard';

export const metadata = { title: 'Fundamentals of Chemistry' };

export default function FundamentalsPage() {
  return (
    <div className="container-wide py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Fundamentals' }]} />
      <div className="page-heading-box mt-6 mb-8">
        <span className="eyebrow mb-2">Foundation Course</span>
        <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-ink">Fundamentals of Chemistry</h1>
        <p className="mt-3 text-ink-muted max-w-2xl leading-relaxed">20 units covering all foundational Chemistry concepts. Perfect for students starting their Chemistry journey or revising core principles before FSc, MDCAT or ECAT.</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {fundamentalsUnits.map((unit) => (
          <ChapterCard key={unit.slug} href={`/fundamentals/${unit.slug}`} number={unit.number} title={unit.title} hasContent={unit.hasContent} />
        ))}
      </div>
    </div>
  );
}
