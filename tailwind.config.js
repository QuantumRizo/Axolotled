/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        textMain: '#111827',
        textMuted: '#4B5563',
        'brand-orchid': '#C066D9',
        'brand-hover': '#CBA8FF',
        'brand-deep': '#7648D9',
        'brand-soft-blue': '#729DF2',
        'brand-sky': '#72C1F2',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
