const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      white: "#FFFFFF",
      "gray-100": "#E9E9E9",
      "gray-200": "#C9C9C9",
      "gray-600": "#484848",
      "blue-900": "#024266",
      "sky-800": "#34495D",
      "sky-900": "#283646",
      "red-900": "#990022",
    },
  },
  plugins: [],
};
