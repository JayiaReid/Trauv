/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#02040D",
        secondary: "#FCA525",
        tertiary: "#B8B0C0",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
      },
    },
  },
  plugins: [],
};