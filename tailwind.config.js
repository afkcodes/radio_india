const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    'src/pages/**/*.{js,ts,jsx,tsx}',
    'src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '2000px',
      },
      fontFamily: {
        sans: ['Lexend', ...defaultTheme.fontFamily.sans],
        serif: ['Lexend', ...defaultTheme.fontFamily.serif],
        mono: ['Lexend', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
