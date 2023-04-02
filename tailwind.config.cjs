/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
  corePlugins: {
    preflight: false,
  },
};
