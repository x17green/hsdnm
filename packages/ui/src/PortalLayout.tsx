import * as React from "react"
import Link from "next/link"
import { Surface as HeroSurface } from "@heroui/react"
import { cn } from "./lib/utils"
import { Logo } from "./Layout"
import { getWebLink } from "./lib/links"

/* ══════════════════════════════════════════════════════════════
   HSDNM Portal Layout Components
   Brand Guide 2026 Compliant
══════════════════════════════════════════════════════════════ */

export const PortalHeader = ({
  className,
  mode = "public",
}: {
  className?: string
  mode?: "public" | "authenticated"
}) => {
  if (mode === "authenticated") {
    // Authenticated mode (Dashboard)
    // The dashboard has its own bespoke sidebar layout. This is a generic header fallback if needed.
    return (
      <HeroSurface
        className={cn(
          "sticky top-0 z-50 w-full",
          "bg-white border-b border-neutral-200",
          "px-6 py-4 flex items-center justify-between",
          className
        )}
      >
        <Link href="/dashboard" className="flex items-center gap-3">
          <Logo size="sm" mode="light" variant="seal" />
          <HeroSurface className="flex flex-col">
            <span className="font-serif font-black text-green-700 leading-none">HSDNM</span>
            <span className="text-3xs font-bold uppercase tracking-widest text-gold-600 mt-0.5">
              Member Portal
            </span>
          </HeroSurface>
        </Link>
      </HeroSurface>
    )
  }

  // Public mode (Registration/Login)
  return (
    <HeroSurface
      className={cn(
        "sticky top-0 z-50 w-full",
        "bg-white border-b border-neutral-200 shadow-sm",
        "px-6 sm:px-10 sm:py-4 md:px-16 h-16",
        "flex items-center justify-between",
        className
      )}
    >
      <Link href={getWebLink("/")} className="hover:opacity-90 transition-opacity flex items-center h-full">
        <Logo size="sm" mode="light" variant="wordmark" />
      </Link>
      <HeroSurface className="flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 px-3 py-1.5 rounded-sm">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <span className="text-xs font-bold uppercase tracking-15">
           Secure Portal
        </span>
      </HeroSurface>
    </HeroSurface>
  )
}

export const PortalFooter = ({
  className,
  mode = "public",
}: {
  className?: string
  mode?: "public" | "internal"
}) => {
  if (mode === "internal") {
    return (
      <HeroSurface
        className={cn(
          "w-full bg-green-900 border-t border-gold-500/30",
          "px-6 py-4 flex items-center justify-between",
          className
        )}
      >
        <HeroSurface className="flex items-center gap-3">
          <Logo size="sm" mode="dark" variant="wordmark" />
        </HeroSurface>
        <HeroSurface className="flex items-center gap-2">
          <span className="text-2xs font-medium text-white/50 uppercase tracking-widest">
            Secure Platform · 2026 · Federal Republic of Nigeria
          </span>
        </HeroSurface>
      </HeroSurface>
    )
  }

  return (
    <HeroSurface
      className={cn(
        "w-full py-6 mt-12 border-t border-neutral-200 bg-transparent",
        "flex flex-col md:flex-row items-center justify-between gap-4",
        className
      )}
    >
      <HeroSurface className="flex items-center gap-3 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all bg-transparent">
        <Logo size="xs" mode="light" variant="seal" />
        <span className="font-serif font-black text-green-900 text-sm">HSDNM</span>
      </HeroSurface>
      
      <HeroSurface className="flex flex-col items-center md:items-end gap-1 bg-transparent">
        <HeroSurface className="text-xs text-neutral-500 bg-transparent">
          © 2026 Sen. Henry Seriake Dickson National Movement
        </HeroSurface>
        <HeroSurface className="text-2xs font-semibold uppercase tracking-15 text-neutral-400 bg-transparent">
          Membership Platform · Federal Republic of Nigeria
        </HeroSurface>
      </HeroSurface>
    </HeroSurface>
  )
}
