const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        blue: {
          50: '#e6f1fe',
          100: '#cce3fd',
          200: '#99c7fb',
          300: '#66aaf9',
          400: '#338ef7',
          500: '#006FEE',
          600: '#005bc4',
          700: '#004493',
          800: '#002e62',
          900: '#001731'
        }
        // .. rest of the colors
      }
    }
  },
  darkMode: 'class', // or 'media' or 'class'
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: '#121212',
            foreground: '#FFFFFF',
            primary: '#653DB3'
          }
        }
      }
    })]
}
