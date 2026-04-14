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
        primary: {
          DEFAULT: '#047857',
          light: '#ECFDF5',
          dark: '#065F46',
        },
        emerald: {
          DEFAULT: '#10B981',
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        navy: {
          DEFAULT: '#07111F',
          light: '#0F172A',
          dark: '#030712',
        },
        accent: {
          DEFAULT: '#2563EB',
          light: '#EFF6FF',
        },
        civic: {
          green: '#0F766E',
          deep: '#047857',
          soft: '#ECFDF5',
          navy: '#07111F',
          white: '#FFFFFF',
          gray: '#F8FAFC',
          text: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
