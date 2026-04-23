import type { Metadata } from "next"
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google"
import { Providers } from "./providers"
import "./globals.css"

/* ══════════════════════════════════════════════════════════════
   Font Loading — Brand Guide 2025
   ✅ Playfair Display — Headlines, H1/H2, display text
   ✅ DM Sans          — Body, UI, H3+, labels
   ✅ DM Mono          — Code, reference numbers (e.g. NIN display)
   ✗ Inter             — REMOVED. Brand guide: "Never mix in a third face."
══════════════════════════════════════════════════════════════ */

const playfair = Playfair_Display({
  subsets:  ["latin"],
  variable: "--font-serif",
  weight:   ["700", "900"],
  display:  "swap",
})

const dmSans = DM_Sans({
  subsets:  ["latin"],
  variable: "--font-sans",
  weight:   ["300", "400", "500", "600", "700"],
  display:  "swap",
})

const dmMono = DM_Mono({
  subsets:  ["latin"],
  variable: "--font-mono",
  weight:   ["400", "500"],
  display:  "swap",
})

export const metadata: Metadata = {
  title:       "HSD National Movement | Building Nigeria's Future",
  description:
    "The Sen. Henry Seriake Dickson National Movement — mobilizing Nigerians from every ward and LGA toward a future of strong institutions, accountable leadership, and shared prosperity.",
  keywords:    ["HSDNM", "Henry Seriake Dickson", "Nigeria", "National Movement", "grassroots", "political movement"],
  openGraph: {
    title:       "HSD National Movement",
    description: "Mobilizing Nigerians toward a future of strong institutions and accountable governance.",
    type:        "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-background text-foreground">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
