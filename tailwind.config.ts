import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-archivo)", "sans-serif"],
        body: ["var(--font-hanken)", "sans-serif"],
        accent: ["var(--font-instrument)", "serif"],
      },
      colors: {
        ink: "#0a0a0a",
        bg: "#0b0b0c",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
