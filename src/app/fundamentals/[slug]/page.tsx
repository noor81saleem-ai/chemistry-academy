import { notFound } from 'next/navigation';
import { fundamentalsUnits } from '@/data/curriculum';
import { fundamentalsChapters } from '@/data/fundamentals';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TopicReader } from '@/components/TopicReader';

export function generateStaticParams() {
  return fundamentalsUnits.map((u) => ({ slug: u.slug }));
}

export default function FundamentalsChapterPage({ params }: { params: { slug: string } }) {
  const unit = fundamentalsUnits.find((u) => u.slug === params.slug);
  if (!unit) notFound();
  const chapter = fundamentalsChapters[params.slug];

  return (
    <div className="container-narrow py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Fundamentals', href: '/fundamentals' }, { label: unit.title }]} />
      <div className="mt-6">
        <TopicReader backHref="/fundamentals" backLabel="Back to Fundamentals" title={unit.title} subtitle={'Unit ' + unit.number}>
          {chapter ? (
            <div>
              <p className="text-ink-muted leading-relaxed mb-6">{chapter.intro}</p>
              {chapter.objectives.length > 0 && (
                <div className="card p-5 mb-6">
                  <h3 className="font-serif text-lg font-semibold text-ink mb-3">Learning Objectives</h3>
                  <ul className="flex flex-col gap-1.5">{chapter.objectives.map((o, i) => (<li key={i} className="flex items-start gap-2 text-sm text-ink-muted"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />{o}</li>))}</ul>
                </div>
              )}
              {chapter.keyTerms.length > 0 && (
                <div className="card p-5 mb-6">
                  <h3 className="font-serif text-lg font-semibold text-ink mb-3">Key Terms</h3>
                  <div className="grid gap-3 sm:grid-cols-2">{chapter.keyTerms.map((t, i) => (<div key={i} className="rounded-lg border border-line bg-brand-50/30 p-3"><p className="font-medium text-brand-700 text-sm">{t.term}</p><p className="mt-1 text-sm text-ink-muted">{t.def}</p></div>))}</div>
                </div>
              )}
              {chapter.formulae && chapter.formulae.length > 0 && (
                <div className="card p-5 mb-6">
                  <h3 className="font-serif text-lg font-semibold text-ink mb-3">Key Formulae</h3>
                  <div className="flex flex-col gap-2">{chapter.formulae.map((f, i) => (<div key={i} className="rounded-lg bg-brand-50/40 border border-line px-4 py-2.5 font-mono text-sm text-ink">{f}</div>))}</div>
                </div>
              )}
              {chapter.qa.length > 0 && (
                <div>
                  <h3 className="font-serif text-xl font-semibold text-ink mb-4">Questions & Answers</h3>
                  <div className="flex flex-col gap-4">{chapter.qa.map((item, i) => (<div key={i} className="card p-5"><p className="font-medium text-ink mb-2">{item.q}</p><p className="text-ink-muted leading-relaxed pl-6 border-l-2 border-brand-200">{item.a}</p></div>))}</div>
                </div>
              )}
            </div>
          ) : (
            <div className="card p-8 text-center"><p className="text-ink-muted">Content for this unit has not been added yet.</p></div>
          )}
        </TopicReader>
      </div>
    </div>
  );
}
