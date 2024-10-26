/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
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
        TextDark: ['#222222'],
        TextWarning: ['#875522'],
        TextWarning2: ['#5d3205'],
        TextGrey: ['#657290'],
        TextGrey2: ['#79839b'],
        TextGrey3: ['#354058'],
        BorderColor: ['#d5d5d5'],
        BorderColor2: ['#e2e2e2'],
      },
      boxShadow: {
        custom: '0px 10px 7.5px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
};
