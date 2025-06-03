// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-primario': '#245361',
        'tasman': '#ccd8cf',
        'camelot': '#853951',
        'roti': '#c1a23b'
      },

    },
  },
  plugins: [],
}
