const plugin = require('tailwindcss/plugin')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.md',
    './src/.vuepress/components/*.vue',
    './src/.vuepress/components/**/*.vue',
  ],
  theme: {
    extend: {
      inset: {
        'full': '100%',
      }
    },
  },
  variants: {
    backgroundColor: ["active", "focus", "hover", "disabled"],
    textColor: ["active", "focus", "hover", "disabled"],
    textDecoration: ["active", "focus", "hover", "disabled"],
    boxShadow: ["active", "focus", "hover", "disabled"],
    opacity: ["active", "focus", "hover", "disabled"],
    cursor: ['disabled']
  },
  plugins: [
    plugin(function({ addUtilities, theme }) {
      const newUtilities = {
        '.border-r-transparent': {
          borderRightColor: theme('colors.transparent'),
        },
        '.border-b-transparent': {
          borderBottomColor: theme('colors.transparent'),
        },
        '.border-l-transparent': {
          borderLeftColor: theme('colors.transparent'),
        },
        '.border-t-transparent': {
          borderTopColor: theme('colors.transparent'),
        },
      }
      addUtilities(newUtilities)
    })
  ],
  important: true, // https://sebastiandedeyne.com/why-we-use-important-with-tailwind/
};
