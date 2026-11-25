import type { Config } from "tailwindcss";

/**
 * Zinviq design system — "Midnight Signal"
 * Navy foundation, white typography and hot-pink accent.
 * All colors resolve to CSS variables in src/app/globals.css.
 */
const hsl = (variable: string) => `hsl(var(${variable}) / <alpha-value>)`;

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        border: hsl("--border"),
        input: hsl("--input"),
        ring: hsl("--ring"),
        background: hsl("--background"),
        foreground: hsl("--foreground"),

        primary: {
          DEFAULT: hsl("--primary"),
          foreground: hsl("--primary-foreground"),
        },
        secondary: {
          DEFAULT: hsl("--secondary"),
          foreground: hsl("--secondary-foreground"),
        },
        destructive: {
          DEFAULT: hsl("--destructive"),
          foreground: hsl("--destructive-foreground"),
        },
        muted: {
          DEFAULT: hsl("--muted"),
          foreground: hsl("--muted-foreground"),
        },
        accent: {
          DEFAULT: hsl("--accent"),
          foreground: hsl("--accent-foreground"),
        },
        popover: {
          DEFAULT: hsl("--popover"),
          foreground: hsl("--popover-foreground"),
        },
        card: {
          DEFAULT: hsl("--card"),
          foreground: hsl("--card-foreground"),
        },

        navy: {
          950: hsl("--navy-950"),
          900: hsl("--navy-900"),
          800: hsl("--navy-800"),
          700: hsl("--navy-700"),
          600: hsl("--navy-600"),
        },
        pink: {
          100: hsl("--pink-100"),
          200: hsl("--pink-200"),
          300: hsl("--pink-300"),
          400: hsl("--pink-400"),
          500: hsl("--pink-500"),
          600: hsl("--pink-600"),
          700: hsl("--pink-700"),
        },
        brand: hsl("--pink-500"),
        lavender: hsl("--pink-200"),
        ink: hsl("--navy-950"),
        footer: hsl("--navy-950"),
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "pink-glow": "0 0 35px -5px hsl(var(--pink-500) / 0.45)",
        "pink-glow-sm": "0 0 15px -3px hsl(var(--pink-500) / 0.4)",
        "deep-glow": "0 0 45px -12px hsl(var(--pink-600) / 0.55)",
        "card-glow":
          "0 18px 45px -18px hsl(var(--navy-950) / 0.95), 0 0 30px -15px hsl(var(--pink-500) / 0.4)",
      },
      dropShadow: {
        "pink-glow": "0 0 12px hsl(var(--pink-500) / 0.45)",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-down": {
          from: { opacity: "0", transform: "translateY(-6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
        "fade-in-up": "fade-in-up 0.2s ease-out",
        "slide-down": "slide-down 0.2s ease-out",
      },
      backgroundImage: {
        "pink-radial":
          "radial-gradient(circle at 50% 0%, hsl(var(--pink-500) / 0.2) 0%, hsl(var(--pink-700) / 0.08) 45%, transparent 80%)",
        "card-gradient":
          "linear-gradient(180deg, hsl(var(--navy-900) / 0.9) 0%, hsl(var(--navy-950) / 0.96) 100%)",
        "signal-flow":
          "linear-gradient(100deg, hsl(var(--pink-600)) 0%, hsl(var(--pink-500)) 55%, hsl(var(--pink-300)) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
