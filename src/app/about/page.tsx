import Image from 'next/image';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { site } from '@/data/site';
import {
  BookOpen,
  Award,
  Users,
  Clock,
  MapPin,
  CheckCircle2,
} from 'lucide-react';

export const metadata = {
  title: 'About Professor Noor Saleem',
};

export default function AboutPage() {
  const stats = [
    {
      icon: Clock,
      label: 'Years Teaching',
      value: `${new Date().getFullYear() - site.teachingSince}+`,
    },
    {
      icon: Users,
      label: 'Students Taught',
      value: '5000+',
    },
    {
      icon: BookOpen,
      label: 'Chapters Covered',
      value: '40+',
    },
    {
      icon: Award,
      label: 'Exam Boards',
      value: 'Federal & AJK',
    },
  ];

  const philosophy = [
    'Concept first, formula second. Understand the why before the how.',
    'Practice through real exam questions, not just textbook exercises.',
    'Every student can learn Chemistry with the right guidance and patience.',
    'Numericals are concept applications, not formula recall exercises.',
  ];

  return (
    <div className="container-wide py-8 sm:py-10 lg:py-12">

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'About' },
        ]}
      />

      {/* =========================================
          TOP HEADING BLOCK
      ========================================= */}
      <div className="mx-auto mt-7 max-w-6xl">
        <div className="page-heading-box">

          <span className="eyebrow mb-3">
            About the Professor
          </span>

          <h1 className="font-serif text-3xl font-semibold leading-tight text-black sm:text-4xl">
            Professor Noor Saleem
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-black sm:text-lg">
            Chemistry educator, mentor and academic guide helping students build
            strong concepts for FSc, MDCAT and ECAT.
          </p>

        </div>
      </div>


      {/* =========================================
          MAIN PROFILE SECTION
      ========================================= */}
      <section className="mx-auto mt-9 grid max-w-6xl gap-8 lg:grid-cols-[360px_1fr] lg:items-stretch">

        {/* Professor Photo */}
        <div className="relative overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
          <div className="relative h-full min-h-[440px]">

            <Image
              src="/professor-noor-saleem.jpg.png"
              alt="Professor Noor Saleem"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 360px"
            />

            {/* Photo bottom overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent p-6 pt-24">

              <h2 className="font-serif text-2xl font-semibold text-white">
                Professor Noor Saleem
              </h2>

              <p className="mt-1 flex items-center gap-2 text-sm text-white/85">
                <MapPin className="h-4 w-4" />
                {site.location}
              </p>

            </div>
          </div>
        </div>


        {/* Biography */}
        <div className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8 lg:p-10">

          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            Chemistry Educator · Since {site.teachingSince}
          </span>

          <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight text-black sm:text-3xl">
            Teaching Chemistry with clarity, structure and purpose
          </h2>

          <div className="mt-6 space-y-5 text-[15px] leading-8 text-black sm:text-base">

            <p>
              Professor Noor Saleem is a dedicated Chemistry educator with nearly
              two decades of teaching experience. Since {site.teachingSince}, he
              has been helping students master Chemistry for FSc, MDCAT and ECAT
              examinations.
            </p>

            <p>
              His teaching approach focuses on strong conceptual understanding
              rather than rote memorisation. Students are guided to understand
              why a chemical idea works, how it connects with related concepts,
              and how to apply it confidently in examinations.
            </p>

            <p>
              ChemistryMax brings together structured learning material including
              chapter-wise lectures, study notes, MCQs, numericals, chapter tests
              and past-paper preparation in one organised learning platform.
            </p>

          </div>


          {/* Teaching Focus */}
          <div className="mt-7 rounded-xl border border-brand-100 bg-brand-50/50 p-5">

            <p className="font-serif text-lg font-semibold text-black">
              Teaching Focus
            </p>

            <p className="mt-2 text-sm leading-7 text-black">
              FSc Chemistry · MDCAT Chemistry · ECAT Chemistry · Concept Building ·
              Numerical Problem Solving · Exam Preparation
            </p>

          </div>
        </div>
      </section>


      {/* =========================================
          STATS
      ========================================= */}
      <section className="mx-auto mt-8 grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4">

        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-line bg-white p-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >

            <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
              <s.icon className="h-5 w-5" />
            </span>

            <p className="mt-3 font-serif text-2xl font-semibold text-black sm:text-3xl">
              {s.value}
            </p>

            <p className="mt-1 text-xs uppercase tracking-wide text-black">
              {s.label}
            </p>

          </div>
        ))}

      </section>


      {/* =========================================
          TEACHING PHILOSOPHY
      ========================================= */}
      <section className="mx-auto mt-8 grid max-w-6xl gap-6 lg:grid-cols-[1fr_320px]">

        {/* Philosophy Card */}
        <div className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">

          <span className="eyebrow mb-2">
            Teaching Philosophy
          </span>

          <h2 className="font-serif text-2xl font-semibold text-black">
            How I approach Chemistry education
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">

            {philosophy.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-line bg-cream/60 p-4"
              >

                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />

                <p className="text-sm leading-6 text-black">
                  {item}
                </p>

              </div>
            ))}

          </div>
        </div>


        {/* =========================================
            SIDE GREEN CARD
        ========================================= */}
        <div className="rounded-2xl border border-brand-200 bg-brand-700 p-6 shadow-sm sm:p-8">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] !text-white/70">
            ChemistryMax
          </p>

          <h3 className="mt-3 font-serif text-2xl font-semibold leading-snug !text-white">
            Learn concepts deeply. Prepare with confidence.
          </h3>

          <p className="mt-4 text-sm leading-7 !text-white/80">
            The goal is not only to help students pass an examination, but to
            develop the understanding needed to solve unfamiliar Chemistry
            problems independently.
          </p>

          <div className="mt-6 border-t border-white/15 pt-5">

            <p className="text-sm font-medium !text-white">
              Professor Noor Saleem
            </p>

            <p className="mt-1 text-xs !text-white/65">
              Chemistry Educator
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}