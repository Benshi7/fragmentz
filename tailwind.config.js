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
        gray: '#D1D1D1',
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
  theme: {
    extend: {
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        "spotlight": "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {

        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          }},
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },

  darkMode: 'class', // or 'media' or 'class'
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: '#121212',
            foreground: '#FFFFFF',
            primary: '#653DB3',
            secondary: '#EDE9FE',
            gray: '#D1D1D1'
          }
        }
      }
    })]
}
