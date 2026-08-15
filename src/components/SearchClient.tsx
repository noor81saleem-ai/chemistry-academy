'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search as SearchIcon } from 'lucide-react';
import { fscGrades, fundamentalsUnits, mdcatGroups, ecatGroups } from '@/data/curriculum';
import { blogPosts } from '@/data/blog';

type SearchResult = { title: string; url: string; category: string; description?: string };

export function SearchClient() {
  const [query, setQuery] = useState('');

  const results = useMemo<SearchResult[]>(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    const all: SearchResult[] = [];

    for (const grade of fscGrades) {
      all.push({ title: grade.title, url: `/fsc/${grade.slug}`, category: 'FSc', description: grade.description });
      for (const ch of grade.chapters) {
        all.push({ title: `${grade.title} - ${ch.title}`, url: `/fsc/${grade.slug}/${ch.slug}`, category: 'FSc Chapter' });
      }
    }
    for (const group of mdcatGroups) {
      all.push({ title: `MDCAT - ${group.title}`, url: `/mdcat/${group.slug}`, category: 'MDCAT', description: group.description });
      for (const topic of group.topics) {
        all.push({ title: `MDCAT - ${topic.title}`, url: `/mdcat/${group.slug}/${topic.slug}`, category: 'MDCAT Topic' });
      }
    }
    for (const group of ecatGroups) {
      all.push({ title: `ECAT - ${group.title}`, url: `/ecat/${group.slug}`, category: 'ECAT', description: group.description });
      for (const topic of group.topics) {
        all.push({ title: `ECAT - ${topic.title}`, url: `/ecat/${group.slug}/${topic.slug}`, category: 'ECAT Topic' });
      }
    }
    for (const unit of fundamentalsUnits) {
      all.push({ title: `Fundamentals - ${unit.title}`, url: `/fundamentals/${unit.slug}`, category: 'Fundamentals' });
    }
    const resources = [
      { title: 'Study Notes', url: '/resources/study-notes' }, { title: 'MCQs', url: '/resources/mcqs' },
      { title: 'Worksheets', url: '/resources/worksheets' }, { title: 'Formula Sheets', url: '/resources/formula-sheets' },
      { title: 'Periodic Table', url: '/resources/periodic-table' }, { title: 'Exam Tips', url: '/resources/exam-tips' },
    ];
    for (const r of resources) all.push({ title: r.title, url: r.url, category: 'Resources' });
    for (const post of blogPosts) all.push({ title: post.title, url: `/blog/${post.slug}`, category: 'Blog', description: post.excerpt });
    all.push({ title: 'Past Papers', url: '/past-papers', category: 'Past Papers' });

    return all.filter((r) => r.title.toLowerCase().includes(q) || r.category.toLowerCase().includes(q) || (r.description && r.description.toLowerCase().includes(q)));
  }, [query]);

  return (
    <div>
      <div className="relative">
        <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-light pointer-events-none" />
        <input autoFocus type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search chapters, topics, resources, blog posts..." className="input pl-11 text-base" />
      </div>

      {query.trim() && (
        <div className="mt-6">
          <p className="text-sm text-ink-muted mb-3">{results.length} result{results.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;</p>
          {results.length === 0 ? (
            <div className="card p-8 text-center"><p className="text-ink-muted">No results found. Try a different search term.</p></div>
          ) : (
            <div className="flex flex-col gap-2">
              {results.map((r, i) => (
                <Link key={i} href={r.url} className="card-hover p-4 flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="chip chip-brand">{r.category}</span>
                    <span className="font-medium text-ink">{r.title}</span>
                  </div>
                  {r.description && <p className="text-sm text-ink-muted">{r.description}</p>}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {!query.trim() && (
        <div className="mt-8">
          <h2 className="text-lg font-serif font-semibold text-ink mb-3">Popular pages</h2>
          <div className="grid gap-2 sm:grid-cols-2">
            <Link href="/fsc/grade-11" className="card-hover p-3 text-sm"><span className="chip chip-brand">FSc</span><span className="ml-2 font-medium text-ink">Grade 11 Chemistry</span></Link>
            <Link href="/fsc/grade-12" className="card-hover p-3 text-sm"><span className="chip chip-brand">FSc</span><span className="ml-2 font-medium text-ink">Grade 12 Chemistry</span></Link>
            <Link href="/mdcat" className="card-hover p-3 text-sm"><span className="chip chip-brand">MDCAT</span><span className="ml-2 font-medium text-ink">MDCAT Chemistry</span></Link>
            <Link href="/resources/periodic-table" className="card-hover p-3 text-sm"><span className="chip chip-brand">Resources</span><span className="ml-2 font-medium text-ink">Periodic Table</span></Link>
          </div>
        </div>
      )}
    </div>
  );
}
