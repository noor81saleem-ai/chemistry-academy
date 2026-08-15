import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ContentRenderer } from './ContentRenderer';
import { MCQQuiz } from './MCQQuiz';
import type { ContentBlock, MCQ, ShortQuestion, Numerical } from '@/data/chapter-content/types';

export function TopicReader({
  backHref,
  backLabel,
  title,
  subtitle,
  children,
}: {
  backHref: string;
  backLabel: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-6">
        <Link href={backHref} className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-brand-700 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </Link>
      </div>
      <div className="mb-6 pb-6 border-b border-line">
        <h1 className="text-3xl font-serif font-semibold text-ink">{title}</h1>
        {subtitle && <p className="mt-2 text-ink-muted">{subtitle}</p>}
      </div>
      <div className="pb-12">{children}</div>
    </div>
  );
}

export function TopicContent({ blocks }: { blocks: ContentBlock[] }) {
  return <ContentRenderer blocks={blocks} />;
}

export function TopicMCQs({ mcqs }: { mcqs: MCQ[] }) {
  return <MCQQuiz mcqs={mcqs} />;
}

export function TopicShortQuestions({ questions }: { questions: ShortQuestion[] }) {
  return (
    <div className="flex flex-col gap-4">
      {questions.map((q) => (
        <div key={q.number} className="card p-5">
          <p className="font-medium text-ink mb-2">
            <span className="text-brand-700 mr-1.5">Q{q.number}.</span>
            {q.question}
          </p>
          <p className="text-ink-muted leading-relaxed pl-6 border-l-2 border-brand-200">{q.answer}</p>
        </div>
      ))}
    </div>
  );
}

export function TopicNumericals({ numericals }: { numericals: Numerical[] }) {
  return (
    <div className="flex flex-col gap-5">
      {numericals.map((n) => (
        <div key={n.number} className="card p-6">
          <p className="font-medium text-ink mb-4">
            <span className="text-brand-700 mr-1.5">Problem {n.number}.</span>
            {n.question}
          </p>
          {n.given.length > 0 && (
            <div className="mb-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-700 mb-2">Given</p>
              <ul className="flex flex-col gap-1">
                {n.given.map((g, i) => (<li key={i} className="text-sm text-ink-muted font-mono">{g}</li>))}
              </ul>
            </div>
          )}
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700 mb-2">Formula</p>
            <div className="rounded-lg bg-brand-50/40 border border-line px-4 py-2.5 font-mono text-sm text-ink">{n.formula}</div>
          </div>
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700 mb-2">Solution</p>
            <div className="rounded-lg bg-cream border border-line p-4 text-sm text-ink-muted whitespace-pre-line leading-relaxed font-mono">{n.solution}</div>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-brand-50 border border-brand-200 px-4 py-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">Answer</span>
            <span className="font-mono font-semibold text-ink">{n.answer}</span>
            <span className="text-ink-muted">{n.unit}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
