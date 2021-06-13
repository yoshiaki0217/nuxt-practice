module.exports = {
  // important: true,
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
  
    },
    extend: {
      colors: {
        main: '#333',
        sub: '#f33',
      },
      margin: {
       
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
