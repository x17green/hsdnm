import type { Metadata } from "next"
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"
import { Providers } from "./providers"

/* ══════════════════════════════════════════════════════════════
   Font Loading — Brand Guide 2025
   ✅ Playfair Display — Headlines, display text
   ✅ DM Sans          — Body, UI, labels, inputs
   ✅ DM Mono          — NIN entry, reference numbers, code
   ✗ Inter             — REMOVED. Brand: "Never mix in a third face."
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
  title:       "HSDNM Member Portal | Institutional Membership",
  description:
    "Secure membership portal for the Sen. Henry Seriake Dickson National Movement. Verify your identity and join the movement.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        <Providers>
          {children}
        </Providers>
        <Toaster
          position="top-center"
          richColors
          toastOptions={{
            style: {
              fontFamily: "var(--font-sans)",
              borderRadius: "2px",
            },
          }}
        />
      </body>
    </html>
  )
}

