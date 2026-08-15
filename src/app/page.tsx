import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Atom,
  FlaskConical,
  FileText,
  HelpCircle,
  Calculator,
  Award,
  Users,
  Clock,
  MapPin,
} from 'lucide-react';

import { site } from '@/data/site';
import { blogPosts } from '@/data/blog';
import { BlogCard } from '@/components/BlogCard';

export default function HomePage() {
  const features = [
    {
      icon: BookOpen,
      title: 'FSc Chemistry',
      desc: 'Grade 11 & 12 chapter-wise notes, lectures, MCQs and numericals.',
      href: '/fsc',
      label: 'Explore FSc',
    },
    {
      icon: GraduationCap,
      title: 'MDCAT Chemistry',
      desc: 'Topic-wise preparation for Physical, Inorganic and Organic Chemistry.',
      href: '/mdcat',
      label: 'Start MDCAT prep',
    },
    {
      icon: Atom,
      title: 'ECAT Chemistry',
      desc: 'Engineering entry test preparation with full topic coverage.',
      href: '/ecat',
      label: 'Start ECAT prep',
    },
    {
      icon: FlaskConical,
      title: 'Fundamentals',
      desc: '20 units covering all foundational Chemistry concepts.',
      href: '/fundamentals',
      label: 'Browse units',
    },
  ];

  const resourceLinks = [
    {
      icon: FileText,
      title: 'Study Notes',
      href: '/resources/study-notes',
    },
    {
      icon: HelpCircle,
      title: 'MCQs',
      href: '/resources/mcqs',
    },
    {
      icon: Calculator,
      title: 'Worksheets',
      href: '/resources/worksheets',
    },
    {
      icon: FileText,
      title: 'Formula Sheets',
      href: '/resources/formula-sheets',
    },
    {
      icon: FlaskConical,
      title: 'Periodic Table',
      href: '/resources/periodic-table',
    },
    {
      icon: Award,
      title: 'Exam Tips',
      href: '/resources/exam-tips',
    },
  ];

  return (
    <div>
      {/* =========================================================
          HERO SECTION
      ========================================================== */}
      <section className="home-hero">
        <div
          className="home-hero-image"
          style={{
            backgroundImage: "url('/hero-bg.png')",
          }}
        />

        <div className="home-hero-overlay" />
        <div className="home-hero-gradient" />

        <div className="container-wide relative z-10 flex min-h-[620px] items-center justify-center py-16 sm:py-20 lg:py-24">
          <div className="mx-auto w-full max-w-4xl text-center">
            <span className="home-hero-eyebrow">
              {site.descriptor}
            </span>

            <h1 className="home-hero-title">
              Master Chemistry with

              <span className="home-hero-brand">
                {site.name}
              </span>
            </h1>

            <p className="home-hero-description">
              Comprehensive Chemistry learning resources for FSc, MDCAT, ECAT
              and Fundamentals of Chemistry. Chapter-wise lectures, study notes,
              MCQs, numericals and past papers — all in one place.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/fsc"
                className="btn-primary btn-lg"
              >
                Start Learning
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/online-tuition"
                className="btn-gold btn-lg"
              >
                Online Tuition
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          MAIN CATEGORIES
      ========================================================== */}
      <section className="container-wide py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              className="home-category-card group"
            >
              <span className="home-category-icon">
                <feature.icon
                  className="h-7 w-7"
                  strokeWidth={1.8}
                />
              </span>

              <h3 className="home-category-title">
                {feature.title}
              </h3>

              <p className="home-category-description">
                {feature.desc}
              </p>

              <span className="home-category-link">
                {feature.label}
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>


      {/* =========================================================
          ABOUT PROFESSOR NOOR SALEEM
      ========================================================== */}
      <section className="home-about-section">
        <div className="container-wide py-14">
          <div className="grid items-center gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <span className="eyebrow mb-3">
                About Professor Noor Saleem
              </span>

              <h2 className="home-about-heading">
                Two decades of teaching Chemistry with clarity and purpose
              </h2>

              <p className="home-about-text">
                Professor Noor Saleem has been teaching Chemistry since{' '}
                {site.teachingSince}, helping thousands of students excel in
                FSc, MDCAT and ECAT. His approach focuses on building deep
                conceptual understanding rather than rote memorisation.
              </p>

              <div className="home-about-meta">
                <span className="flex items-center gap-2">
                  <Clock className="home-about-meta-icon" />
                  Since {site.teachingSince}
                </span>

                <span className="flex items-center gap-2">
                  <MapPin className="home-about-meta-icon" />
                  {site.location}
                </span>

                <span className="flex items-center gap-2">
                  <Users className="home-about-meta-icon" />
                  FSc, MDCAT & ECAT
                </span>
              </div>

              <Link href="/about" className="btn-outline mt-6">
                Read more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="card max-w-xs p-8 text-center">
                <span className="home-professor-card-icon">
                  <GraduationCap className="h-8 w-8" />
                </span>

                <p className="home-professor-name">
                  {site.name}
                </p>

                <p className="home-professor-description">
                  {site.descriptor}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          LEARNING RESOURCES
      ========================================================== */}
      <section className="container-wide py-14">
        <div className="mb-8">
          <span className="eyebrow mb-2">
            Resources
          </span>

          <h2 className="home-section-heading">
            Learning Resources
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {resourceLinks.map((resource) => (
            <Link
              key={resource.title}
              href={resource.href}
              className="home-resource-card group"
            >
              <span className="home-resource-icon">
                <resource.icon className="h-5 w-5" />
              </span>

              <span className="home-resource-title">
                {resource.title}
              </span>

              <ArrowRight className="home-resource-arrow" />
            </Link>
          ))}
        </div>
      </section>


      {/* =========================================================
          BLOG
      ========================================================== */}
      <section className="home-blog-section">
        <div className="container-wide py-14">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <span className="eyebrow mb-2">
                Blog
              </span>

              <h2 className="home-section-heading">
                Latest Articles
              </h2>
            </div>

            <Link href="/blog" className="btn-ghost">
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard
                key={post.slug}
                post={post}
              />
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="container-wide py-16">
        <div className="card p-8 text-center sm:p-12">
          <h2 className="home-final-heading">
            Ready to improve your Chemistry?
          </h2>

          <p className="home-final-description">
            Get personalised guidance from Professor Noor Saleem. Online and
            in-person tuition available for FSc, MDCAT and ECAT students.
          </p>

          <Link
            href="/online-tuition"
            className="btn-gold btn-lg mt-6"
          >
            Enquire About Tuition
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}