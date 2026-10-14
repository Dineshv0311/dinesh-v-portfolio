import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cobalt: {
          DEFAULT: "#0022FF",
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#93A5FD",
          400: "#506EF9",
          500: "#0022FF",
          600: "#001BD6",
          700: "#0015A8",
          800: "#001080",
          900: "#000B57",
          aura: "#0A21C0",
          deep: "#050814",
        },
        obsidian: {
          DEFAULT: "#07070A",
          surface: "#0D0E12",
          card: "#12131A",
          border: "rgba(255, 255, 255, 0.1)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["var(--font-jetbrains)", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
