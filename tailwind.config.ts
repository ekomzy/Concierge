import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fefdf9',
          100: '#fdf9f0',
          200: '#faf3e0',
          300: '#f5e8c8',
        },
        gold: {
          400: '#d4af37',
          500: '#c9a227',
          600: '#b8941f',
        },
        luxury: {
          dark: '#1a1a1a',
          text: '#2d2d2d',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

