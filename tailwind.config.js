module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'm':'#1a73e8',
        's':'#1ed760',
        'n':'#e21222'
      }
    },
  },



  // plugins:
  // [require("@tailwindcss/forms")],
  plugins: [
    // ...
    require("@tailwindcss/forms"),
    require('@tailwindcss/typography'),
  ],
};
