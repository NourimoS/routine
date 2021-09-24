module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes:{
        slide:{
          "0%":{
            transform:'translateX(100vw)',
          },
          "100%":{
            transform:'translateX(-120%)',
          }
        }
      },
      animation:{
        slide:"slide linear infinite backwards"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
