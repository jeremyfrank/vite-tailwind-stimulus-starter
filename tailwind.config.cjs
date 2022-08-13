/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html",
    "./src/*.js",
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      dropShadow: {
        logo: '0 0 2em var(--logo-color)',
      },
      willChange: {
        filter: 'filter',
      }
    },
  },
  plugins: [],
}
