'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const courses = ['FSc Grade 11 Chemistry', 'FSc Grade 12 Chemistry', 'MDCAT Chemistry', 'ECAT Chemistry'];
const modes = ['One-to-One Online', 'Small Group Online', 'Offline (Islamabad)'];

export function TuitionForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    studentName: '', parentName: '', email: '', phone: '', city: '', country: 'Pakistan',
    course: '', grade: '', mode: '', schedule: '', message: '',
  });

  const update = (k: keyof typeof form, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-brand-700">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-ink">Enquiry received</h3>
        <p className="mt-2 text-ink-muted max-w-md mx-auto">
          Thank you, {form.studentName || 'student'}. Professor Noor Saleem will review your enquiry and respond to {form.email || form.phone || 'you'} shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ studentName: '', parentName: '', email: '', phone: '', city: '', country: 'Pakistan', course: '', grade: '', mode: '', schedule: '', message: '' });
          }}
          className="btn-outline mt-6"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Student Name" required>
          <input className="input" required value={form.studentName} onChange={(e) => update('studentName', e.target.value)} placeholder="Student's full name" />
        </Field>
        <Field label="Parent / Guardian Name (optional)">
          <input className="input" value={form.parentName} onChange={(e) => update('parentName', e.target.value)} placeholder="Parent or guardian name" />
        </Field>
        <Field label="Email" required>
          <input type="email" className="input" required value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@example.com" />
        </Field>
        <Field label="Phone / WhatsApp" required>
          <input className="input" required value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+92 3XX XXXXXXX" />
        </Field>
        <Field label="City">
          <input className="input" value={form.city} onChange={(e) => update('city', e.target.value)} placeholder="Islamabad" />
        </Field>
        <Field label="Country">
          <input className="input" value={form.country} onChange={(e) => update('country', e.target.value)} />
        </Field>
        <Field label="Course" required>
          <select className="input" required value={form.course} onChange={(e) => update('course', e.target.value)}>
            <option value="" disabled>Select a course</option>
            {courses.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </Field>
        <Field label="Grade / Level">
          <input className="input" value={form.grade} onChange={(e) => update('grade', e.target.value)} placeholder="e.g. Grade 11, FSc Part 1" />
        </Field>
        <Field label="Preferred Teaching Mode">
          <select className="input" value={form.mode} onChange={(e) => update('mode', e.target.value)}>
            <option value="" disabled>Select mode</option>
            {modes.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </Field>
        <Field label="Preferred Schedule">
          <input className="input" value={form.schedule} onChange={(e) => update('schedule', e.target.value)} placeholder="e.g. evenings, weekends" />
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Message">
          <textarea className="input min-h-[110px] resize-y" value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Tell us about the student's current level, goals, and any specific topics to focus on." />
        </Field>
      </div>
      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-xs text-ink-light">Your details are only used to respond to this enquiry.</p>
        <button type="submit" className="btn-gold btn-lg">
          <Send className="h-4 w-4" /> Enquire About Tuition
        </button>
      </div>
    </form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="label">{label}{required && <span className="text-red-500"> *</span>}</span>
      {children}
    </label>
  );
}
