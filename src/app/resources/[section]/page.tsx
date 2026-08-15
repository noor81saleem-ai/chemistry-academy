import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PeriodicTable } from '@/components/PeriodicTable';

export function generateStaticParams() {
  return [
    { section: 'study-notes' }, { section: 'mcqs' }, { section: 'worksheets' },
    { section: 'formula-sheets' }, { section: 'periodic-table' }, { section: 'exam-tips' },
  ];
}

const sectionInfo: Record<string, { title: string; eyebrow: string; description: string }> = {
  'study-notes': { title: 'Study Notes', eyebrow: 'Resources', description: 'Chapter-wise study notes for quick revision of key Chemistry concepts.' },
  'mcqs': { title: 'MCQs', eyebrow: 'Resources', description: 'Practice multiple choice questions organised by topic and difficulty.' },
  'worksheets': { title: 'Worksheets', eyebrow: 'Resources', description: 'Practice worksheets with solved examples for self-assessment.' },
  'formula-sheets': { title: 'Formula Sheets', eyebrow: 'Resources', description: 'Quick reference sheets for all key Chemistry formulae.' },
  'periodic-table': { title: 'Periodic Table', eyebrow: 'Interactive Tool', description: 'Interactive periodic table with element details. Hover over any element to see its properties.' },
  'exam-tips': { title: 'Exam Tips', eyebrow: 'Resources', description: 'Strategies and tips for scoring well in FSc, MDCAT and ECAT exams.' },
};

export default function ResourceSectionPage({ params }: { params: { section: string } }) {
  const info = sectionInfo[params.section];
  if (!info) notFound();

  return (
    <div className="container-wide py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: info.title }]} />
      <div className="mt-6 mb-8">
        <span className="eyebrow mb-2">{info.eyebrow}</span>
        <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-ink">{info.title}</h1>
        <p className="mt-3 text-ink-muted max-w-2xl leading-relaxed">{info.description}</p>
      </div>

      {params.section === 'periodic-table' ? (
        <div className="card p-6"><PeriodicTable /></div>
      ) : (
        <div className="card p-8 text-center">
          <p className="text-ink-muted">Content for this section will be added soon. Check back later or explore the FSc and MDCAT chapters for related material.</p>
        </div>
      )}
    </div>
  );
}
