/ @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {

        heading: ['Bely', 'serif'],
        body: ['UbuntuMono', 'monospace'],
      },
      colors: {

        'dominante': '#CCC9DC',
        'secondaire': '#020122',
        'accent': '#7A6174',
        'cards': '#597081',
      },
      spacing: {
        
        '1vw': '1vw',
        '2vw': '2vw',
        '5vw': '5vw',
        '10vw': '10vw',
        '1vh': '1vh',
        '5vh': '5vh',
        '10vh': '10vh',
        '20vh': '20vh',
      },
    },
  },
  plugins: [],
}