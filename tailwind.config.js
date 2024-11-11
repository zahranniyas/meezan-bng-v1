/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sandeRegular: ["Regular"],
        sandeMedium: ["Medium"],
        sandeSemiBold: ["SemiBold"],
        sandeBold: ["Bold"],
        sandeExtraBold: ["ExtraBold"],
        quicksandRegular: ["QRegular"],
      },
    },
    plugins: [],
  },
};
