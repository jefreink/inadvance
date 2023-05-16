module.exports = {
  purge: [
    "./src/*.vue",
    "./src/layouts/*.vue",
    "./src/components/*.vue",
    "./src/pages/*.vue",
    "./src/pages/**/*.vue",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    rotate: {
      "-180": "-180deg",
      "-90": "-90deg",
      "-45": "-45deg",
      "0": "0",
      "45": "45deg",
      "90": "90deg",
      "135": "135deg",
      "180": "180deg",
      "270": "270deg",
    },
    scale: {
      "0": "0",
      "25": ".25",
      "50": ".5",
      "75": ".75",
      "90": ".9",
      "95": ".95",
      "100": "1",
      "105": "1.05",
      "110": "1.1",
      "120": "1.2",
      "125": "1.25",
      "130": "1.3",
      "200": "2",
    },
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
