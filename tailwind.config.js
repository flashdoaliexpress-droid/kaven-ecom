/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#071559',
        accent: '#071559',
        'accent-light': '#38BDF8',
        'cta-dark': '#1A1A2E',
        'bg-page': '#FDFDFD',
        'bg-surface': '#FFFFFF',
        'bg-tint': '#EEF3FF',
        'text-primary': '#111827',
        'text-secondary': '#6B7280',
        'text-hint': '#9CA3AF',
        'brd': '#E5E7EB',
        'brd-strong': '#D1D5DB',
      },
      fontFamily: {
        sans: ['"Geist"', 'sans-serif'],
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        pill: '999px',
      },
      boxShadow: {
        nav: '0 1px 4px rgba(0,0,0,0.06)',
        modal: '0 4px 16px rgba(0,0,0,0.10)',
      },
      letterSpacing: {
        tightest: '-0.02em',
      },
    },
  },
  plugins: [],
};
