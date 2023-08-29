const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Dosis", ...defaultTheme.fontFamily.sans],
        "space-grotesk": [
          "Space Grotesk",
          "Dosis",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        bgc: "#080404",
      },
    },
  },
  plugins: [],
};
