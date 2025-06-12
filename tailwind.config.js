/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        proxima: ['"ProximaVara"', "sans-serif"],
      },
      screens: {
        xs374: "374px",
        xs390: "390px",
        xxl1791: "1791px",
      },
    },
  },
  plugins: [],
};
