import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Surface as HeroSurface } from "@heroui/react"
import { cn } from "./lib/utils"
import { Heading, Text } from "./Typography"

/* ══════════════════════════════════════════════════════════════
   HSDNM Layout Primitives — Brand Guide 2026 compliant
   Header: Green-900 bg (#001a14) · 3px Gold bottom border
   Footer: Green-900 bg (#001a14) · 2px Gold top border
   No frosted glass. No off-brand surfaces. Solid authority.
══════════════════════════════════════════════════════════════ */

export const Logo = ({
  className,
  size = "md",
  mode = "dark",
  variant = "seal",
}: {
  className?: string
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  mode?: "dark" | "light"
  variant?: "seal" | "wordmark" | "full"
}) => {
  const dims = {
    xs: { w: 24, h: 24 },
    sm: { w: 32, h: 32 },
    md: { w: 44, h: 44 },
    lg: { w: 64, h: 64 },
    xl: { w: 160, h: 160 },
  }[size]

  return (
    <div className={cn("flex items-center gap-3 shrink-0 group", className)}>
      <Image
        src="/Logo.PNG"
        alt="HSDNM Logo"
        width={dims.w}
        height={dims.h}
        priority={size === "md" || size === "lg"}
        style={{ width: dims.w, height: dims.h, objectFit: "contain" }}
        className="transition-transform duration-500 group-hover:scale-105"
      />
      {variant !== "seal" && (
        <div className="flex flex-col leading-none">
          {variant === "full" && (
            <div className={cn("font-semibold uppercase tracking-16 -mb-1", mode === "dark" ? "text-green-300" : "text-green-700", size === "lg" ? "text-xs" : "text-3xs")}>
              Sen.
            </div>
          )}
          <div
            className={cn(
              "font-serif font-black tracking-tight leading-none -mb-1",
              mode === "dark" ? "text-white" : "text-green-700",
              size === "sm" && "text-sm",
              size === "md" && "text-base",
              size === "lg" && "text-xl",
              size === "xl" && "text-3xl"
            )}
          >
            {variant === "full" ? (
              <>
                <div className="-mb-2">HENRY <br /></div> SERIAKE <span className="text-gold-500">DICKSON</span>
              </>
            ) : (
              "HSDNM"
            )}
          </div>
          <div
            className={cn(
              "font-sans font-semibold tracking-20 uppercase mt-0.5",
              mode === "dark" ? "text-gold-400" : "text-green-700",
              size === "sm" && "text-4xs",
              size === "md" && "text-3xs",
              size === "lg" && "text-2xs",
              size === "xl" && "text-xs"
            )}
          >
            National Movement
          </div>
        </div>
      )}
    </div>
  )
}

/* ─── Global Header ───────────────────────────────────────────
   Spec: Green-900 bg · Gold 3px bottom border · 72px desktop
   Solid — no backdrop blur (institutional authority requires solid header)
─────────────────────────────────────────────────────────────── */
export const Header = ({
  className,
  children,
  variant = "wordmark",
  logoSize = "md",
}: {
  className?: string
  children?: React.ReactNode
  variant?: "seal" | "wordmark" | "full"
  logoSize?: "xs" | "sm" | "md" | "lg" | "xl"
}) => (
  <HeroSurface
    className={cn(
      "sticky top-0 z-50 w-full",
      "bg-green-900 border-b-[3px] border-gold-500",
      "px-6 sm:px-10 py-4",
      "flex items-center justify-between",
      className
    )}
  >
    <Link href="/" className="hover:opacity-90 transition-opacity">
      <Logo size={logoSize} mode="dark" variant={variant} />
    </Link>
    <div className="hidden md:flex items-center gap-8">{children}</div>
    {/* Mobile: consuming apps integrate HeroUI Drawer here */}
    <div className="md:hidden">{null}</div>
  </HeroSurface>
)

/* ─── Global Footer ───────────────────────────────────────────
   Spec: Green-900 bg · Gold 2px top border · 4-col desktop grid
   Text: white/60 on dark. Headings: gold-400 uppercase labels.
─────────────────────────────────────────────────────────────── */
export const Footer = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => (
  <HeroSurface
    className={cn(
      "mt-auto w-full",
      "bg-green-900 border-t-[2px] border-gold-500",
      "px-6 sm:px-12 py-20 lg:py-28",
      className
    )}
  >
    <div className="container mx-auto max-w-7xl">
      {/* Main grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        {/* Brand column */}
        <div className="flex flex-col gap-6 items-start">
          <Logo size="lg" mode="dark" variant="seal" />
          <Text
            variant="small"
            className="max-w-xs text-white/55 leading-relaxed"
          >
            The Sen. Henry Seriake Dickson National Movement is dedicated to
            national restoration, grassroots empowerment, and accountable
            governance across all 774 LGAs of Nigeria.
          </Text>
          {/* Gold rule accent */}
          <div className="h-px w-16 bg-gold-500/40">{null}</div>
        </div>
        {/* Nav column slots — passed as children from consuming pages */}
        {children}
      </div>

      {/* Bottom bar */}
      <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <Text variant="xs" className="text-white/35 normal-case tracking-normal">
            © 2026 Sen. Henry Seriake Dickson National Movement. All rights reserved.
          </Text>
          <Text variant="xs" className="text-white/20 normal-case tracking-normal">
            Sen. Henry Seriake Dickson National Movement · Federal Republic of Nigeria
          </Text>
        </div>
        <div className="flex gap-2 items-center">
          <div className="text-3xs font-mono font-medium text-white/25 uppercase tracking-widest">
            Powered by institutional digital infrastructure
          </div>
        </div>
      </div>
    </div>
  </HeroSurface>
)

/* ─── Dashboard Sidebar ─────────────────────────────────────── */
export const Sidebar = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => (
  <HeroSurface
    className={cn(
      "hidden md:flex w-72 flex-col",
      "border-r border-neutral-200 bg-white",
      "shrink-0",
      className
    )}
  >
    {children}
  </HeroSurface>
)

/* ─── Container ──────────────────────────────────────────────
   Max content width: 1280px per brand guide grid spec
─────────────────────────────────────────────────────────────── */
export const Container = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => (
  <HeroSurface className={cn("container mx-auto px-4 md:px-6", className)}>
    {children}
  </HeroSurface>
)

/* ─── Surface ────────────────────────────────────────────────
   The base institutional box / container. 
   Replaces raw <div> for all general layout needs.
─────────────────────────────────────────────────────────────── */
export interface SurfaceProps extends React.ComponentProps<typeof HeroSurface> {}
export const Surface = React.forwardRef<HTMLDivElement, SurfaceProps>(
  ({ className, ...props }, ref) => (
    <HeroSurface ref={ref} className={cn("", className)} {...props} />
  )
)
Surface.displayName = "Surface"

/* ─── Flex ───────────────────────────────────────────────────
   Institutional Flexbox primitive.
─────────────────────────────────────────────────────────────── */
export type ResponsiveValue<T> = T | { sm?: T; md?: T; lg?: T; xl?: T }

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: ResponsiveValue<"row" | "col" | "row-reverse" | "col-reverse">
  align?: ResponsiveValue<"start" | "center" | "end" | "baseline" | "stretch">
  justify?: ResponsiveValue<"start" | "center" | "end" | "between" | "around" | "evenly">
  gap?: "xs" | "sm" | "md" | "lg" | "xl" | "none"
  wrap?: boolean
}

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ className, direction = "row", align = "start", justify = "start", gap = "none", wrap = false, ...props }, ref) => {
    const gapMap = {
      none: "gap-0",
      xs: "gap-2",
      sm: "gap-4",
      md: "gap-4 md:gap-6",
      lg: "gap-8 md:gap-12",
      xl: "gap-12 md:gap-24",
    }
    
    const resolveResponsive = (prefix: string, value: any) => {
      if (typeof value === "string") return `${prefix}${value}`
      return [
        value.sm && `sm:${prefix}${value.sm}`,
        value.md && `md:${prefix}${value.md}`,
        value.lg && `lg:${prefix}${value.lg}`,
        value.xl && `xl:${prefix}${value.xl}`,
      ].filter(Boolean).join(" ")
    }

    const directionClasses = resolveResponsive("flex-", direction === "col" ? "col" : direction)
    const alignClasses = resolveResponsive("items-", align)
    const justifyClasses = resolveResponsive("justify-", justify === "between" ? "between" : justify === "around" ? "around" : justify === "evenly" ? "evenly" : justify)

    return (
      <div 
        ref={ref}
        className={cn(
          "flex",
          directionClasses.replace("flex-row-reverse", "flex-row-reverse").replace("flex-col-reverse", "flex-col-reverse"),
          alignClasses.replace("items-start", "items-start"),
          justifyClasses.replace("justify-start", "justify-start"),
          wrap && "flex-wrap",
          gapMap[gap],
          className
        )}
        {...props}
      />
    )
  }
)
Flex.displayName = "Flex"

/* ─── Grid ───────────────────────────────────────────────────
   Institutional Grid primitive.
─────────────────────────────────────────────────────────────── */
export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: number | { sm?: number; md?: number; lg?: number; xl?: number }
  gap?: "xs" | "sm" | "md" | "lg" | "xl" | "none"
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 1, gap = "md", ...props }, ref) => {
    const gapMap = {
      none: "gap-0",
      xs: "gap-2",
      sm: "gap-4",
      md: "gap-4 md:gap-6",
      lg: "gap-8 md:gap-12",
      xl: "gap-12 md:gap-24",
    }

    const colClasses = typeof cols === "number" 
      ? `grid-cols-${cols}` 
      : [
          cols.sm && `sm:grid-cols-${cols.sm}`,
          cols.md && `md:grid-cols-${cols.md}`,
          cols.lg && `lg:grid-cols-${cols.lg}`,
          cols.xl && `xl:grid-cols-${cols.xl}`,
        ].filter(Boolean).join(" ")

    return (
      <div 
        ref={ref}
        className={cn(
          "grid",
          colClasses || "grid-cols-1",
          gapMap[gap],
          className
        )}
        {...props}
      />
    )
  }
)
Grid.displayName = "Grid"
