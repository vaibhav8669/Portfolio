/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
        mooli: ["Mooli", "sans-serif"],
      },
      keyframes: {
        type: {
          from: { width: "0" },
          // to: { width: "100%" },
        },
        blink: {
          "from, to": { border: "transparent" },
          "50%": { border: "orange" },
        },
      },
      screens: {
        sm: { max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }
      },
    },
  },
  plugins: [],
};
