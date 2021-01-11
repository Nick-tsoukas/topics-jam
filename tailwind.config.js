module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {
      zIndex: ['hover']
    },
  },
  plugins: [require('@tailwindcss/typography')]
}
