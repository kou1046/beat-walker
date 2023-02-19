/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,tsx}", "./lib/components/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      animation: {
        "wobble-ver-right": "wobble-ver-right 0.3s ease   both",
      },
      keyframes: {
        "wobble-ver-right": {
          "0%,to": {
            transform: "translateY(0) rotate(0)",
            "transform-origin": "50% 50%",
          },
          "15%": {
            transform: "translateY(-30px) rotate(6deg)",
          },
          "30%": {
            transform: "translateY(15px) rotate(-6deg)",
          },
          "45%": {
            transform: "translateY(-15px) rotate(3.6deg)",
          },
          "60%": {
            transform: "translateY(9px) rotate(-2.4deg)",
          },
          "75%": {
            transform: "translateY(-6px) rotate(1.2deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
