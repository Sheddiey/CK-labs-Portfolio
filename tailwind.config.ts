import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFF1E2",
        secondary: "#9F9689",
        blue_1: "#0791B1",
        blue_2: '#CBE2E7',
        blue_3: '#BFB7B5',
        blue_4: '#908B92',
        blue_5: '#2F2680',
        green_1: '#7AB37C',
        green_2: '#418B7E',
        green_3: '#2C691D',
        green_4: '#C5C764',
        green_5: '#80A416',
      },
    },
  },
  plugins: [],
};
export default config;
