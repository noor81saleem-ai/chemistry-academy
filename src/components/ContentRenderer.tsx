import type { ContentBlock } from '@/data/chapter-content/types';

export function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose-chem">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'heading':
            return <h3 key={i}>{block.text}</h3>;
          case 'paragraph':
            return <p key={i}>{block.text}</p>;
          case 'bullets':
            return (
              <ul key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          case 'numbers':
            return (
              <ol key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ol>
            );
          case 'equation':
            return (
              <div key={i} className="my-5 rounded-lg bg-brand-50/40 border border-line p-4 text-center overflow-x-auto">
                <div className="font-mono text-base text-ink leading-relaxed whitespace-pre-wrap">
                  {block.latex}
                </div>
                {block.caption && (
                  <p className="mt-2 text-xs text-ink-muted italic">{block.caption}</p>
                )}
              </div>
            );
          case 'table':
            return (
              <div key={i} className="overflow-x-auto my-5">
                <table>
                  <thead>
                    <tr>
                      {block.headers.map((h, j) => (
                        <th key={j}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j}>
                        {row.map((cell, k) => (
                          <td key={k}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case 'definition':
            return (
              <div key={i} className="callout-definition">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-700 mb-1">Definition</p>
                <p className="font-semibold text-ink">{block.term}</p>
                <p className="mt-1 text-ink-muted">{block.text}</p>
              </div>
            );
          case 'note':
            return (
              <div key={i} className="callout-note">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-700 mb-1">Note</p>
                <p className="text-ink-muted">{block.text}</p>
              </div>
            );
          case 'warning':
            return (
              <div key={i} className="callout-warning">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-700 mb-1">Warning</p>
                <p className="text-ink-muted">{block.text}</p>
              </div>
            );
          case 'image':
            return (
              <figure key={i} className="my-5">
                <img src={block.src} alt={block.alt} className="rounded-lg border border-line w-full" />
                {block.caption && (
                  <figcaption className="mt-2 text-center text-sm text-ink-muted italic">{block.caption}</figcaption>
                )}
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
