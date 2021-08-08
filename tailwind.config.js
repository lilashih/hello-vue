const colors = require('tailwindcss/colors');

colors['tic-tac-toe'] = {
  DEFAULT: '#777',
};
colors.youtube = {
  DEFAULT: '#dbf2ea',
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
  variants: {},
  plugins: [],
};