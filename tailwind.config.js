/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        loading: {
          "0%, 66%, 100%": { transform: "scale(1)" },
          "33%": { transform: "scale(1.5)" },
        },
      },
      animation: {
        loading: "loading 1.8s ease infinite",
      },
    },
  },
  plugins: [],
};
