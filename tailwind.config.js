/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: '#4A6741',
          light: '#6B8F71',
          pale: '#E8F0E9',
        },
        cream: {
          DEFAULT: '#F7F3EE',
          dark: '#EDE8E0',
        },
        espresso: {
          DEFAULT: '#2D2A26',
          light: '#5C5651',
        },
        gold: {
          DEFAULT: '#C4A882',
          light: '#DFC9A8',
        },
      },
      fontFamily: {
        garamond: ['"Cormorant Garamond"', 'serif'],
        jost: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
