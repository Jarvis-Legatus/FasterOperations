import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...(() => {
          const currentColors = require('tailwindcss/colors');
          const filteredColors = { ...currentColors };
          // Remove deprecated colors to silence warnings
          delete filteredColors['lightBlue'];
          delete filteredColors['warmGray'];
          delete filteredColors['trueGray'];
          delete filteredColors['coolGray'];
          delete filteredColors['blueGray'];
          return filteredColors;
        })(),
         primary: "#1A202C",  // MAIN COLOR CONTROL FOR ENTIRE THEME
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};
export default config;
