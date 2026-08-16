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

  const parentLabel = (label: string) => {
    if (label === 'FSc') return 'FSc Chemistry';
    if (label === 'MDCAT') return 'MDCAT Chemistry';
    if (label === 'ECAT') return 'ECAT Chemistry';

    return null;
  };

  return (
    <header className="header-shell sticky top-0 z-50">
      {/* MAIN HEADER */}
      <div className="mx-auto flex h-[76px] w-full max-w-[1500px] items-center px-4 sm:px-6 lg:px-8">

        {/* LOGO */}
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

        {/* ======================================
            DESKTOP NAV
        ======================================= */}
        <nav className="hidden flex-1 items-center justify-center gap-0.5 lg:flex">
          {primaryNav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => {
                if (item.children) {
                  setOpenDropdown(item.label);
                }
              }}
              onMouseLeave={() => {
                setOpenDropdown(null);
              }}
            >
              {item.children ? (
                <button
                  type="button"
                  className={cn(
                    'nav-link',
                    isActive(item.to) && 'nav-link-active'
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

                  <ChevronDown
                    className={cn(
                      'h-3.5 w-3.5 transition-transform',
                      openDropdown === item.label &&
                        'rotate-180'
                    )}
                  />
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

              {/* ======================================
                  DROPDOWN
              ======================================= */}
              {item.children &&
                openDropdown === item.label && (
                  <div className="absolute left-0 top-full z-50 w-64 pt-1">

                    <div className="header-dropdown-box rounded-lg p-2">

                      {/* ----------------------------------
                          FSc / MDCAT / ECAT MAIN PAGE
                      ----------------------------------- */}
                      {parentLabel(item.label) && (
                        <>
                          <Link
                            href={item.to}
                            className="header-parent-link block rounded-md px-3 py-2.5"
                          >
                            <span className="block text-sm font-semibold">
                              {parentLabel(item.label)}
                            </span>
                          </Link>

                          <div className="header-dropdown-separator my-1" />
                        </>
                      )}

                      {/* ----------------------------------
                          ORIGINAL CHILD ITEMS

                          Resources stays exactly like before.
                      ----------------------------------- */}
                      <div className="flex flex-col gap-0.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.to}
                            href={child.to}
                            className="header-child-link block rounded-md px-3 py-2"
                          >
                            <span className="block text-sm font-medium">
                              {child.label}
                            </span>

                            {child.desc && (
                              <span className="header-child-description mt-0.5 block text-xs leading-4">
                                {child.desc}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>

                    </div>
                  </div>
                )}
            </div>
          ))}
        </nav>

        {/* ======================================
            RIGHT SIDE
        ======================================= */}
        <div className="ml-auto flex shrink-0 items-center gap-2">
          <Link
            href="/search"
            aria-label="Search"
            className="header-search flex h-9 w-9 items-center justify-center rounded-lg transition-colors"
          >
            <Search className="h-5 w-5" />
          </Link>

          <Link
            href="/online-tuition"
            className="btn-gold btn-sm hidden sm:inline-flex"
          >
            Online Tuition
          </Link>

          <button
            type="button"
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
            className="header-menu-button flex h-9 w-9 items-center justify-center rounded-lg lg:hidden"
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

      {/* ======================================
          MOBILE NAV
      ======================================= */}
      {mobileOpen && (
        <div className="header-mobile-area lg:hidden">

          <nav className="mx-auto flex max-h-[calc(100vh-4rem)] w-full max-w-[1500px] flex-col gap-1 overflow-y-auto px-4 py-3 sm:px-6">

            {primaryNav.map((item) => (
              <div key={item.label}>

                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.label
                            ? null
                            : item.label
                        )
                      }
                      className="header-mobile-dropdown-button flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium"
                    >
                      {item.label}

                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform',
                          openDropdown === item.label &&
                            'rotate-180'
                        )}
                      />
                    </button>

                    {openDropdown === item.label && (
                      <div className="flex flex-col gap-1 py-1 pl-4">

                        {/* FSc / MDCAT / ECAT MAIN PAGE */}
                        {parentLabel(item.label) && (
                          <Link
                            href={item.to}
                            className="header-mobile-parent block rounded-md px-3 py-2 text-sm font-semibold"
                          >
                            {parentLabel(item.label)}
                          </Link>
                        )}

                        {/* For Resources and any other dropdown */}
                        {!parentLabel(item.label) && (
                          <Link
                            href={item.to}
                            className="header-mobile-parent block rounded-md px-3 py-2 text-sm font-semibold"
                          >
                            View all
                          </Link>
                        )}

                        {item.children.map((child) => (
                          <Link
                            key={child.to}
                            href={child.to}
                            className="header-mobile-child block rounded-md px-3 py-2 text-sm"
                          >
                            <span className="block font-medium">
                              {child.label}
                            </span>

                            {child.desc && (
                              <span className="header-child-description mt-0.5 block text-xs">
                                {child.desc}
                              </span>
                            )}
                          </Link>
                        ))}

                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.to}
                    className={cn(
                      'header-mobile-normal block rounded-md px-3 py-2 text-sm font-medium',
                      isActive(item.to) &&
                        'header-mobile-normal-active'
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