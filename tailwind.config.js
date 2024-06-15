/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '7rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    colors: {
      'cream': '#f5efe0',
      'purple': '#6059c9',
      'yellow': '#ffc20e',
      'white':'#ffffff',
      'brown':'#22130c',
      'lightgray':'#f2f2f2',
      'gray':'#4a5568',
      'black':'#111111',
      'border-gray':'#E8E8E8'
    },
    extend: {},
  },
  plugins: [],
};
