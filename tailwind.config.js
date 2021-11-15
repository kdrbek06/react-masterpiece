module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './src/**/*.html'],
    safelist: [
      'bg-hero-0',
      'bg-hero-1',
      'bg-hero-2',
      'bg-hero-3',
      'bg-hero-4',
      'bg-hero-5',
      'bg-hero-6',
    ]
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '2/3': '66vh',
      '3/4': '75%',
      'full': '100%',
    },
    extend: {
      textColor: {
        'darkkhaki': '#c0a756',
      },
      colors: {
        'darkkhaki': '#c0a756',
      },
      backgroundImage: {
        'hero-0': "url('./image/11.jpg')",
        'hero-1': "url('./image/22.jpg')",
        'hero-2': "url('./image/33.jpg')",
        'hero-3': "url('./image/44.jpg')",
        'hero-4': "url('./image/55.jpg')",
        'hero-5': "url('./image/66.jpg')",
        'hero-6': "url('./image/77.jpg')",
        'hero-44': "url('./image/444.jpg')",
      },
      margin: {
        '-6': '-1.5rem',
        '-12': '-3rem',
      },
      zIndex: {
        '-1': '-1',
      },
      fontFamily: {
        'rancho': ['rancho', 'cursive']
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      backgroundColor: ['group-focus']
    },
  },

  plugins: [],
}
