module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#8B5E3C', // Rich warm brown
        'primary-dark': '#6B4423', // Darker brown
        cream: {
          light: '#FFF9F0', // Lightest cream
          DEFAULT: '#F5E6D3', // Warm cream
          dark: '#E6D5BD', // Darker cream
        },
        brown: {
          lightest: '#D4C3B3', // Very light brown
          light: '#BFA089', // Light brown
          DEFAULT: '#8B5E3C', // Medium brown (same as primary)
          dark: '#6B4423', // Dark brown
          darkest: '#422204' // Very dark brown
        },
        gold: {
          light: '#DDC6A1', // Light gold
          DEFAULT: '#C5A572', // Medium gold
          dark: '#A68249' // Dark gold
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },

  },
  plugins: [],
}
