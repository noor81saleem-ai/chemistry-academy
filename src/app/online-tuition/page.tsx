import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TuitionForm } from '@/components/TuitionForm';
import { Video, Users, MapPin, Clock, CheckCircle2 } from 'lucide-react';

export const metadata = { title: 'Online Tuition' };

export default function OnlineTuitionPage() {
  const programs = [
    { title: 'FSc Chemistry', desc: 'Grade 11 & 12 complete coverage with chapter-wise lectures and practice.' },
    { title: 'MDCAT Chemistry', desc: 'Focused preparation for medical entry test with high-yield topic coverage.' },
    { title: 'ECAT Chemistry', desc: 'Engineering entry test preparation with numerical problem-solving focus.' },
    { title: 'Fundamentals', desc: 'Foundation course covering all 20 units of basic Chemistry.' },
  ];
  const modes = [
    { icon: Video, title: 'One-to-One Online', desc: 'Private online sessions via video call' },
    { icon: Users, title: 'Small Group Online', desc: 'Group sessions with 3-5 students' },
    { icon: MapPin, title: 'Offline (Islamabad)', desc: 'In-person tuition in Islamabad' },
  ];
  return (
    <div className="container-wide py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Online Tuition' }]} />
      <div className="mt-6 mb-8">
        <span className="eyebrow mb-2">Personalised Learning</span>
        <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-ink">Online Tuition</h1>
        <p className="mt-3 text-ink-muted max-w-2xl leading-relaxed">Get personalised Chemistry guidance from Professor Noor Saleem. Available programs, teaching modes and enquiry form below.</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 mb-8">
        {programs.map((p) => (
          <div key={p.title} className="card p-5">
            <h3 className="font-serif text-lg font-semibold text-ink">{p.title}</h3>
            <p className="mt-2 text-sm text-ink-muted">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-3 mb-8">
        {modes.map((m) => (
          <div key={m.title} className="card p-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700"><m.icon className="h-5 w-5" /></span>
            <h3 className="mt-3 font-medium text-ink">{m.title}</h3>
            <p className="mt-1 text-sm text-ink-muted">{m.desc}</p>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-serif font-semibold text-ink mb-4">Enquiry Form</h2>
        <TuitionForm />
      </div>
    </div>
  );
}
