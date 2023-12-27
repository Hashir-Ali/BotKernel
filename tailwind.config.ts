import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        card1:
          "linear-gradient(0deg,rgba(32, 38, 44, 0.9) 0%,rgba(32, 38, 44, 0.9) 100%),url('/images/marketPlaceBG.jpg'), lightgray 0px -140.888px / 100% 174.033% no-repeat;",
      },
    },
  },
  plugins: [],
};
export default config;
