module.exports = {
  darkmode: 'class',
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      colors: {
        sunflower: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde58a',
          300: '#fbd24e',
          400: '#fabe25',
          500: '#f49d0c',
          600: '#d87607',
          700: '#bc560a',
          800: '#923f0e',
          900: '#78340f',
          950: '#451a03',
        },
      },
    },
  },
  plugins: [require('tailwind-hamburgers')],
};
