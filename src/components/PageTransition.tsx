'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function PageTransition() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);

    const duration = isHome ? 1650 : 850;

    const timer = window.setTimeout(() => {
      setShow(false);
    }, duration);

    return () => window.clearTimeout(timer);
  }, [pathname, isHome]);

  if (!show) return null;

  return (
    <div
      className={`page-transition-screen ${
        isHome
          ? 'page-transition-home'
          : 'page-transition-fast'
      }`}
      aria-hidden="true"
    >
      <div className="page-transition-atom-wrap">
        <svg
          className="page-transition-atom"
          viewBox="0 0 240 240"
          role="presentation"
        >
          <g className="page-transition-orbits">
            <ellipse
              className="page-transition-orbit page-transition-orbit-1"
              cx="120"
              cy="120"
              rx="82"
              ry="33"
              transform="rotate(0 120 120)"
            />

            <ellipse
              className="page-transition-orbit page-transition-orbit-2"
              cx="120"
              cy="120"
              rx="82"
              ry="33"
              transform="rotate(60 120 120)"
            />

            <ellipse
              className="page-transition-orbit page-transition-orbit-3"
              cx="120"
              cy="120"
              rx="82"
              ry="33"
              transform="rotate(120 120 120)"
            />
          </g>

          <circle
            className="page-transition-nucleus-glow"
            cx="120"
            cy="120"
            r="24"
          />

          <circle
            className="page-transition-nucleus"
            cx="120"
            cy="120"
            r="13"
          />

          <circle
            className="page-transition-electron page-transition-electron-1"
            cx="202"
            cy="120"
            r="6"
          />

          <circle
            className="page-transition-electron page-transition-electron-2"
            cx="79"
            cy="49"
            r="6"
          />

          <circle
            className="page-transition-electron page-transition-electron-3"
            cx="79"
            cy="191"
            r="6"
          />
        </svg>
      </div>
    </div>
  );
}