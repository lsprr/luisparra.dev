/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/content/**/*.{js,ts,jsx,tsx}",
    "./src/helpers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Nanum: ['Nanum Myeongjo', "serif"],
        Inter: ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [require("tailwind-fluid-typography")],
  darkMode: 'class',
}
