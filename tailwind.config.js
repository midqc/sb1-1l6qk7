/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#1a2e05',
          DEFAULT: '#15240d',
          dark: '#0f1a0a',
        },
        secondary: {
          light: '#3f6212',
          DEFAULT: '#365314',
          dark: '#2f4a0e',
        },
        accent: '#84cc16',
        background: '#0a0f00',
      },
    },
  },
  plugins: [],
};
