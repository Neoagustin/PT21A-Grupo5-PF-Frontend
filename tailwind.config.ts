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
        blackPage: "#222222",
        whitePage: "#FAFAFA",
        violet: "#A435F0",
        skyblue: "#1E90FF",
        darkgray: "#6C757D",
        gray: "#8D8D8D",
        lightgray: "#D9D9D9",
        red: "#FF6F61",
        green: "#34AE9A",
        greenTransparent: "#34AE9A1F",
        violetTransparent: "#A435F01F",
        lightgrayTransparent: "#D9D9D9A8",
        violetHover: "#8E2BC7",
      },
      fontFamily: {
        inknutAntiqua: ["InknutAntiqua", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;