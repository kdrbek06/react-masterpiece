module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './src/**/*.html'],  darkMode: 'media', // or 'media' or 'class'
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
      backgroundImage: {
        'hero-0': "url('./image/11.jpg')",
        'hero-1': "url('./image/22.jpg')",
        'hero-2': "url('./image/33.jpg')",
      },
      margin: {
        '-6': '-1.5rem',
        '-12': '-3rem',
      },
      zIndex: {
        '-1': '-1',
       }
    },
  },
  variants: {
    extend: {},
  },
  
  plugins: [],
}
