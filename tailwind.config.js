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
      "8xl": "5.8rem",
      "7xl": "20rem",
      "4xl": "2.441rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "3xl": "2.14rem",
    },
  },
};
