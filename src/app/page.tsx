import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap, FlaskConical, FileText, HelpCircle, Calculator, Award, Users, Clock, MapPin } from 'lucide-react';
import { site } from '@/data/site';
import { blogPosts } from '@/data/blog';
import { BlogCard } from '@/components/BlogCard';

export default function HomePage() {
  const features = [
    { icon: BookOpen, title: 'FSc Chemistry', desc: 'Grade 11 & 12 chapter-wise notes, lectures, MCQs and numericals.', href: '/fsc', label: 'Explore FSc' },
    { icon: GraduationCap, title: 'MDCAT Chemistry', desc: 'Topic-wise preparation for Physical, Inorganic and Organic Chemistry.', href: '/mdcat', label: 'Start MDCAT prep' },
    { icon: FlaskConical, title: 'ECAT Chemistry', desc: 'Engineering entry test preparation with full topic coverage.', href: '/ecat', label: 'Start ECAT prep' },
    { icon: FileText, title: 'Fundamentals', desc: '20 units covering all foundational Chemistry concepts.', href: '/fundamentals', label: 'Browse units' },
  ];
  const resourceLinks = [
    { icon: FileText, title: 'Study Notes', href: '/resources/study-notes' },
    { icon: HelpCircle, title: 'MCQs', href: '/resources/mcqs' },
    { icon: Calculator, title: 'Worksheets', href: '/resources/worksheets' },
    { icon: FileText, title: 'Formula Sheets', href: '/resources/formula-sheets' },
    { icon: FlaskConical, title: 'Periodic Table', href: '/resources/periodic-table' },
    { icon: Award, title: 'Exam Tips', href: '/resources/exam-tips' },
  ];

  return (
    <div>
      <section className="border-b border-line bg-cream relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="container-wide relative py-16 sm:py-20 lg:py-24">
          <div className="max-w-2xl">
            <span className="eyebrow mb-4">{site.descriptor}</span>
            <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-ink leading-tight">
              Master Chemistry with <span className="text-brand-700">{site.name}</span>
            </h1>
            <p className="mt-5 text-lg text-ink-muted leading-relaxed">
              Comprehensive Chemistry learning resources for FSc, MDCAT, ECAT and Fundamentals of Chemistry. Chapter-wise lectures, study notes, MCQs, numericals and past papers — all in one place.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/fsc" className="btn-primary btn-lg">Start Learning <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/online-tuition" className="btn-gold btn-lg">Online Tuition</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-wide py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Link key={f.title} href={f.href} className="card-hover p-6 flex flex-col gap-3 group">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700"><f.icon className="h-5 w-5" /></span>
              <h3 className="font-serif text-lg font-semibold text-ink group-hover:text-brand-700 transition-colors">{f.title}</h3>
              <p className="text-sm text-ink-muted leading-relaxed flex-1">{f.desc}</p>
              <span className="text-sm font-medium text-brand-700 flex items-center gap-1 group-hover:gap-2 transition-all">{f.label} <ArrowRight className="h-3.5 w-3.5" /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-brand-50/30">
        <div className="container-wide py-14">
          <div className="grid gap-8 lg:grid-cols-3 items-center">
            <div className="lg:col-span-2">
              <span className="eyebrow mb-3">About Professor Noor Saleem</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-ink mb-4">Two decades of teaching Chemistry with clarity and purpose</h2>
              <p className="text-ink-muted leading-relaxed">
                Professor Noor Saleem has been teaching Chemistry since {site.teachingSince}, helping thousands of students excel in FSc, MDCAT and ECAT. His approach focuses on building deep conceptual understanding rather than rote memorisation.
              </p>
              <div className="mt-5 flex flex-wrap gap-6 text-sm text-ink-muted">
                <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-brand-600" /> Since {site.teachingSince}</span>
                <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-600" /> {site.location}</span>
                <span className="flex items-center gap-2"><Users className="h-4 w-4 text-brand-600" /> FSc, MDCAT & ECAT</span>
              </div>
              <Link href="/about" className="btn-outline mt-6">Read more <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="card p-8 text-center max-w-xs">
                <span className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-brand-100 text-brand-700"><GraduationCap className="h-8 w-8" /></span>
                <p className="mt-4 font-serif text-lg font-semibold text-ink">{site.name}</p>
                <p className="mt-1 text-sm text-ink-muted">{site.descriptor}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-wide py-14">
        <div className="mb-8"><span className="eyebrow mb-2">Resources</span><h2 className="text-2xl sm:text-3xl font-serif font-semibold text-ink">Learning Resources</h2></div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {resourceLinks.map((r) => (
            <Link key={r.title} href={r.href} className="card-hover p-4 flex items-center gap-3 group">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700"><r.icon className="h-5 w-5" /></span>
              <span className="font-medium text-ink group-hover:text-brand-700 transition-colors">{r.title}</span>
              <ArrowRight className="h-4 w-4 ml-auto text-ink-light group-hover:text-brand-600 transition-colors" />
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-brand-50/30">
        <div className="container-wide py-14">
          <div className="flex items-center justify-between mb-8">
            <div><span className="eyebrow mb-2">Blog</span><h2 className="text-2xl sm:text-3xl font-serif font-semibold text-ink">Latest Articles</h2></div>
            <Link href="/blog" className="btn-ghost">View all <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>
        </div>
      </section>

      <section className="container-wide py-16">
        <div className="card p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-ink">Ready to improve your Chemistry?</h2>
          <p className="mt-3 text-ink-muted max-w-xl mx-auto">Get personalised guidance from Professor Noor Saleem. Online and in-person tuition available for FSc, MDCAT and ECAT students.</p>
          <Link href="/online-tuition" className="btn-gold btn-lg mt-6">Enquire About Tuition <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </div>
  );
}
