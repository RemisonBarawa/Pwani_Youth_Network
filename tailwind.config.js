/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        kenya: {
          black: "#000000",
          red: "#BB0000",
          green: "#006600",
          white: "#FFFFFF",
        },
        coast: {
          sand: "#F4E4C1",
          ocean: "#0077BE",
          coral: "#FF6B6B",
          palm: "#2D5016",
        },
      },
    },
  },
  plugins: [],
};
