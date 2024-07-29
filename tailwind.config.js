/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [

    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        tecHeavy: '#161616',
        tecMedium: '#333435',
        tecMediumLight: '#94A1A6',
        tecLight: '#AAB7BF',
        tecSuperLight: '#EBF0F2',
      },
    },

  },
  plugins: [],
};
