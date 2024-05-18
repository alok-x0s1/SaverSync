/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        infant: ["Ysabeau Infant", "sans-serif"],
        madimi: ["Madimi One", "sans-serif"],
      },
      colors: {
        "primary-bg-color": "#0A192F",
        "primary-color": "#CCD6F6",
        "secondary-color": "#64FFDA",
      },
    },
  },
  plugins: [],
};
