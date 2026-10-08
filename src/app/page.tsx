'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
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


const heroSlides = ['/noor-1.jpg', '/noor-2.jpg', '/noor-3.jpg'];

export default function HomePage() {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveHeroSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

const features = [
    {
      icon: BookOpen,
      title: 'FSc Chemistry',
      desc: 'Grade 11 & 12 chapter-wise notes, lectures, MCQs and numericals.',
      href: '/fsc',
      label: 'Explore FSc',
      image: '/fsc.png',
    },
    {
      icon: GraduationCap,
      title: 'MDCAT Chemistry',
      desc: 'Topic-wise preparation for Physical, Inorganic and Organic Chemistry.',
      href: '/mdcat',
      label: 'Start MDCAT prep',
      image: '/mdcat.png',
    },
    {
      icon: Atom,
      title: 'ECAT Chemistry',
      desc: 'Engineering entry test preparation with full topic coverage.',
      href: '/ecat',
      label: 'Start ECAT prep',
      image: '/ecat.png',
    },
    {
      icon: FlaskConical,
      title: 'Fundamentals',
      desc: '20 units covering all foundational Chemistry concepts.',
      href: '/fundamentals',
      label: 'Browse units',
      image: '/fundamentals.png',
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
    <div className="home-page">
{/* =========================================================
          HERO SECTION
      ========================================================== */}
      <section className="home-hero">
        <div className="home-hero-slides" aria-hidden="true">
          {heroSlides.map((image, index) => (
            <div
              key={image}
              className={`home-hero-image${activeHeroSlide === index ? ' home-hero-image-active' : ''}`}
              style={{ backgroundImage: `url('${image}')` }}
            />
          ))}
        </div>
        <div className="home-hero-gradient" />

        <div className="container-wide home-hero-content relative z-10 flex min-h-[85vh] items-center justify-start py-16 sm:py-20 lg:min-h-[90vh] lg:py-24 2xl:min-h-screen">
          <div className="w-full max-w-3xl text-center lg:text-left">
            <h1 className="home-hero-title" aria-label="Master Class Chemistry With Noor Saleem">
              <span className="home-hero-title-line">
                <span className="home-hero-heading-italic">Master</span>{' '}
                <span className="home-hero-script-label">Class</span>
              </span>
              <span className="home-hero-title-line">
                <span className="home-hero-script-word">𝑪𝒉𝒆𝒎𝒊𝒔𝒕𝒓𝒚</span>{' '}
                <span className="home-hero-heading-double-struck">𝕎𝕚𝕥𝕙</span>
              </span>
              <span className="home-hero-title-line home-hero-brand">
                <span className="home-hero-script-label">Noor Saleem</span>
              </span>
            </h1>

            <p className="home-hero-description">
              Comprehensive Chemistry learning resources for FSc, MDCAT, ECAT
              and Fundamentals of Chemistry. Chapter-wise lectures, study notes,
              MCQs, numericals and past papers — all in one place.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link
                href="/fsc"
                className="btn-primary btn-lg"
              >
                Start Learning
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/online-tuition"
                className="btn-outline btn-lg"
              >
                Online Tuition
              </Link>
            </div>
          </div>
        </div>

        <div className="home-hero-dots" role="group" aria-label="Hero slides">
          {heroSlides.map((image, index) => (
            <button
              key={image}
              type="button"
              className={`home-hero-dot${activeHeroSlide === index ? ' home-hero-dot-active' : ''}`}
              onClick={() => setActiveHeroSlide(index)}
              aria-label={`Show hero image ${index + 1}`}
              aria-pressed={activeHeroSlide === index}
            />
          ))}
        </div>
      </section>




      <div className="home-page-content">
      {/* =========================================================
          MAIN CATEGORIES
      ========================================================== */}
      <section className="home-courses-section">
        <div className="container-wide py-16 sm:py-20">
          <div className="home-section-intro home-courses-intro">
            <span className="eyebrow">Choose your path</span>
            <h2 className="home-section-heading">Courses Offered</h2>
          </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              className="home-category-card group"
            >
              <Image
                src={feature.image}
                alt=""
                fill
                sizes="(max-width: 639px) 100vw, 50vw"
                className="subject-card-photo"
              />
              <span className="subject-card-overlay" />
              <span className="subject-card-content">
                <h3 className="home-category-title">
                  {feature.title}
                </h3>
                <p className="home-category-description">
                  {feature.desc}
                </p>
                <span className="subject-card-action">
                  {feature.label}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </span>
              <span className="subject-card-arrow" aria-hidden="true">
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          ))}
        </div>
        </div>
      </section>


      {/* =========================================================
          ABOUT PROFESSOR NOOR SALEEM
      ========================================================== */}
      <section className="home-about-section">
        <div className="container-wide py-14">
          <div className="home-about-grid">
            <div className="home-professor-image">
              <Image
                src="/professor-noor-saleem.jpg.png"
                alt="Professor Noor Saleem"
                fill
                sizes="(max-width: 1023px) 100vw, 48vw"
                className="object-cover"
              />
              <div className="home-professor-caption">
                <span className="home-professor-card-icon">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <span>
                  <span className="home-professor-name">{site.name}</span>
                  <span className="home-professor-description">{site.descriptor}</span>
                </span>
              </div>
            </div>

            <div className="home-about-copy">
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
          </div>
        </div>
      </section>


      {/* =========================================================
          LEARNING RESOURCES
      ========================================================== */}
      <section className="home-resources-section">
        <div className="container-wide py-16 sm:py-20">
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
        <div className="home-final-card rounded-2xl p-8 text-center sm:p-12">
          <h2 className="home-final-heading">
            Ready to improve your Chemistry?
          </h2>

          <p className="home-final-description">
            Get personalised guidance from Professor Noor Saleem. Online and
            in-person tuition available for FSc, MDCAT and ECAT students.
          </p>

          <Link
            href="/online-tuition"
            className="btn-primary btn-lg mt-6"
          >
            Enquire About Tuition
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      </div>
    </div>
  );
}