'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import {
  BookOpen,
  CalendarDays,
  FileText,
  GraduationCap,
  Search,
  X,
} from 'lucide-react';

import { pastPapers } from '@/data/pastPapers';
import { cn } from '@/lib/utils';

type CategoryFilter =
  | 'all'
  | 'grade-9'
  | 'grade-10'
  | 'grade-11'
  | 'grade-12'
  | 'mdcat'
  | 'ecat';

const categories: {
  id: CategoryFilter;
  label: string;
}[] = [
  {
    id: 'all',
    label: 'All Papers',
  },
  {
    id: 'grade-9',
    label: 'Grade 9',
  },
  {
    id: 'grade-10',
    label: 'Grade 10',
  },
  {
    id: 'grade-11',
    label: 'FSc Grade 11',
  },
  {
    id: 'grade-12',
    label: 'FSc Grade 12',
  },
  {
    id: 'mdcat',
    label: 'MDCAT',
  },
  {
    id: 'ecat',
    label: 'ECAT',
  },
];

function matchesCategory(
  category: CategoryFilter,
  paper: (typeof pastPapers)[number],
) {
  switch (category) {
    case 'grade-9':
      return paper.exam === 'Matric' && paper.grade === 9;

    case 'grade-10':
      return paper.exam === 'Matric' && paper.grade === 10;

    case 'grade-11':
      return paper.exam === 'FSc' && paper.grade === 11;

    case 'grade-12':
      return paper.exam === 'FSc' && paper.grade === 12;

    case 'mdcat':
      return paper.exam === 'MDCAT';

    case 'ecat':
      return paper.exam === 'ECAT';

    default:
      return true;
  }
}

function getCategoryName(category: CategoryFilter) {
  return (
    categories.find((item) => item.id === category)?.label ??
    'All Papers'
  );
}

function getPaperLevel(
  paper: (typeof pastPapers)[number],
) {
  if (paper.exam === 'Matric' && paper.grade === 9) {
    return 'Grade 9';
  }

  if (paper.exam === 'Matric' && paper.grade === 10) {
    return 'Grade 10';
  }

  if (paper.exam === 'FSc' && paper.grade === 11) {
    return 'FSc Grade 11';
  }

  if (paper.exam === 'FSc' && paper.grade === 12) {
    return 'FSc Grade 12';
  }

  return paper.exam;
}

export function PastPaperClient() {
  const [category, setCategory] =
    useState<CategoryFilter>('all');

  const [searchQuery, setSearchQuery] =
    useState('');

  const filteredPapers = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return pastPapers
      .filter((paper) => {
        if (!matchesCategory(category, paper)) {
          return false;
        }

        if (!query) {
          return true;
        }

        const searchableText = [
          paper.title,
          paper.exam,
          paper.grade
            ? `grade ${paper.grade}`
            : '',
          paper.board ?? '',
          String(paper.year),
        ]
          .join(' ')
          .toLowerCase();

        return searchableText.includes(query);
      })
      .sort((a, b) => b.year - a.year);
  }, [category, searchQuery]);

  const activeCategoryName =
    getCategoryName(category);

  const hasActiveFilters =
    category !== 'all' ||
    searchQuery.trim().length > 0;

  function resetFilters() {
    setCategory('all');
    setSearchQuery('');
  }

  return (
    <section
      className="space-y-6"
      aria-labelledby="past-paper-browser-heading"
    >
      {/* =====================================================
          SEARCH AND FILTER AREA
      ====================================================== */}

      <div className="card p-4 sm:p-5 lg:p-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow">
                Chemistry Paper Library
              </span>

              <h2
                id="past-paper-browser-heading"
                className="mt-2 font-serif text-2xl font-semibold text-ink sm:text-3xl"
              >
                Find Your Chemistry Past Paper
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
                Browse Chemistry past papers by class,
                entry test and year. Select an available
                paper to open the complete PDF.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3 rounded-xl border border-line bg-paper px-4 py-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <FileText
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </div>

              <div>
                <p className="text-xs text-ink-muted">
                  Papers listed
                </p>

                <p className="font-semibold text-ink">
                  {filteredPapers.length}
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              SEARCH
          ================================================== */}

          <div className="relative">
            <label
              htmlFor="past-paper-search"
              className="sr-only"
            >
              Search Chemistry past papers
            </label>

            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
              aria-hidden="true"
            />

            <input
              id="past-paper-search"
              type="search"
              value={searchQuery}
              onChange={(event) =>
                setSearchQuery(event.target.value)
              }
              placeholder="Search year, class or exam..."
              className="w-full rounded-xl border border-line bg-paper py-3.5 pl-11 pr-12 text-sm text-ink outline-none transition-colors focus:border-brand-300"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-brand-50 hover:text-brand-700"
                aria-label="Clear search"
              >
                <X
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </button>
            )}
          </div>

          {/* =================================================
              CATEGORY FILTERS
          ================================================== */}

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Select class or exam
            </p>

            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Past paper categories"
            >
              {categories.map((item) => {
                const isActive =
                  category === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      setCategory(item.id)
                    }
                    aria-pressed={isActive}
                    className={cn(
                      'rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors',
                      isActive
                        ? 'border-brand-700 bg-brand-700 text-white'
                        : 'border-line bg-paper text-ink-muted hover:border-brand-300 hover:text-brand-700',
                    )}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          RESULT HEADER
      ====================================================== */}

      <div className="flex flex-col gap-3 border-b border-line pb-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
            Past Papers
          </p>

          <h3 className="mt-1 font-serif text-xl font-semibold text-ink sm:text-2xl">
            {activeCategoryName}
          </h3>

          <p className="mt-1 text-sm text-ink-muted">
            {searchQuery.trim()
              ? `Showing papers matching “${searchQuery.trim()}”`
              : 'Latest papers are shown first.'}
          </p>
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={resetFilters}
            className="self-start text-sm font-medium text-brand-700 hover:underline sm:self-auto"
          >
            Reset filters
          </button>
        )}
      </div>

      {/* =====================================================
          PAST PAPERS LIST
      ====================================================== */}

      {filteredPapers.length > 0 ? (
        <div className="grid gap-4">
          {filteredPapers.map((paper) => {
            const paperLevel =
              getPaperLevel(paper);

            const hasPdf =
              Boolean(paper.pdfUrl);

            return (
              <article
                key={paper.id}
                className="card-hover overflow-hidden"
              >
                <div className="p-4 sm:p-5">
                  <div className="flex items-start gap-4">
                    {/* =====================================
                        PAPER ICON
                    ====================================== */}

                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 sm:h-12 sm:w-12"
                      aria-hidden="true"
                    >
                      <FileText className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>

                    {/* =====================================
                        PAPER CONTENT
                    ====================================== */}

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                        <div className="min-w-0">
                          <div className="mb-2 flex flex-wrap items-center gap-2">
                            <span className="chip chip-brand">
                              {paperLevel}
                            </span>

                            {hasPdf ? (
                              <span className="chip chip-brand">
                                Available
                              </span>
                            ) : (
                              <span className="chip chip-ink">
                                Coming Soon
                              </span>
                            )}
                          </div>

                          <h4 className="font-serif text-lg font-semibold leading-snug text-ink sm:text-xl">
                            {paper.title}
                          </h4>

                          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-muted">
                            Chemistry past paper for{' '}
                            {paperLevel}. Use this paper
                            for revision, practice and
                            exam preparation.
                          </p>
                        </div>

                        {/* =================================
                            YEAR BOX
                        ================================== */}

                        <div className="shrink-0">
                          <div className="rounded-xl border border-brand-300 bg-brand-50 px-5 py-3 text-center">
                            <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">
                              Year
                            </p>

                            <p className="mt-0.5 font-serif text-2xl font-semibold text-brand-700">
                              {paper.year}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* =====================================
                          PAPER INFORMATION
                      ====================================== */}

                      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-4">
                        {paper.grade && (
                          <div className="flex items-center gap-2 text-sm text-ink-muted">
                            <GraduationCap
                              className="h-4 w-4 text-brand-700"
                              aria-hidden="true"
                            />

                            <span>
                              Class:{' '}
                              <strong className="font-medium text-ink">
                                {paper.grade}
                              </strong>
                            </span>
                          </div>
                        )}

                        <div className="flex items-center gap-2 text-sm text-ink-muted">
                          <BookOpen
                            className="h-4 w-4 text-brand-700"
                            aria-hidden="true"
                          />

                          <span>
                            Category:{' '}
                            <strong className="font-medium text-ink">
                              {paper.exam}
                            </strong>
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-ink-muted">
                          <CalendarDays
                            className="h-4 w-4 text-brand-700"
                            aria-hidden="true"
                          />

                          <span>
                            Session:{' '}
                            <strong className="font-medium text-ink">
                              {paper.year}
                            </strong>
                          </span>
                        </div>
                      </div>

                      {/* =====================================
                          VIEW BUTTON
                      ====================================== */}

                      <div className="mt-5">
                        {hasPdf && paper.pdfUrl ? (
                          <Link
                            href={paper.pdfUrl}
                            className="btn-primary btn-sm inline-flex items-center gap-2"
                          >
                            <FileText
                              className="h-4 w-4"
                              aria-hidden="true"
                            />

                            View Past Paper
                          </Link>
                        ) : (
                          <span className="inline-flex items-center rounded-lg border border-line bg-paper px-3.5 py-2 text-sm font-medium text-ink-muted">
                            Paper Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        /* ===================================================
            EMPTY STATE
        ==================================================== */

        <div className="card p-8 text-center sm:p-12">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
            <FileText
              className="h-6 w-6"
              aria-hidden="true"
            />
          </div>

          <h3 className="mt-4 font-serif text-xl font-semibold text-ink">
            No past papers found
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-muted">
            We could not find a Chemistry past
            paper matching the selected class,
            exam or search term.
          </p>

          <button
            type="button"
            onClick={resetFilters}
            className="btn-outline mt-5"
          >
            View all papers
          </button>
        </div>
      )}
    </section>
  );
}