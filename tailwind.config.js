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
  plugins: [],
  important: true, // https://sebastiandedeyne.com/why-we-use-important-with-tailwind/
};
