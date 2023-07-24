/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'lpink1': '#FD467D',
        'pink1': '#FF0A54',
        'ldark1': '#42526E',
        'dark1': '#172B4D',
        'gray1': '#F8F8F8',
        'lgray1': '#BBC1CE',
        'mgray1': '#7A869A',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.25rem',
        '30': '7.5rem',
        '38': '9.25rem',
        '42': '10.3125rem',
        '75':'18.8125rem',
        '82':'19.7rem',
        '90':'21.5625rem',
        '94': '23.5rem',
        '98' : '27.375rem',
        '100':'30.5rem',
        '110': '30.8125rem',
        '120':'36.6875rem',
      }
    },
  },
  plugins: [],
}