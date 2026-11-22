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
        background: "#050814", // Deep Midnight Obsidian from the logo
        surface: {
          50: "#080E21",
          100: "#0D162F",  // Primary card surface
          200: "#132145",  // Border highlight
          300: "#1E3264",
        },
        brand: {
          cyan: "#00F0FF",       // Electric Neon Cyan from Zinviq logo beacon
          cyanLight: "#67E8F9",
          blue: "#0070F3",       // Royal Azure precision blue
          deepBlue: "#0052CC",
          glow: "rgba(0, 240, 255, 0.25)",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#CBD5E1",  // Slate-300 for high readability
          muted: "#94A3B8",      // Slate-400
        },
      },
      boxShadow: {
        'cyan-glow': '0 0 35px -5px rgba(0, 240, 255, 0.35)',
        'cyan-glow-sm': '0 0 15px -3px rgba(0, 240, 255, 0.3)',
        'blue-glow': '0 0 40px -10px rgba(0, 112, 243, 0.4)',
        'card-glow': '0 10px 30px -10px rgba(0, 240, 255, 0.12), 0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'cyan-radial': 'radial-gradient(circle at 50% 0%, rgba(0, 240, 255, 0.15) 0%, rgba(0, 112, 243, 0.05) 50%, transparent 80%)',
        'card-gradient': 'linear-gradient(180deg, rgba(13, 22, 47, 0.8) 0%, rgba(8, 14, 33, 0.95) 100%)',
      }
    },
  },
  plugins: [],
};

export default config;
