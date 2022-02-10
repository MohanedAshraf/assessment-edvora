module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'edvora-gray': '#292929',
        'edvora-light-gray': '#939393',
        'edvora-dark-gray': '#131313',
      },
    },
    fontFamily: {
      body: ['SF Pro Display'],
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      })
    },
  ],
}
