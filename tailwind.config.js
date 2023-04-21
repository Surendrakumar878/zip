/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white1": "#fff",
        "white2": "#EAF3FF",
        "gree": "#03A71E",
        "btn": '#28236E',
        "ons": "#4E17E2",
        "card": "#2B2353",
        "purpl": "#9672FF",
        "bg": "#EAF3FF"
      },
      gridTemplateColumns: {
        'fill': 'repeat(auto-fill, minmax(220px, 1fr))',
        'fill-lg': 'repeat(auto-fill, minmax(64rem, 1fr))',
        'fit': 'repeat(auto-fit, minmax(300px, 1fr))'
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      backgroundImage: {
        'blueback': "url('/img/Group 40332.png')",
        'header1': "url('/img/header1.png')",
        'header2': "url('/img/header2.png')",
        'blackimg': "url('/img/blackimg.jpg')",
        'reactangle': "url('/img/Rectangle 4307.png')",
        'pop': "url('/img/BG Assets.png')",
        'grid': "url('/img/Repeat Grid 1.png')",
        'aboutbg': "url('/img/down-tjems.png')",
        'jaali': "url('/img/Mask Group 13.png')",
        "bgsummary": "url('/img/Mask Group 26.png')",
        "line": "url('/img/line.png')",


      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),

  ],
}
