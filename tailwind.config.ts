import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xl: "1280px",
      lg: "1024px",
      md: "768px",
      sm: "560px",
    },
    extend: {
      colors: {
        "Marine-blue": "hsl(213, 96%, 18%)",
        "Purplish-blue": "hsl(243, 100%, 62%)",
        "Pastel-blue": "hsl(228, 100%, 84%)",
        "Light-blue": "hsl(206, 94%, 87%)",
        "Strawberry-red": "hsl(354, 84%, 57%)",
        "Cool-gray": "hsl(231, 11%, 63%)",
        "Light-gray": "hsl(229, 24%, 87%)",
        "Magnolia": "hsl(217, 100%, 97%)",
        "Alabaster": "hsl(231, 100%, 99%)",
      },
    },
  },
  plugins: [],
};
export default config;
