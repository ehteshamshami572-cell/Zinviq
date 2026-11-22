# Zinviq Corporate Platform — Technical Architecture & Roadmap
> **Aesthetic Philosophy**: "Zenith & Intelligence" | Clean Light Minimalist | Precision in Motion  
> **Color Strategy**: Crisp Pure White (`#FFFFFF`), Glacial Ice (`#F8FAFC`), Precision Cyan (`#00A3FF` / `#00D2FF`), High-Contrast Slate Ink (`#0F172A`).  
> **Strict Rule**: No dark mode backgrounds, no dark themes, and zero purple/violet tones.

---

## 1. Scalable Directory Structure (Next.js 14 App Router)

```text
zinviq/
├── public/
│   ├── brand/
│   │   ├── logo.svg              # Main vector logo
│   │   ├── logo-symbol.svg       # Geometric Z beacon mark
│   │   └── favicon.ico
│   ├── images/
│   │   ├── showcase/             # Case study hero renders
│   │   └── og-image.jpg          # 1200x630 light-theme OpenGraph preview
│   └── fonts/                    # Local optimized typography (if not using next/font)
├── src/
│   ├── app/
│   │   ├── (marketing)/
│   │   │   ├── page.tsx          # Homepage (Hero, Services, Showcase, Contact)
│   │   │   ├── about/page.tsx
│   │   │   ├── services/page.tsx
│   │   │   ├── work/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   └── contact/page.tsx
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts      # Contact form submission & rate limiting
│   │   ├── layout.tsx            # Global layout (Providers, Navbar, Footer, Metadata)
│   │   ├── not-found.tsx         # Custom 404
│   │   ├── error.tsx             # Error boundary
│   │   ├── robots.ts             # Dynamic robots.txt
│   │   └── sitemap.ts            # Dynamic sitemap.xml
│   ├── components/
│   │   ├── ui/                   # Reusable atomic design primitives
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── card.tsx
│   │   │   ├── modal.tsx
│   │   │   └── toast.tsx
│   │   ├── common/               # Layout & persistent UI elements
│   │   │   ├── navbar.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── container.tsx
│   │   │   ├── light-beam-grid.tsx # Minimalist light-theme interactive grid
│   │   │   └── section-header.tsx
│   │   └── sections/             # Modular landing page sections
│   │       ├── hero-section.tsx
│   │       ├── services-grid.tsx
│   │       ├── project-showcase.tsx
│   │       ├── precision-metrics.tsx
│   │       └── contact-section.tsx
│   ├── hooks/                    # Reusable React hooks
│   │   ├── use-api.ts            # Generic type-safe mutation/query hook
│   │   ├── use-contact-form.ts   # Form submission & state bridge
│   │   ├── use-mouse-glow.ts     # Mouse-tracking spotlight on light cards
│   │   └── use-reduced-motion.ts # Accessibility optimization
│   ├── store/                    # Redux Toolkit state management
│   │   ├── index.ts              # Store configuration
│   │   ├── hooks.ts              # Typed useSelector and useDispatch
│   │   ├── provider.tsx          # Client-side StoreProvider wrapper
│   │   └── slices/
│   │       ├── ui-slice.ts       # Modal states, mobile drawer, toast notices
│   │       └── showcase-slice.ts # Filter category, active project modal
│   ├── services/                 # External API integrations & network drivers
│   │   ├── mail-service.ts       # Resend / Nodemailer abstraction
│   │   └── analytics.ts          # Core Web Vitals & event tracking
│   ├── lib/
│   │   ├── utils.ts              # cn() tailwind-merge + clsx
│   │   ├── rate-limiter.ts       # In-memory / Upstash KV sliding window limiter
│   │   ├── validations/
│   │   │   └── contact-schema.ts # Zod schema definition for lead submissions
│   │   └── motion-variants.ts    # Reusable Framer Motion transitions
│   ├── types/                    # Enterprise TypeScript interfaces
│   │   ├── project.ts
│   │   ├── service.ts
│   │   ├── api.ts
│   │   └── contact.ts
│   └── constants/                # Static company data & navigation
│       ├── navigation.ts
│       ├── services-data.ts
│       └── projects-data.ts
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

---

## 2. Design System Tokens ("Zenith & Intelligence" — Light Mode Only)

```typescript
// tailwind.config.ts
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
        background: "#FFFFFF",
        surface: {
          50: "#F8FAFC",   // Ice white
          100: "#F1F5F9",  // Subtle card surface
          200: "#E2E8F0",  // Hairline borders
          300: "#CBD5E1",
        },
        brand: {
          cyan: "#00D2FF",       // Electric Cyan from the logo
          blue: "#00A3FF",       // Primary action & link color
          deepBlue: "#0066CC",   // High-contrast interactive hover
          glow: "rgba(0, 210, 255, 0.15)",
        },
        ink: {
          900: "#0F172A",  // Primary headings (Slate-900)
          700: "#334155",  // Body copy (Slate-700)
          500: "#64748B",  // Subtitles / metadata (Slate-500)
          400: "#94A3B8",  // Subtle labels
        }
      },
      boxShadow: {
        'zenith': '0 4px 20px -2px rgba(0, 163, 255, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'zenith-hover': '0 12px 32px -4px rgba(0, 163, 255, 0.16), 0 4px 12px -2px rgba(0, 0, 0, 0.04)',
        'cyan-glow': '0 0 25px -5px rgba(0, 210, 255, 0.35)',
      },
      backgroundImage: {
        'light-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        'cyan-radial': 'radial-gradient(circle at 50% 0%, rgba(0, 210, 255, 0.08) 0%, transparent 70%)',
      }
    },
  },
  plugins: [],
};

export default config;
```
