import Link from 'next/link';
import { ArrowRight, BookOpen, FileText, Lightbulb, HelpCircle, MessageSquare, AlignLeft, Calculator, ClipboardCheck, FileQuestion } from 'lucide-react';
import type { ChapterContent } from '@/data/chapter-content/types';

type SectionCardProps = {
  title: string;
  icon: React.ReactNode;
  items: { label: string; href: string }[];
  emptyMessage: string;
};

function SectionCard({ title, icon, items, emptyMessage }: SectionCardProps) {
  return (
    <div className="card p-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
          {icon}
        </span>
        <h3 className="font-serif text-lg font-semibold text-ink">{title}</h3>
        <span className="ml-auto text-xs text-ink-light">{items.length} item{items.length !== 1 ? 's' : ''}</span>
      </div>
      {items.length === 0 ? (
        <p className="text-sm text-ink-light">{emptyMessage}</p>
      ) : (
        <ul className="flex flex-col gap-1">
          {items.map((item, i) => (
            <li key={i}>
              <Link
                href={item.href}
                className="flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm text-ink-muted hover:bg-brand-50 hover:text-brand-700 transition-colors group"
              >
                <span>{item.label}</span>
                <ArrowRight className="h-4 w-4 text-ink-light group-hover:text-brand-600 group-hover:translate-x-0.5 transition-all" />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function ChapterView({
  content,
  gradeSlug,
  chapterSlug,
}: {
  content: ChapterContent;
  gradeSlug: string;
  chapterSlug: string;
}) {
  const basePath = `/fsc/${gradeSlug}/${chapterSlug}`;

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {content.overview && (
        <div className="card p-5 md:col-span-2">
          <span className="eyebrow mb-2 block">Chapter Overview</span>
          <p className="text-ink-muted leading-relaxed">{content.overview}</p>
        </div>
      )}

      {content.objectives.length > 0 && (
        <div className="card p-5 md:col-span-2">
          <h3 className="font-serif text-lg font-semibold text-ink mb-3">Learning Objectives</h3>
          <ul className="flex flex-col gap-1.5">
            {content.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-ink-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                {obj}
              </li>
            ))}
          </ul>
        </div>
      )}

      <SectionCard
        title="Lectures"
        icon={<BookOpen className="h-4 w-4" />}
        items={content.lectures.map((l) => ({ label: `Lecture ${l.number}: ${l.title}`, href: `${basePath}/lecture/${l.number}` }))}
        emptyMessage="No lectures added yet."
      />

      <SectionCard
        title="Study Notes"
        icon={<FileText className="h-4 w-4" />}
        items={content.studyNotes.length > 0 ? [{ label: 'View Study Notes', href: `${basePath}/notes` }] : []}
        emptyMessage="No study notes added yet."
      />

      <SectionCard
        title="Key Concepts"
        icon={<Lightbulb className="h-4 w-4" />}
        items={content.keyConcepts.length > 0 ? [{ label: 'View Key Concepts', href: `${basePath}/key-concepts` }] : []}
        emptyMessage="No key concepts added yet."
      />

      <SectionCard
        title="MCQs"
        icon={<HelpCircle className="h-4 w-4" />}
        items={content.mcqs.length > 0 ? [{ label: `View all ${content.mcqs.length} MCQs`, href: `${basePath}/mcqs` }] : []}
        emptyMessage="No MCQs added yet."
      />

      <SectionCard
        title="Short Questions"
        icon={<MessageSquare className="h-4 w-4" />}
        items={content.shortQuestions.length > 0 ? [{ label: `View all ${content.shortQuestions.length} short questions`, href: `${basePath}/short-questions` }] : []}
        emptyMessage="No short questions added yet."
      />

      <SectionCard
        title="Long Questions"
        icon={<AlignLeft className="h-4 w-4" />}
        items={content.longQuestions.map((q) => ({ label: `Q${q.number}: ${q.question.slice(0, 60)}${q.question.length > 60 ? '...' : ''}`, href: `${basePath}/long-question/${q.number}` }))}
        emptyMessage="No long questions added yet."
      />

      <SectionCard
        title="Numericals"
        icon={<Calculator className="h-4 w-4" />}
        items={content.numericals.map((n) => ({ label: `Problem ${n.number}: ${n.question.slice(0, 60)}${n.question.length > 60 ? '...' : ''}`, href: `${basePath}/numerical/${n.number}` }))}
        emptyMessage="No numericals added yet."
      />

      <SectionCard
        title="Chapter Tests"
        icon={<ClipboardCheck className="h-4 w-4" />}
        items={content.chapterTests.map((t) => ({ label: `Test ${t.number}: ${t.title}`, href: `${basePath}/test/${t.number}` }))}
        emptyMessage="No chapter tests added yet."
      />

      <SectionCard
        title="Past Paper Questions"
        icon={<FileQuestion className="h-4 w-4" />}
        items={content.pastPaperQuestions.length > 0 ? [{ label: `View all ${content.pastPaperQuestions.length} past paper questions`, href: `${basePath}/past-paper-questions` }] : []}
        emptyMessage="No past paper questions added yet."
      />

      {content.keyDefinitions.length > 0 && (
        <div className="card p-5 md:col-span-2">
          <h3 className="font-serif text-lg font-semibold text-ink mb-3">Key Definitions</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {content.keyDefinitions.map((d, i) => (
              <div key={i} className="rounded-lg border border-line bg-brand-50/30 p-3">
                <p className="font-medium text-brand-700 text-sm">{d.term}</p>
                <p className="mt-1 text-sm text-ink-muted">{d.def}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {content.formulae.length > 0 && (
        <div className="card p-5 md:col-span-2">
          <h3 className="font-serif text-lg font-semibold text-ink mb-3">Key Formulae</h3>
          <div className="flex flex-col gap-2">
            {content.formulae.map((f, i) => (
              <div key={i} className="rounded-lg bg-brand-50/40 border border-line px-4 py-2.5 font-mono text-sm text-ink">{f}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
