const colors = require('tailwindcss/colors');

// colors['tic-tac-toe'] = {
//   DEFAULT: '#cc6b6b',
// };

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