/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#00C2CB",
          light: "#60E7ED",
          dark: "#05484B"
        }, 
      },
      fontFamily: {
        headling: "Poppins, sans-serif",
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"]
    }
  },
  plugins: [],
}