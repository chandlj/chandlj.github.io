/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./frontend/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4dd0e1',
        'primary-light': '#88ffff',
        'primary-dark': '#009faf',
        secondary: '#e15e4d',
        'secondary-light': '#e79d97',
        'secondary-dark': '#d54a33',
        tertiary: '##4de1a8',
        'tertiary-light': '#bcf2d9',
        'tertiary-dark': '#00d081',
        background: '#ffffff',
        surface: '#121212',
      },
      opacity: {
        87: '.87',
        67: '.67',
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
