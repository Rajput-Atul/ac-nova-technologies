import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
        accent: {
          blue: "#3b82f6",
          purple: "#8b5cf6",
          teal: "#14b8a6",
          rose: "#f43f5e",
          amber: "#f59e0b",
          emerald: "#10b981",
        },
      },
      fontFamily: {
        sans: ["Geist Sans", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
      },
      boxShadow: {
        card: "0 20px 40px rgba(0,0,0,0.08)",
        button: "0 4px 20px rgba(79,70,229,0.25)",
        cta: "0 0 40px rgba(79,70,229,0.15)",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
      },
    },
  },
  plugins: [],
};
export default config;