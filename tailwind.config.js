/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        cinzel: ["Cinzel", "serif"],
      },
      backgroundImage: {
        "featured-img": "url('./assets/home/featured.jpg')",
        "authentication-bg": "url('./assets/others/authentication.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
