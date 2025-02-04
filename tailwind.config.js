module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e07f1d',
          dark: '#845015',
          light: '#C17A2F', // Add this new lighter shade
          logo: '#FFB649', // Add this new logo color
        },
        brown: {
          DEFAULT: '#452508',
          light: '#8B5E3C',
          dark: '#1c1108',
          darkest: '#301d0c',
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
        black: {
          light: '#333333',
          DEFAULT: '#000000',
          dark: '#1a1a1a',
          darkest: '#0d0d0d',
        },
        dark: {
          primary: '#1a1a1a',
          secondary: '#2d2d2d',
          accent: '#404040',
          surface: '#121212',
          text: {
            primary: '#ffffff',
            secondary: '#e0e0e0',
            muted: '#a0a0a0'
          },
          border: '#333333',
          hover: '#505050'
        },
        darkMode: {
          primary: {
            DEFAULT: '#845015',
            light: '#96601A',
            dark: '#6B4012'
          },
          cream: {
            DEFAULT: '#2C2C2C',
            light: '#383838',
            dark: '#1F1F1F'
          },
          gold: {
            DEFAULT: '#B38600',
            light: '#CC9900',
            dark: '#996E00'
          }
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
  // Add base URL for GitHub Pages
  publicPath: process.env.NODE_ENV === 'production'
    ? '/kayce_modern_shop-website/'
    : '/',
}
