/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },

  plugins: [nextui(
    {
      themes: {
        light: {
          colors: {
            'secondary-bg': '#C4B5FD',
            'primary-bg': '#2E1065',
            'on-primary': '#F7EEFF',
            'on-secondary': '#010201',
            background: "#F7EEFF", // or DEFAULT
            foreground: "#11181C", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: "#000000",
              DEFAULT: "#FF66FE",
            },
            // ... rest of the colors
          },
        },
        dark: {
          colors: {
            background: "#000000", // or DEFAULT
            foreground: "#ECEDEE", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            },
          },
          // ... rest of the colors
        },
        // ... custom themes
      },
    }
  )]
}
