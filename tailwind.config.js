/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: "Outfit",
      },
    },
    colors: {
      gray: "#6B7280",
      mdGray: "#9ca3af",
      lightGray: "#F3F4F6",
      white: "#ffffff",
      black: "#000000",
      orange: "#FF532E",
      slate: "#94a3b8",
    },
  },
  plugins: [],
};
