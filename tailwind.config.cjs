/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#020202",
        gray: "#888888",
        typescript: "#2b7489",
        rust: "#dea584",
      },
    },
  },
  plugins: [],
};
