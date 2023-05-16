const colors = require("tailwindcss/colors");

module.exports = {
  // purge: [
  //   "./src/*.vue",
  //   "./src/layouts/*.vue",
  //   "./src/components/*.vue",
  //   "./src/pages/*.vue",
  //   "./src/pages/**/*.vue",
  // ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      //  the primary, secondary and accent color variable names are picked up from quasar.variables.sass
      //  to avoid any collision issues between tailwind and quasars color system
      primary: "var(--q-color-primary)", // #818181
      secondary: "var(--q-color-secondary)", // #666666
      accent: "var(--q-color-accent)", // #E81E79
      "accent-alt-a": "#3393D6",
      "accent-alt-b": "#339FF1",
      "grey-light": "#F3F3F3",
      "grey-dark": "#818181",
      "grey-darkest": "#393939",
      black: colors.black,
      gray: colors.gray,
      white: colors.white,
      blue: colors.blue,
      white: colors.white,
    },
    borderColor: (theme) => ({
      ...theme("colors"),
      transparent: "transparent",
    }),
    extend: {
      colors: {
        //  the primary, secondary and accent color variable names are picked up from quasar.variables.sass
        //  to avoid any collision issues between tailwind and quasars color system
        primary: "var(--q-color-primary)", // #818181
        secondary: "var(--q-color-secondary)", // #666666
        accent: "var(--q-color-accent)", // #E81E79
        "accent-alt-a": "#3393D6",
        "accent-alt-b": "#339FF1",
        "grey-light": "#F3F3F3",
        "grey-dark": "#818181",
        "grey-darkest": "#393939",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
