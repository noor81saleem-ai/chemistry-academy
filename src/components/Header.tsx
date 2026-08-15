'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  Search,
} from 'lucide-react';

import { primaryNav } from '@/data/site';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] =
    useState<string | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const isActive = (to: string) =>
    to === '/'
      ? pathname === '/'
      : pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur-sm">
      
      {/* MAIN HEADER */}
      <div className="mx-auto flex h-[76px] w-full max-w-[1500px] items-center px-4 sm:px-6 lg:px-8">

        {/* =========================
            CHEMISTRYMAX LOGO - LEFT
        ========================== */}
        <Link
          href="/"
          className="mr-8 flex shrink-0 items-center"
          aria-label="ChemistryMax Home"
        >
          <Image
            src="/chemistrymax-logo.png"
            alt="ChemistryMax"
            width={290}
            height={98}
            priority
            className="h-[100px] w-auto object-contain"
          />
        </Link>

        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}
        <nav className="hidden flex-1 items-center justify-center gap-0.5 lg:flex">
          {primaryNav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() =>
                item.children &&
                setOpenDropdown(item.label)
              }
              onMouseLeave={() =>
                setOpenDropdown(null)
              }
            >
              {item.children ? (
                <button
                  className={cn(
                    'nav-link',
                    isActive(item.to) &&
                      'nav-link-active'
                  )}
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.label
                        ? null
                        : item.label
                    )
                  }
                  aria-expanded={
                    openDropdown === item.label
                  }
                >
                  {item.label}

                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
              ) : (
                <Link
                  href={item.to}
                  className={cn(
                    'nav-link',
                    isActive(item.to) &&
                      'nav-link-active'
                  )}
                >
                  {item.label}
                </Link>
              )}

              {/* DROPDOWN */}
              {item.children &&
                openDropdown === item.label && (
                  <div className="absolute left-0 top-full w-64 pt-1">
                    <div className="card p-2 shadow-lift">
                      {item.children.map(
                        (child) => (
                          <Link
                            key={child.to}
                            href={child.to}
                            className="block rounded-md px-3 py-2 text-sm text-ink-muted transition-colors hover:bg-brand-50 hover:text-brand-700"
                          >
                            <span className="font-medium text-ink">
                              {child.label}
                            </span>

                            {child.desc && (
                              <span className="mt-0.5 block text-xs text-ink-light">
                                {child.desc}
                              </span>
                            )}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                )}
            </div>
          ))}
        </nav>

        {/* =========================
            RIGHT ACTIONS
        ========================== */}
        <div className="ml-auto flex shrink-0 items-center gap-2">

          {/* Search */}
          <Link
            href="/search"
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-brand-50 hover:text-brand-700"
          >
            <Search className="h-5 w-5" />
          </Link>

          {/* Online Tuition */}
          <Link
            href="/online-tuition"
            className="btn-gold btn-sm hidden sm:inline-flex"
          >
            Online Tuition
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
            className="flex h-9 w-9 items-center justify-center rounded-lg text-ink hover:bg-brand-50 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* =========================
          MOBILE NAVIGATION
      ========================== */}
      {mobileOpen && (
        <div className="border-t border-line bg-cream lg:hidden">
          <nav className="mx-auto flex max-h-[calc(100vh-4rem)] w-full max-w-[1500px] flex-col gap-1 overflow-y-auto px-4 py-3 sm:px-6">

            {primaryNav.map((item) => (
              <div key={item.label}>

                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown ===
                            item.label
                            ? null
                            : item.label
                        )
                      }
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-ink hover:bg-brand-50"
                    >
                      {item.label}

                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform',
                          openDropdown ===
                            item.label &&
                            'rotate-180'
                        )}
                      />
                    </button>

                    {openDropdown ===
                      item.label && (
                      <div className="flex flex-col gap-0.5 pl-4">

                        <Link
                          href={item.to}
                          className="rounded-md px-3 py-1.5 text-sm font-medium text-brand-700 hover:bg-brand-50"
                        >
                          View all
                        </Link>

                        {item.children.map(
                          (child) => (
                            <Link
                              key={child.to}
                              href={child.to}
                              className="rounded-md px-3 py-1.5 text-sm text-ink-muted hover:bg-brand-50 hover:text-brand-700"
                            >
                              {child.label}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.to}
                    className={cn(
                      'block rounded-md px-3 py-2 text-sm font-medium hover:bg-brand-50',
                      isActive(item.to)
                        ? 'text-brand-700'
                        : 'text-ink'
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <Link
              href="/online-tuition"
              className="btn-gold mt-2 w-full"
            >
              Online Tuition
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}