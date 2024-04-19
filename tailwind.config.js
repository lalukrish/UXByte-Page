/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  plugins: [],
  darkMode: "class",
  theme: {
    fontSize: {
      "9xl": "17rem",
      "8xl": "7rem",
      "7xl": "5.8rem",
      "4xl": "2.441rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "3xl": "2.14rem",
      "2xl": "1.41rem",
      "1xl": "1.16rem",
    },
    // colors: {
    //   gray: colors.coolGray,
    //   blue: colors.white,
    //   red: colors.rose,
    //   pink: colors.fuchsia,
    // },
    // fontFamily: {
    //   sans: ["Graphik", "sans-serif"],
    //   serif: ["Merriweather", "serif"],
    // },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
