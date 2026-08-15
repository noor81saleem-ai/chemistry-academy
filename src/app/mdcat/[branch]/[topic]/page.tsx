'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

import {
  mdcatTopicContent,
  type TopicContentBlock,
} from '@/data/mdcatContent';

const branchNames: Record<string, string> = {
  'physical-chemistry': 'Physical Chemistry',
  'inorganic-chemistry': 'Inorganic Chemistry',
  'organic-chemistry': 'Organic Chemistry',
};

function titleFromSlug(slug: string) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

type MCQBlockType = Extract<
  TopicContentBlock,
  { type: 'mcqs' }
>;

function MCQSection({
  block,
}: {
  block: MCQBlockType;
}) {
  const [selectedAnswers, setSelectedAnswers] =
    useState<Record<number, number>>({});

  return (
    <div className="space-y-5">
      {block.items.map((mcq, index) => {
        const selected = selectedAnswers[index];
        const answered = selected !== undefined;

        return (
          <article
            key={index}
            className="rounded-xl border border-line bg-white p-5 shadow-sm"
          >
            {/* QUESTION */}
            <div className="flex items-start gap-3">
              <span className="shrink-0 text-sm font-semibold text-brand-700">
                Q{index + 1}.
              </span>

              <p className="text-[15px] leading-7 text-ink">
                {mcq.q}
              </p>
            </div>

            {/* OPTIONS */}
            <div className="mt-4 space-y-2">
              {mcq.options.map((option, optionIndex) => {
                const isCorrect =
                  optionIndex === mcq.answer;

                const isSelected =
                  optionIndex === selected;

                let optionStyle =
                  'border-line bg-white text-ink hover:border-brand-300 hover:bg-brand-50/40';

                if (answered && isCorrect) {
                  optionStyle =
                    'border-emerald-400 bg-emerald-50 text-emerald-950';
                }

                if (
                  answered &&
                  isSelected &&
                  !isCorrect
                ) {
                  optionStyle =
                    'border-red-300 bg-red-50 text-red-900';
                }

                return (
                  <button
                    key={optionIndex}
                    type="button"
                    onClick={() =>
                      setSelectedAnswers((prev) => ({
                        ...prev,
                        [index]: optionIndex,
                      }))
                    }
                    className={`block w-full rounded-lg border px-4 py-3 text-left text-sm leading-6 transition ${optionStyle}`}
                  >
                    <span className="mr-2 font-semibold">
                      {String.fromCharCode(
                        65 + optionIndex
                      )}.
                    </span>

                    {option}
                  </button>
                );
              })}
            </div>

            {/* ANSWER + EXPLANATION */}
            {answered && (
              <div className="mt-5 border-t border-line pt-4">
                <p className="text-sm font-semibold text-emerald-700">
                  Answer:{' '}
                  {String.fromCharCode(
                    65 + mcq.answer
                  )}
                  . {mcq.options[mcq.answer]}
                </p>

                <div className="mt-3 whitespace-pre-line border-l-2 border-emerald-300 pl-4 text-sm leading-7 text-ink-muted">
                  {mcq.explanation}
                </div>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}

function NormalBlock({
  block,
}: {
  block: TopicContentBlock;
}) {
  if (block.type === 'p') {
    return (
      <p className="text-[15px] leading-7 text-ink-muted">
        {block.text}
      </p>
    );
  }

  if (block.type === 'h3') {
    return (
      <h3 className="mt-7 font-serif text-xl text-ink">
        {block.text}
      </h3>
    );
  }

  if (block.type === 'ul') {
    return (
      <ul className="space-y-2 pl-5 text-sm leading-7 text-ink-muted">
        {block.items.map((item, index) => (
          <li
            key={index}
            className="list-disc"
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === 'ol') {
    return (
      <ol className="space-y-2 pl-5 text-sm leading-7 text-ink-muted">
        {block.items.map((item, index) => (
          <li
            key={index}
            className="list-decimal"
          >
            {item}
          </li>
        ))}
      </ol>
    );
  }

  if (block.type === 'callout') {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
        <p className="text-sm font-semibold text-emerald-900">
          {block.title}
        </p>

        <p className="mt-2 text-sm leading-7 text-emerald-900">
          {block.text}
        </p>
      </div>
    );
  }

  if (block.type === 'equation') {
    return (
      <div className="rounded-xl border border-line bg-slate-50 p-4">
        <div className="overflow-x-auto font-mono text-sm text-ink">
          {block.latex}
        </div>

        {block.caption && (
          <p className="mt-2 text-xs text-ink-muted">
            {block.caption}
          </p>
        )}
      </div>
    );
  }

  return null;
}

export default function MDCATTopicPage() {
  const params = useParams();

  const branch =
    typeof params.branch === 'string'
      ? params.branch
      : Array.isArray(params.branch)
      ? params.branch[0]
      : '';

  const topic =
    typeof params.topic === 'string'
      ? params.topic
      : Array.isArray(params.topic)
      ? params.topic[0]
      : '';

  const content =
    mdcatTopicContent[topic];

  const branchTitle =
    branchNames[branch] ??
    titleFromSlug(branch);

  const topicTitle =
    content?.title ??
    titleFromSlug(topic);

  if (!content) {
    return (
      <main className="container-narrow py-8">
        <div className="card p-8 text-center">
          <p className="text-ink-muted">
            Content for this topic has not been
            added yet.
          </p>
        </div>
      </main>
    );
  }

  const normalBlocks =
    content.blocks.filter(
      (block) => block.type !== 'mcqs'
    );

  const mcqBlocks =
    content.blocks.filter(
      (
        block
      ): block is MCQBlockType =>
        block.type === 'mcqs'
    );

  const totalMCQs =
    mcqBlocks.reduce(
      (total, block) =>
        total + block.items.length,
      0
    );

  return (
    <main className="container-narrow py-8">
      {/* BREADCRUMBS */}
      <nav className="flex flex-wrap items-center gap-2 text-sm text-ink-muted">
        <Link
          href="/"
          className="hover:text-brand-700"
        >
          Home
        </Link>

        <span>›</span>

        <Link
          href="/mdcat"
          className="hover:text-brand-700"
        >
          MDCAT
        </Link>

        <span>›</span>

        <Link
          href={`/mdcat/${branch}`}
          className="hover:text-brand-700"
        >
          {branchTitle}
        </Link>

        <span>›</span>

        <span className="text-ink">
          {topicTitle}
        </span>
      </nav>

      {/* BACK */}
      <div className="mt-6">
        <Link
          href={`/mdcat/${branch}`}
          className="text-sm text-ink-muted hover:text-brand-700"
        >
          ← Back to {branchTitle}
        </Link>
      </div>

      {/* HEADER */}
      <header className="mt-7 border-b border-line pb-6">
        <h1 className="font-serif text-3xl text-ink">
          {topicTitle}
        </h1>

        <p className="mt-2 text-ink-muted">
          {branchTitle}
        </p>
      </header>

      {/* OVERVIEW */}
      <section className="mt-6">
        <p className="text-[15px] leading-7 text-ink-muted">
          {content.overview}
        </p>
      </section>

      {/* HIGH YIELD */}
      {content.highYield.length > 0 && (
        <section className="card mt-6 p-5">
          <h2 className="font-serif text-lg text-ink">
            High-Yield Topics
          </h2>

          <ul className="mt-3 space-y-2">
            {content.highYield.map(
              (item, index) => (
                <li
                  key={index}
                  className="flex gap-2 text-sm leading-6 text-ink-muted"
                >
                  <span className="text-brand-600">
                    •
                  </span>

                  <span>{item}</span>
                </li>
              )
            )}
          </ul>
        </section>
      )}

      {/* NOTES / OTHER CONTENT */}
      {normalBlocks.length > 0 && (
        <section className="mt-7 space-y-5">
          {normalBlocks.map(
            (block, index) => (
              <NormalBlock
                key={index}
                block={block}
              />
            )
          )}
        </section>
      )}

      {/* MCQ SECTION */}
      {totalMCQs > 0 && (
        <section className="mt-10">
          <div className="mb-5 border-b border-line pb-4">
            <h2 className="font-serif text-2xl text-ink">
              Multiple Choice Questions
            </h2>

            <p className="mt-1 text-sm text-ink-muted">
              {totalMCQs} questions ·{' '}
              {topicTitle}
            </p>
          </div>

          <div className="space-y-6">
            {mcqBlocks.map(
              (block, index) => (
                <MCQSection
                  key={index}
                  block={block}
                />
              )
            )}
          </div>
        </section>
      )}
    </main>
  );
}