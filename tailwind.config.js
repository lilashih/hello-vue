const colors = require('tailwindcss/colors');

colors['tic-tac-toe'] = {
  DEFAULT: '#777',
};

module.exports = {
  purge: [
    './index.html',
    './src/**/*',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors,
    backgroundColor: (theme) => ({
      ...theme('colors'),
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};