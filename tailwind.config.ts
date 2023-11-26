/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      'h1': '150px',
      'h2': '100px',
      'h3': '56px',
      'h4': '32px',
      'h5': ['28px', { letterSpacing: '4.75px'}],
      'subheading1':  '28px',
      'subheading2':  [ '14px', { letterSpacing: '2.7px'}],
      'navText': [ '16px', { letterSpacing: '2.7px'}],
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      textColor: {
        'primary': '#FFFFFF',
        'secondary': '#D0D6F9',
      },
      backgroundColor: {
        'primary': '#0B0D17'
      },
      fontFamily: {
        sans: ['var(--font-barlow)'],
        header: ['var(--font-barlow-condensed)'],
        serif: ['var(--font-bellefair)'],
      },
      
    },
  },
  plugins: [require("tailwindcss-animate")],
}