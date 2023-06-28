/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#8d0801",
        secondary: "#f4d58d",
        tertiary: "#000",
        complementary: "#2CDA9D",
        "soft-white": "#eee",
        "soft-gray": "#708d81"
      },
      fontFamily: {
        titles: "Abril Fatface"
      }
    }
  },
  plugins: []
}
