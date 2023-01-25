# Get Started

This project uses TailwindCSS `v1.9.0` and tries it's best to mimick Bootstrap 4 design using as minimal Tailwind config as possible. Follow th below guide to properly configure your project to meet the template component requirements.
## Configure TailwindCSS

Make sure you have [TailwindCSS `v1.9.0`](https://v1.tailwindcss.com/docs/installation) configured for your project in order to use these components.

## Configure BoowindCSS

Replace your default `tailwind.config.js` file with the one shown down below or use the relevant parts from variants and theme property according to your existing config.

``` js
module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: [],
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
```

## Copy & Paste

From there it's just a matter of copy pasting these templates in your project just like you did with Bootstrap.