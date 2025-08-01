/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        futuraBold: ["Futura-Bold"],
        futuraMed: ["Futura-Medium"],
      },
      colors: {
        m1: "#EEA030",
        SB_White: "#fff",
        SB_Dark_Blue: "#11121C",
        SB_Blue: "#2C82C5",
      },
    },
  },
  plugins: [],
};
