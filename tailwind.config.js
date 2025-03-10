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
        tecHeavy: '#0f172a',
        tecMedium: '#0f170a',
        tecMediumLight: '#273149',
        tecLight: '#3f4969 ',
        tecSuperLight: '#576289 ',
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [  ],
};
