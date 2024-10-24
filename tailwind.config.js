/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        PrimaryColor: ['#1da1f3'],
        PrimaryColor2: ['#f1f5ff'],
        BodyBg: ['#f2f6ff'],
        HeadingColor: ['#555555'],
        TextColor: ['#999999'],
        TextColor2: ['#777777'],
        BorderColor: ['#d5d5d5'],
      },
    },
  },
  plugins: [],
};
