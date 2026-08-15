'use client';

import { useState } from 'react';
import { Check, X, Info } from 'lucide-react';
import type { MCQ } from '@/data/chapter-content/types';
import { cn } from '@/lib/utils';

export function MCQQuiz({ mcqs }: { mcqs: MCQ[] }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const selectAnswer = (mcqNumber: number, optionIndex: number) => {
    if (revealed[mcqNumber]) return;
    setAnswers((p) => ({ ...p, [mcqNumber]: optionIndex }));
  };

  const reveal = (mcqNumber: number) => {
    setRevealed((p) => ({ ...p, [mcqNumber]: true }));
  };

  if (mcqs.length === 0) {
    return <p className="text-ink-muted text-sm">No MCQs added yet.</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      {mcqs.map((mcq) => {
        const selected = answers[mcq.number];
        const isRevealed = revealed[mcq.number];
        const isCorrect = selected === mcq.correctIndex;

        return (
          <div key={mcq.number} className="card p-5">
            <p className="font-medium text-ink mb-3">
              <span className="text-brand-700 mr-1.5">Q{mcq.number}.</span>
              {mcq.question}
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {mcq.options.map((option, i) => {
                const isSelected = selected === i;
                const isAnswer = mcq.correctIndex === i;
                return (
                  <button
                    key={i}
                    onClick={() => selectAnswer(mcq.number, i)}
                    disabled={isRevealed}
                    className={cn(
                      'flex items-center gap-2.5 rounded-lg border px-3.5 py-2.5 text-sm text-left transition-all',
                      !isRevealed && isSelected && 'border-brand-500 bg-brand-50 text-ink',
                      !isRevealed && !isSelected && 'border-line bg-paper text-ink-muted hover:border-brand-300 hover:bg-brand-50/50',
                      isRevealed && isAnswer && 'border-brand-500 bg-brand-50 text-brand-800',
                      isRevealed && isSelected && !isAnswer && 'border-red-300 bg-red-50 text-red-800',
                      isRevealed && !isSelected && !isAnswer && 'border-line bg-paper text-ink-light opacity-60'
                    )}
                  >
                    <span className={cn(
                      'flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold border',
                      !isRevealed && isSelected && 'border-brand-500 bg-brand-500 text-white',
                      !isRevealed && !isSelected && 'border-line text-ink-muted',
                      isRevealed && isAnswer && 'border-brand-500 bg-brand-500 text-white',
                      isRevealed && isSelected && !isAnswer && 'border-red-400 bg-red-400 text-white',
                      isRevealed && !isSelected && !isAnswer && 'border-line text-ink-light'
                    )}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span>{option}</span>
                    {isRevealed && isAnswer && <Check className="h-4 w-4 ml-auto text-brand-600" />}
                    {isRevealed && isSelected && !isAnswer && <X className="h-4 w-4 ml-auto text-red-500" />}
                  </button>
                );
              })}
            </div>

            {!isRevealed && selected !== undefined && (
              <button onClick={() => reveal(mcq.number)} className="btn-outline btn-sm mt-3">
                Check Answer
              </button>
            )}

            {isRevealed && (
              <div className={cn(
                'mt-3 flex items-start gap-2 rounded-lg p-3 text-sm',
                isCorrect ? 'bg-brand-50 text-brand-800' : 'bg-red-50 text-red-800'
              )}>
                <Info className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">{isCorrect ? 'Correct!' : 'Not quite right.'}</p>
                  <p className="mt-0.5 text-ink-muted">{mcq.explanation}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
