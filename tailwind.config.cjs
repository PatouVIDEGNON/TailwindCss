/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#00C2CB",
        "brand-light": "#4DCED4",
        "brand-dark" : "#05484B",
        
      }
    },
  },
  plugins: [],
}