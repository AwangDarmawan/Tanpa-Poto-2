/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { min: "320px", max: "359px" },
        xe: { min: "360px", max: "399px" },
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        great: ["Great Vibes", "cursive"],
        sans: ["sans-serif"],
      },
    },
  },
  plugins: [],
};
