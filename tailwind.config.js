/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066FF',
          dark: '#0075EB',
          light: '#5CB8E8',
        },
        secondary: {
          DEFAULT: '#0075EB',
          dark: '#0F3558',
          light: '#2E6BA3',
        },
        accent: {
          DEFAULT: '#0066FF',
          dark: '#2E88C5',
          light: '#5CB8E8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
