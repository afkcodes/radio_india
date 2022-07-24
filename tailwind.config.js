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
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        serif: ['Poppins', ...defaultTheme.fontFamily.serif],
        mono: ['Poppins', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
