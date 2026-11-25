# Zinviq Corporate Platform — Technical Architecture & Roadmap
> **Aesthetic Philosophy**: "Midnight Signal" | Premium navy corporate | Precision in Motion  
> **Color Strategy**: Navy foundation (`#08142E` / `#0D1D3D`), white headings and body text, hot-pink accent (`#FF2D8D` / `#FF4FA3`).  
> **Strict Rule**: Navy, white and hot pink are the brand palette. Cyan/blue and purple accents are deprecated.

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
│   │   ├── og-image.svg          # Source artwork
│   │   └── og-image.png          # 1200x630 raster OpenGraph preview
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
│   ├── components/ui/toast.tsx   # Lightweight toast context + viewport
│   ├── services/                 # External API integrations & network drivers
│   │   ├── mail-service.ts       # Resend / Nodemailer abstraction
│   │   └── analytics.ts          # Core Web Vitals & event tracking
│   ├── lib/
│   │   ├── utils.ts              # cn() tailwind-merge + clsx
│   │   ├── rate-limiter.ts       # Upstash-backed sliding window (dev-only memory fallback)
│   │   ├── validations/
│   │   │   └── contact-schema.ts # Zod schema definition for lead submissions
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
├── next.config.mjs
└── package.json
```

---

## 2. Design System Tokens ("Midnight Signal" — Navy / White / Hot Pink)

The canonical tokens live in `src/app/globals.css` as HSL CSS variables, and Tailwind maps to them via `hsl(var(--token) / <alpha-value>)`.

```css
/* globals.css (excerpt) */
--navy-950: 222 62% 5%;   /* page background */
--navy-900: 222 55% 9%;   /* card / section surface */
--navy-800: 222 48% 13%;
--navy-700: 222 40% 19%;  /* borders */

--pink-300: 330 100% 77%;
--pink-400: 330 100% 66%; /* accent text / hover */
--pink-500: 330 100% 58%; /* primary CTA */
--pink-600: 330 92% 48%;
--pink-700: 330 86% 39%;  /* high-contrast CTA background */

--background: var(--navy-950);
--foreground: 0 0% 100%;
--primary: var(--pink-500);
--ring: var(--pink-400);
```

UI primitives follow shadcn/ui conventions in `src/components/ui` (`button`, `badge`, `card`, `input`, `textarea`, `select`, `label`, `accordion`). Do not reintroduce cyan/blue, purple or light-mode surfaces.

---

## 3. Runtime & Security Conventions

- Above-the-fold content is server-rendered without Framer Motion. The LCP headline must render at full opacity in the initial HTML.
- `next/font` supplies `--font-inter`; `--font-mono` is a local system stack. Do not hash another webfont into the global bundle.
- Redux Toolkit, React Redux and Framer Motion are removed. Local `useState` handles navigation/filter state; `ToastProvider` handles transient notices.
- `SpotlightCard` uses a CSS hover gradient only: no pointer listeners, `getBoundingClientRect` or per-pixel state updates.
- Production contact submissions require `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`. In-memory rate limiting is dev-only.
- Netlify security/cache headers live in `netlify.toml`; `vercel.json` is only relevant if the site is deployed to Vercel.
- Canonical URLs follow `NEXT_PUBLIC_SITE_URL`. The source fallback is `https://zinviq.netlify.app` until the custom domain resolves.
