import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textColor: {
        'primary': '#FFFFFF',
        'secondary': '#D0D6F9',
      },
      fontFamily: {
        sans: ['var(--font-barlow)'],
        header: ['var(--font-barlow-condensed)'],
        serif: ['var(--font-bellefair)'],
      },
    },
  },
  plugins: [],
}
export default config
