import Link from 'next/link';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { fscGrades } from '@/data/curriculum';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = { title: 'FSc Chemistry' };

export default function FscPage() {
  return (
    <div className="container-wide py-8">

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'FSc Chemistry' },
        ]}
      />

      {/* =========================================
          FSc TOP HEADING
      ========================================= */}
      <div className="page-heading-box mt-6 mb-8">

        <span className="eyebrow mb-3">
          Intermediate Chemistry
        </span>

        <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-ink">
          FSc Chemistry
        </h1>

        <p className="mt-3 max-w-3xl text-ink-muted leading-relaxed">
          Complete Chemistry coverage for FSc Part 1 and Part 2.
          Each grade contains chapter-wise lectures, study notes,
          key concepts, MCQs, short and long questions, numericals,
          chapter tests and past paper questions.
        </p>

        <div className="fsc-heading-meta mt-5">
          <span>FSc Part 1</span>
          <span>FSc Part 2</span>
          <span>Chapter-wise Learning</span>
        </div>

      </div>

      {/* =========================================
          FSc GRADE CARDS
          UNCHANGED
      ========================================= */}
      <div className="grid gap-5 md:grid-cols-2">

        {fscGrades.map((grade) => (
          <Link
            key={grade.slug}
            href={`/fsc/${grade.slug}`}
            className="card-hover p-6 group"
          >
            <div className="flex items-start gap-4">

              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                <GraduationCap className="h-6 w-6" />
              </span>

              <div className="flex-1">

                <h2 className="font-serif text-xl font-semibold text-ink group-hover:text-brand-700 transition-colors">
                  {grade.title}
                </h2>

                <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                  {grade.description}
                </p>

                <div className="mt-4 flex items-center justify-between">

                  <span className="text-sm text-ink-light">
                    {grade.chapters.length} chapters
                  </span>

                  <span className="text-sm font-medium text-brand-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                    View chapters
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>

                </div>
              </div>
            </div>
          </Link>
        ))}

      </div>
    </div>
  );
}