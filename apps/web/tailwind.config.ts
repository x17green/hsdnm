import type { Config } from "tailwindcss"

/* ══════════════════════════════════════════════════════════════
   HSDNM Web — Tailwind Configuration
   
   NOTE: In Tailwind v4, primary theming is done via @theme in
   packages/theme/index.css. This file handles:
   - Content scanning paths
   - Legacy plugin compatibility
   - Any v3-style theme extensions still needed
   
   The @theme block in index.css is the source of truth for:
   green-*, gold-*, neutral-* color utilities
   font-sans, font-serif, font-mono
══════════════════════════════════════════════════════════════ */

const config: Config = {
  content: [
    "../../apps/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* Height utilities for specific brand component heights */
      height: {
        "13": "3.25rem",  /* 52px — lg button */
        "14": "3.5rem",   /* 56px — xl button, CTA */
      },
      /* Brand max content width */
      maxWidth: {
        content: "1280px",
      },
      /* Brand spacing extensions */
      spacing: {
        "13": "3.25rem",
        "18": "4.5rem",
        "22": "5.5rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
