/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        back: "back 30s linear infinite",
      },
      keyframes: {
        back: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "-2000px 0" },
        },
      },
    },
  },
  plugins: [],
}
