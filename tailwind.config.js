/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Sky: {
          100: "#204C6E",
          200: "#4586B3",
          300: "#76C0F6",
          400: "#D7E0F9",
          500: "#FAF7FF",
        },
        Green: {
          100: "#2bf0df",
          200: " #5af2e2",
          300: "#78f4e6",
          400: "#90f6ea",
          500: "#a5f8ed",
          600: "#b9faf1",
        },

        Dark: {
          100: "#000000",
          200: "#1e1e1e",
          300: "#353535",
          400: "#4e4e4e",
          500: "#696969",
          600: "#858585",
        },

        Mixed: {
          100: " #235a54",
          200: "#3c6b65",
          300: "#547c77",
          400: " #6b8e89",
          500: "#83a09c",
          600: "#9bb3af",
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class'
};
