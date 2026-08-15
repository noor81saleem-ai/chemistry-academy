import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export type TocItem = { id: string; label: string };

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: [0, 1] }
    );
    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page" className="text-sm">
      <p className="mb-3 text-2xs font-semibold uppercase tracking-wider text-ink-500">On this page</p>
      <ul className="space-y-0.5 border-l border-line">
        {items.map((it) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              className={cn(
                '-ml-px block border-l-2 border-transparent py-1 pl-3 text-ink-600 transition-colors hover:text-ink-900',
                active === it.id ? 'border-brand-500 font-medium text-brand-700' : 'hover:border-ink-300'
              )}
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function ChapterNav({ prev, next }: { prev?: { to: string; label: string }; next?: { to: string; label: string } }) {
  return (
    <nav className="mt-12 flex items-stretch justify-between gap-3 border-t border-line pt-6" aria-label="Chapter navigation">
      {prev ? (
        <a href={prev.to} className="group flex flex-1 flex-col rounded-lg border border-line p-3 hover:border-ink-300 hover:shadow-soft transition-all">
          <span className="text-2xs font-medium uppercase tracking-wider text-ink-400">Previous</span>
          <span className="mt-0.5 text-sm font-medium text-ink-800 group-hover:text-brand-700 line-clamp-1">{prev.label}</span>
        </a>
      ) : <span className="flex-1" />}
      {next ? (
        <a href={next.to} className="group flex flex-1 flex-col items-end rounded-lg border border-line p-3 text-right hover:border-ink-300 hover:shadow-soft transition-all">
          <span className="text-2xs font-medium uppercase tracking-wider text-ink-400">Next</span>
          <span className="mt-0.5 text-sm font-medium text-ink-800 group-hover:text-brand-700 line-clamp-1">{next.label}</span>
        </a>
      ) : <span className="flex-1" />}
    </nav>
  );
}
