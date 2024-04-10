/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  plugins: [],
  theme: {
    fontSize: {
      "9xl": "20rem",
      "8xl": "7rem",
      "7xl": "6rem",
      "4xl": "2.441rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "3xl": "2.14rem",
      "2xl": "1.41rem",
      "1xl": "1.11rem",
    },
  },
};
