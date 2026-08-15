import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ChapterCard({
  href,
  number,
  title,
  description,
  hasContent,
}: {
  href: string;
  number: number;
  title: string;
  description?: string;
  hasContent?: boolean;
}) {
  return (
    <Link href={href} className="card-hover p-5 flex flex-col gap-2 group">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className={cn(
            'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-semibold',
            hasContent ? 'bg-brand-100 text-brand-700' : 'bg-brand-50 text-brand-600'
          )}>
            {String(number).padStart(2, '0')}
          </span>
          <div>
            <h3 className="font-serif text-base font-semibold text-ink group-hover:text-brand-700 transition-colors">
              {title}
            </h3>
            {hasContent && (
              <span className="chip chip-brand mt-1">Content available</span>
            )}
          </div>
        </div>
        <ArrowRight className="h-4 w-4 text-ink-light group-hover:text-brand-600 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
      </div>
      {description && <p className="text-sm text-ink-muted">{description}</p>}
    </Link>
  );
}
