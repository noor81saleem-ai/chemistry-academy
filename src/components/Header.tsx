'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Search, FlaskConical } from 'lucide-react';
import { primaryNav, site } from '@/data/site';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const isActive = (to: string) =>
    to === '/' ? pathname === '/' : pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur-sm">
      <div className="container-wide flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-700 text-white">
            <FlaskConical className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-base font-semibold text-ink">{site.name}</span>
            <span className="text-[0.7rem] text-ink-muted tracking-wide">{site.tagline}</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {primaryNav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.children ? (
                <button
                  className={cn('nav-link', isActive(item.to) && 'nav-link-active')}
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                  aria-expanded={openDropdown === item.label}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
              ) : (
                <Link href={item.to} className={cn('nav-link', isActive(item.to) && 'nav-link-active')}>
                  {item.label}
                </Link>
              )}

              {item.children && openDropdown === item.label && (
                <div className="absolute left-0 top-full pt-1 w-64">
                  <div className="card p-2 shadow-lift">
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        href={child.to}
                        className="block rounded-md px-3 py-2 text-sm text-ink-muted hover:bg-brand-50 hover:text-brand-700 transition-colors"
                      >
                        <span className="font-medium text-ink">{child.label}</span>
                        {child.desc && (
                          <span className="block text-xs text-ink-light mt-0.5">{child.desc}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/search"
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-muted hover:bg-brand-50 hover:text-brand-700 transition-colors"
          >
            <Search className="h-5 w-5" />
          </Link>
          <Link href="/online-tuition" className="btn-gold btn-sm hidden sm:inline-flex">
            Online Tuition
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg text-ink hover:bg-brand-50"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-line bg-cream">
          <nav className="container-wide py-3 flex flex-col gap-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {primaryNav.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                      className="flex w-full items-center justify-between px-3 py-2 text-sm font-medium text-ink rounded-md hover:bg-brand-50"
                      aria-expanded={openDropdown === item.label}
                    >
                      {item.label}
                      <ChevronDown className={cn('h-4 w-4 transition-transform', openDropdown === item.label && 'rotate-180')} />
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4 flex flex-col gap-0.5">
                        <Link href={item.to} className="px-3 py-1.5 text-sm text-brand-700 font-medium rounded-md hover:bg-brand-50">
                          View all
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.to}
                            href={child.to}
                            className="px-3 py-1.5 text-sm text-ink-muted rounded-md hover:bg-brand-50 hover:text-brand-700"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.to}
                    className={cn(
                      'block px-3 py-2 text-sm font-medium rounded-md hover:bg-brand-50',
                      isActive(item.to) ? 'text-brand-700' : 'text-ink'
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/online-tuition" className="btn-gold mt-2 w-full">
              Online Tuition
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
