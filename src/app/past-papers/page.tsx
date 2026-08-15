import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PastPaperClient } from '@/components/PastPaperClient';

export const metadata = { title: 'Past Papers' };

export default function PastPapersPage() {
  return (
    <div className="container-wide py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Past Papers' }]} />
      <div className="mt-6 mb-8">
        <span className="eyebrow mb-2">Exam Archive</span>
        <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-ink">Past Papers</h1>
        <p className="mt-3 text-ink-muted max-w-2xl leading-relaxed">Browse past papers for FSc, MDCAT and ECAT. Filter by exam type and solved/unsolved status.</p>
      </div>
      <PastPaperClient />
    </div>
  );
}
