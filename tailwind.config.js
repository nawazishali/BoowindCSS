module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ["active", "focus", "hover", "disabled"],
    textColor: ["active", "focus", "hover", "disabled"],
    textDecoration: ["active", "focus", "hover", "disabled"],
    boxShadow: ["active", "focus", "hover", "disabled"],
    opacity: ["active", "focus", "hover", "disabled"]
  },
  plugins: [],
  important: true, // https://sebastiandedeyne.com/why-we-use-important-with-tailwind/
};
