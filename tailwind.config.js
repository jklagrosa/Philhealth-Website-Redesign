/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        members: "url('/assets/members.jpg')",
      },
      colors: {
        primary: "#329900",
      },
    },
  },
  plugins: [],
};
