import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { QA } from '@/data/fundamentals';

export function QABlock({ qa, index, defaultOpen = true }: { qa: QA; index: number; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="qa-block border-b border-line/70 last:border-0 pb-5 last:pb-0">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-2xs font-bold text-brand-700">{index}</span>
        <div className="min-w-0 flex-1">
          <h3 className="qa-question">{qa.q}</h3>
          <div className={cn('mt-2 overflow-hidden transition-all', !open && 'max-h-0')}>
            <div className="qa-answer text-ink-700">{qa.a}</div>
          </div>
          {!open && (
            <button onClick={() => setOpen(true)} className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-brand-700 hover:text-brand-800">
              Show answer <ChevronDown className="h-3.5 w-3.5" />
            </button>
          )}
          {open && !defaultOpen && (
            <button onClick={() => setOpen(false)} className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-ink-500 hover:text-ink-700">
              Hide answer <ChevronDown className="h-3.5 w-3.5 rotate-180" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export function QAList({ items }: { items: QA[] }) {
  return (
    <div className="space-y-0">
      {items.map((qa, i) => (
        <QABlock key={i} qa={qa} index={i + 1} />
      ))}
    </div>
  );
}
