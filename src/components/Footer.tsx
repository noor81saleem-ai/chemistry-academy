import Link from 'next/link';
import { FlaskConical, Mail, MapPin } from 'lucide-react';
import { footerNav, site } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-line bg-brand-50/30 mt-16">
      <div className="container-wide py-12">
        <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-700 text-white">
                <FlaskConical className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-serif text-base font-semibold text-ink">{site.name}</span>
                <span className="text-[0.7rem] text-ink-muted tracking-wide">{site.tagline}</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-ink-muted max-w-xs leading-relaxed">
              {site.descriptor}. Helping students master Chemistry for FSc, MDCAT, ECAT and beyond.
            </p>
            <div className="mt-4 flex flex-col gap-1.5 text-sm text-ink-muted">
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-brand-700">
                <Mail className="h-4 w-4" /> {site.email}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {site.location}
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerNav).map(([key, links]) => (
            <div key={key}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-700 mb-3">
                {key === 'learn' ? 'Learn' : key === 'resources' ? 'Resources' : key === 'professor' ? 'Professor' : 'Legal'}
              </h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link href={link.to} className="text-sm text-ink-muted hover:text-brand-700 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-light">
            &copy; {new Date().getFullYear()} {site.name} Chemistry Academy. All rights reserved.
          </p>
          <p className="text-xs text-ink-light">
            Teaching Chemistry since {site.teachingSince}
          </p>
        </div>
      </div>
    </footer>
  );
}
