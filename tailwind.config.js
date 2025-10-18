/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f0',
          100: '#dcf2dc',
          200: '#bce5bc',
          300: '#8dd18d',
          400: '#5bb85b',
          500: '#2e7d32',
          600: '#1b5e20',
          700: '#145a1a',
          800: '#0f4a15',
          900: '#0a3a10',
        },
        accent: {
          50: '#fefdf7',
          100: '#fef9e7',
          200: '#fdf2c4',
          300: '#fce896',
          400: '#f9d866',
          500: '#d4af37',
          600: '#b8941f',
          700: '#9a7a1a',
          800: '#7c6015',
          900: '#5e4810',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
}