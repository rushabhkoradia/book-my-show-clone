module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navColor: {
          50: "#edf0fd",
          100: "#f5f5f5",
          200: "#afb6cf",
          300: "#9099bb",
          400: "#707ba7",
          500: "#57628e",
          600: "#444c6f",
          700: "#2B3148",
          800: "#1c2132",
          900: "#080b17",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
