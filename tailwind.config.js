module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white : "#ffffff",
      gray: "#f8f9fa",
      delivery: "#fef7ec",
      orange: "#fb6d3b",
      yellow: "#fcd661",
      purple: "#503e9d",
      purple_light: "#614c97",
      black: "#000000"
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
  },
  plugins: [],
}
