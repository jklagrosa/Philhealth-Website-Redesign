/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        "2xl": "4rem",
      },
    },
    extend: {
      colors: {
        primary: "#329900",
      },
    },
  },
  plugins: [],
};
