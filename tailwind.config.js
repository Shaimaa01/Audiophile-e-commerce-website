/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "burnt-orange": "#D87D4A",
        "dark-gray": "#101010",
        "light-gray": "#F1F1F1",
        "silver-gray": "#CFCFCF",
        "off-white": "#FAFAFA",
        peach: "#fbaf85",
        white: "#FFFFFF",
        black: "#000000",
        red:"#CD2C2C",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
