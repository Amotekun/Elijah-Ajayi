/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "HotPink": "#FF69B4",
        "LightGray": "#CCCCCC",
        "MintGreen": "#98FFB3",
        "SoftBlue": "#A6C8FF",
        "Gold": "#FFD700",
        "Coral": "#FF7F50",
        "Lilac": "#C8A2C8",
        "SageGreen": "#BCCEB7",
        "Terracotta": "#E2725B",
        "Teal": "#008080",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};