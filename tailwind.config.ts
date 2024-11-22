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
        blackPageHover: "#333",
        whitePage: "#FAFAFA",
        violet: "#0033A0",
        violetHover: "#1E57D1",
        skyblue: "#1E90FF",
        skyblueHover: "#146B9B",
        darkgray: "#6C757D",
        gray: "#8D8D8D",
        lightgray: "#D9D9D9",
        red: "#FF6F61",
        redHover: "#D55A50",
        green: "#34AE9A",
        greenHover: "#2A7F6B",
        greenTransparent: "#34AE9A1F",
        violetTransparent: "#0033A00D",
        lightgrayTransparent: "#D9D9D9A8",
        offWhite: "#F3F3F3",
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
