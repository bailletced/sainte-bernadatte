const { nextui } = require("@nextui-org/react");

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/frontend/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        beautiful: ["var(--font-bonbonregular)"],
      },
      colors: {
        "steber-blue": "#0f70b7",
        "steber-orange": "#fcb900",
        "steber-blue-gd-start": "#373B44",
        "steber-blue-gd-end": "#4286f4",
        "steber-red": "#BE1522",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
