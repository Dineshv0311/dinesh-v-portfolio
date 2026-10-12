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
        primary: {
          DEFAULT: "#6C63FF",
          hover: "#5a52e0",
          glow: "rgba(108, 99, 255, 0.4)",
        },
        accent: {
          DEFAULT: "#00D4FF",
          hover: "#00b8e6",
          glow: "rgba(0, 212, 255, 0.4)",
        },
        dark: {
          bg: "#0A0A0F",
          card: "rgba(18, 18, 28, 0.7)",
          cardHover: "rgba(28, 28, 44, 0.8)",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(108, 99, 255, 0.35)",
          text: "#F3F4F6",
          muted: "#94A3B8",
        },
        light: {
          bg: "#F8F9FF",
          card: "rgba(255, 255, 255, 0.85)",
          cardHover: "rgba(255, 255, 255, 0.95)",
          border: "rgba(108, 99, 255, 0.15)",
          borderHover: "rgba(108, 99, 255, 0.4)",
          text: "#1a1a2e",
          muted: "#64748B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        "neon-purple": "0 0 25px rgba(108, 99, 255, 0.45)",
        "neon-cyan": "0 0 25px rgba(0, 212, 255, 0.45)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glass-light": "0 8px 32px 0 rgba(108, 99, 255, 0.08)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #6C63FF 0%, #00D4FF 100%)",
        "purple-cyan": "linear-gradient(90deg, #6C63FF 0%, #00D4FF 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glow: {
          "0%": { filter: "drop-shadow(0 0 10px rgba(108, 99, 255, 0.4))" },
          "100%": { filter: "drop-shadow(0 0 22px rgba(0, 212, 255, 0.7))" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
