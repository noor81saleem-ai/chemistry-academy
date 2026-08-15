import Link from 'next/link';
import { ArrowRight, FileText, HelpCircle, Calculator, FlaskConical, Award, Table } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = { title: 'Resources' };

export default function ResourcesPage() {
  const resources = [
    { icon: FileText, title: 'Study Notes', desc: 'Chapter-wise study notes for quick revision', href: '/resources/study-notes' },
    { icon: HelpCircle, title: 'MCQs', desc: 'Practice multiple choice questions by topic', href: '/resources/mcqs' },
    { icon: Calculator, title: 'Worksheets', desc: 'Practice worksheets with solved examples', href: '/resources/worksheets' },
    { icon: FileText, title: 'Formula Sheets', desc: 'Quick reference for all key Chemistry formulae', href: '/resources/formula-sheets' },
    { icon: Table, title: 'Periodic Table', desc: 'Interactive periodic table with element details', href: '/resources/periodic-table' },
    { icon: Award, title: 'Exam Tips', desc: 'Strategies and tips for scoring well in exams', href: '/resources/exam-tips' },
  ];
  return (
    <div className="container-wide py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Resources' }]} />
      <div className="mt-6 mb-8">
        <span className="eyebrow mb-2">Learning Materials</span>
        <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-ink">Resources</h1>
        <p className="mt-3 text-ink-muted max-w-2xl leading-relaxed">A collection of study materials to support your Chemistry learning. Notes, MCQs, worksheets, formula sheets and more.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((r) => (
          <Link key={r.href} href={r.href} className="card-hover p-6 group">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700"><r.icon className="h-5 w-5" /></span>
            <h2 className="mt-3 font-serif text-lg font-semibold text-ink group-hover:text-brand-700 transition-colors">{r.title}</h2>
            <p className="mt-2 text-sm text-ink-muted leading-relaxed">{r.desc}</p>
            <span className="mt-3 text-sm font-medium text-brand-700 flex items-center gap-1 group-hover:gap-2 transition-all">Open <ArrowRight className="h-3.5 w-3.5" /></span>
          </Link>
        ))}
      </div>
    </div>
  );
}
