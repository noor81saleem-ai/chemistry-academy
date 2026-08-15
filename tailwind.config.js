/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F2',
        paper: '#FFFFFF',
        ink: {
          DEFAULT: '#18201E',
          muted: '#58706A',
          light: '#8BA39C',
        },
        brand: {
          50: '#EAF5F0',
          100: '#D4EBE2',
          200: '#AFD8C8',
          300: '#7FC0AC',
          400: '#4FA590',
          500: '#2D8A75',
          600: '#1A705E',
          700: '#0F6655',
          800: '#0B5244',
          900: '#083D33',
        },
        gold: {
          400: '#E8B544',
          500: '#D99A17',
          600: '#B87F12',
          700: '#94680F',
        },
        line: '#D9E4DF',
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        page: '1152px',
        narrow: '768px',
        wide: '1280px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15,102,85,0.04), 0 1px 3px rgba(15,102,85,0.06)',
        card: '0 1px 3px rgba(15,102,85,0.05), 0 2px 6px rgba(15,102,85,0.04)',
        lift: '0 4px 12px rgba(15,102,85,0.08), 0 2px 4px rgba(15,102,85,0.05)',
      },
    },
  },
  plugins: [],
};
