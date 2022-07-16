const colors = require('tailwindcss/colors');

// colors['tic-tac-toe'] = {
//   DEFAULT: '#cc6b6b',
// };

module.exports = {
  content: [
    './index.html',
    './src/**/*',
  ],
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
  plugins: [],
};