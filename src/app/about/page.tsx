import { Breadcrumbs } from '@/components/Breadcrumbs';
import { site } from '@/data/site';
import { GraduationCap, BookOpen, Award, Users, Clock, MapPin } from 'lucide-react';

export const metadata = { title: 'About' };

export default function AboutPage() {
  const stats = [
    { icon: Clock, label: 'Years Teaching', value: `${new Date().getFullYear() - site.teachingSince}+` },
    { icon: Users, label: 'Students Taught', value: '5000+' },
    { icon: BookOpen, label: 'Chapters Covered', value: '40+' },
    { icon: Award, label: 'Exam Boards', value: 'Federal & AJK' },
  ];
  return (
    <div className="container-narrow py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
      <div className="mt-6 mb-8">
        <span className="eyebrow mb-2">About the Professor</span>
        <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-ink">{site.name}</h1>
        <p className="mt-2 text-ink-muted">{site.descriptor}</p>
      </div>

      <div className="card p-6 sm:p-8 mb-6">
        <div className="flex items-center gap-4 mb-6">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-700"><GraduationCap className="h-8 w-8" /></span>
          <div><h2 className="font-serif text-xl font-semibold text-ink">{site.name}</h2><p className="text-sm text-ink-muted">{site.location}</p></div>
        </div>
        <p className="text-ink-muted leading-relaxed">
          Professor Noor Saleem is a dedicated Chemistry educator with nearly two decades of teaching experience. Since {site.teachingSince}, he has been helping students master Chemistry for FSc, MDCAT and ECAT examinations. His teaching philosophy centres on building deep conceptual understanding rather than rote memorisation, enabling students to tackle any question with confidence.
        </p>
        <p className="text-ink-muted leading-relaxed mt-4">
          This website brings together his carefully structured learning materials — chapter-wise lectures, study notes, MCQs, numericals, chapter tests and past paper solutions — all designed to make Chemistry accessible and engaging for every student.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {stats.map((s) => (
          <div key={s.label} className="card p-4 text-center">
            <span className="flex h-10 w-10 mx-auto items-center justify-center rounded-lg bg-brand-50 text-brand-700"><s.icon className="h-5 w-5" /></span>
            <p className="mt-2 font-serif text-2xl font-semibold text-ink">{s.value}</p>
            <p className="text-xs text-ink-muted">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="card p-6 sm:p-8">
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">Teaching Philosophy</h2>
        <ul className="flex flex-col gap-3">
          <li className="flex items-start gap-2 text-sm text-ink-muted"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />Concept first, formula second. Understand the why before the how.</li>
          <li className="flex items-start gap-2 text-sm text-ink-muted"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />Practice through real exam questions, not just textbook exercises.</li>
          <li className="flex items-start gap-2 text-sm text-ink-muted"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />Every student can learn Chemistry with the right guidance and patience.</li>
          <li className="flex items-start gap-2 text-sm text-ink-muted"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />Numericals are concept applications, not formula recall exercises.</li>
        </ul>
      </div>
    </div>
  );
}
