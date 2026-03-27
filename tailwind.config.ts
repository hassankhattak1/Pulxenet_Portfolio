import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['var(--font-bebas)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        heading: "#333333",
        subheading: "#025A61",
        paragraph: "#333333",
        primary: {
          light: "#037e88", 
          DEFAULT: "#025A61",
          dark: "#013a3f", 
        }
      },
    },
  },
  plugins: [],
};
export default config;
