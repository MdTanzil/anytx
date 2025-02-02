/** @type {import('tailwindcss').Config} */
const { colors } = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flyonui/dist/js/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1f80f0", // Replace with your desired primary color
      },
      fontFamily: {
        inter: "var(--font-inter)",
        montserrat: "var(--font-montserrat)",
      },
    },
  },
  plugins: [require("flyonui"), require("flyonui/plugin")],
};
