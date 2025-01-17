/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#0D0714",
        secondary:"#9E78CF",
        outliner: "#3E1671",
        btncolor: "#15101C"
      }
    },
  },
  plugins: [],
}