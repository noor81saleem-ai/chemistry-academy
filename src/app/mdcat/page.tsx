import Link from 'next/link';
import { ArrowRight, Atom, FlaskConical, Beaker } from 'lucide-react';
import { mdcatGroups } from '@/data/curriculum';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = { title: 'MDCAT Chemistry' };

export default function MdcatPage() {
  const icons = [Atom, FlaskConical, Beaker];
  return (
    <div className="container-wide py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'MDCAT' }]} />
      <div className="mt-6 mb-8">
        <span className="eyebrow mb-2">Medical Entry Test</span>
        <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-ink">MDCAT Chemistry</h1>
        <p className="mt-3 text-ink-muted max-w-2xl leading-relaxed">Comprehensive MDCAT Chemistry preparation covering Physical, Inorganic and Organic Chemistry. Each section includes topic-wise study notes, key concepts, MCQs and practice questions.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {mdcatGroups.map((group, i) => {
          const Icon = icons[i] || Atom;
          return (
            <Link key={group.slug} href={`/mdcat/${group.slug}`} className="card-hover p-6 group">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700"><Icon className="h-5 w-5" /></span>
              <h2 className="mt-3 font-serif text-xl font-semibold text-ink group-hover:text-brand-700 transition-colors">{group.title}</h2>
              <p className="mt-2 text-sm text-ink-muted leading-relaxed">{group.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-ink-light">{group.topics.length} topics</span>
                <span className="text-sm font-medium text-brand-700 flex items-center gap-1 group-hover:gap-2 transition-all">Explore <ArrowRight className="h-3.5 w-3.5" /></span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
