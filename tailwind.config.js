/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F8FAFC',
        paper: '#FFFFFF',
        ink: {
          DEFAULT: '#0F172A',
          muted: '#475569',
          light: '#64748B',
        },
        brand: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        gold: {
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        },
        line: '#E2E8F0',
      },
      fontFamily: {
        serif: ['Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        page: '1152px',
        narrow: '768px',
        wide: '1280px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15,23,42,0.04), 0 1px 3px rgba(15,23,42,0.06)',
        card: '0 1px 3px rgba(15,23,42,0.05), 0 2px 6px rgba(15,23,42,0.04)',
        lift: '0 4px 12px rgba(15,23,42,0.08), 0 2px 4px rgba(15,23,42,0.05)',
      },
    },
  },
  plugins: [],
};
