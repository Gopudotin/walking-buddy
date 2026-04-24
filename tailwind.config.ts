import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: "#C8F135",
        dark: "#0f1108",
        mid: "#1a1e0f",
        card: "#1f2412",
        "border-custom": "#2d3320",
        muted: "#6b7355",
        cream: "#f0f2e8",
        "orange-custom": "#FF6B35",
        "teal-custom": "#3DFFC0",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dm: ["var(--font-dm)", "sans-serif"],
      },
      keyframes: {
        bob: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulse_ring: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        countup: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        bob: "bob 3s ease-in-out infinite",
        "bob-slow": "bob 4s ease-in-out infinite 0.5s",
        "bob-slower": "bob 5s ease-in-out infinite 1s",
        "bob-slowest": "bob 3.5s ease-in-out infinite 1.5s",
        float: "float 4s ease-in-out infinite",
        "float-delay": "float 4s ease-in-out infinite 1s",
        "float-delay2": "float 4s ease-in-out infinite 2s",
        pulse_ring: "pulse_ring 2s ease-out infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
