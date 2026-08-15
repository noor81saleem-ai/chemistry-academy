'use client';

import { useState, useMemo } from 'react';
import { FileText, Video, CheckCircle2, Circle } from 'lucide-react';
import { pastPapers } from '@/data/pastPapers';
import { cn } from '@/lib/utils';

export function PastPaperClient() {
  const [examFilter, setExamFilter] = useState('all');
  const [solvedOnly, setSolvedOnly] = useState(false);

  const filtered = useMemo(() => {
    return pastPapers.filter((p) => {
      if (examFilter !== 'all' && p.exam !== examFilter) return false;
      if (solvedOnly && !p.solved) return false;
      return true;
    });
  }, [examFilter, solvedOnly]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex gap-2 flex-wrap">
          {['all', 'FSc', 'MDCAT', 'ECAT'].map((exam) => (
            <button key={exam} onClick={() => setExamFilter(exam)} className={cn('rounded-lg px-3.5 py-2 text-sm font-medium transition-colors', examFilter === exam ? 'bg-brand-700 text-white' : 'bg-paper border border-line text-ink-muted hover:border-brand-300 hover:text-brand-700')}>
              {exam === 'all' ? 'All Exams' : exam}
            </button>
          ))}
        </div>
        <button onClick={() => setSolvedOnly(!solvedOnly)} className={cn('flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors', solvedOnly ? 'bg-brand-700 text-white' : 'bg-paper border border-line text-ink-muted hover:border-brand-300 hover:text-brand-700')}>
          {solvedOnly ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
          Solved only
        </button>
      </div>

      <div className="grid gap-3">
        {filtered.map((paper) => (
          <div key={paper.id} className="card-hover p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700"><FileText className="h-5 w-5" /></span>
                <div>
                  <h3 className="font-medium text-ink">{paper.title}</h3>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <span className="chip chip-brand">{paper.exam}</span>
                    {paper.grade && <span className="chip chip-ink">Grade {paper.grade}</span>}
                    {paper.board && <span className="chip chip-ink">{paper.board}</span>}
                    <span className="chip chip-ink">{paper.year}</span>
                    {paper.solved ? <span className="chip chip-brand"><CheckCircle2 className="h-3 w-3" /> Solved</span> : <span className="chip chip-ink">Unsolved</span>}
                    {paper.hasVideo && <span className="chip chip-gold"><Video className="h-3 w-3" /> Video</span>}
                  </div>
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                {paper.solved && <button className="btn-outline btn-sm"><FileText className="h-3.5 w-3.5" /> Solution</button>}
                {paper.hasVideo && <button className="btn-outline btn-sm"><Video className="h-3.5 w-3.5" /> Video</button>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && <div className="card p-8 text-center"><p className="text-ink-muted">No past papers match these filters.</p></div>}
    </div>
  );
}
