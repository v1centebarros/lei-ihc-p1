const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({  mode: 'jit',
  content: [
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        "light-gray": "#f2eaea",
        "soft-red":"#f87060",
        "very-dark-red" : "#2e2727",
        "soft-black" : "#2c2f33"
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp'),
  ],
});