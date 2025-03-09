/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        xl: '1440px',
        'better-hover': { raw: '(hover: hover) and (pointer: fine)' }
      },
      colors: {
        black: '#000000',
        cream: '#FFC857',
        pink: '#FF521B',
        teal: '#00798C'
      },
      fontFamily: {
        display: ['var(--font-nichrome)'],
        neon: ['var(--font-neon)']
      },
      fontSize: {
        base: '2rem',
        product: '64px',
        title: '80px',
        hero: '244px'
      },
      lineHeight: {
        trim: '74%',
        tight: '100%'
      },
      dropShadow: {
        cart: '0px 2px 0px #000000',
        section: '0px 8px 0px #6BE5D0'
      },
      borderRadius: {
        extra: '32px'
      }
    }
  },
  plugins: []
}
