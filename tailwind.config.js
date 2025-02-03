module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#A05C17',
          dark: '#845015',
        },
        brown: {
          DEFAULT: '#6B4423',
          light: '#8B5E3C',
          dark: '#523318',
          darkest: '#362211',
        },
        cream: {
          DEFAULT: '#F5E6D3',
          light: '#FFF6E8',
          dark: '#D4C3B3',
        },
        gold: {
          light: '#FFD700',
          DEFAULT: '#FFB900',
          dark: '#CC9900',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
