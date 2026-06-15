/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy:    '#0A0F1E',
        cobalt:  '#1B2A5E',
        gold:    '#C9A84C',
        'gold-light': '#E8C96A',
        'gold-dim':   '#8C6F2E',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body:    ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
