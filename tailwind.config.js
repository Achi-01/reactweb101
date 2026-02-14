/** @type {import('tailwindcss').Config} */
export default {
  content:  [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primaryTitle:"#127369",
        primaryContent:"#4c5958",
        primarySubcontent:"#8AA6A3",
        primaryBaset:"#157b72",
        primaryAccent:"#0245ff",
        primaryBg:"#cd12ee",
      }
    },
  },
  plugins: [],
}

