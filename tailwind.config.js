/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      sm: "420px",
      // => @media (min-width: 320px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
        colors: {
          "primary-nig": "#9747FF",
          "secondary-nig": "#3D0C7D",
          "primary-intl": "#385512",
          "secondary-intl": "#39900E",
        },
      },
    },
  },
  plugins: [],
};