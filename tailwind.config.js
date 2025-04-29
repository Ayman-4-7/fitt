/** @type {import('tailwindcss').Config} */
module.exports = {
 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['"Anton"', 'sans-serif'],
        oswald: ['"Oswald"', 'sans-serif'],
        'bebas-neue': ['"Bebas Neue"', 'cursive'],
        rajdhani: ['"Rajdhani"', 'sans-serif'],
      },
    },
  },

}

