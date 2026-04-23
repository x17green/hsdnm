import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "./lib/utils"

/* ══════════════════════════════════════════════════════════════
   HSDNM Typography System — Brand Guide 2025 compliant

   Type Scale (brand spec):
   display-1  Playfair Black 900 / ~4rem  / leading-110  (hero display)
   display-2  Playfair Black 900 / ~3rem  / leading-115
   h1         Playfair Bold  700 / 2.25rem / leading-125
   h2         Playfair Bold  700 / 1.75rem / leading-130
   h3         DM Sans SemiBold 600 / 1.25rem / leading-140   ← NOT Playfair
   h4         DM Sans SemiBold 600 / 1.1rem  / leading-140
   h5         DM Sans SemiBold 600 / 1rem    / leading-150
   h6         DM Sans SemiBold 600 / 0.875rem / leading-150

   Body:
   lead       DM Sans 400 / 1.125rem / leading-175
   body       DM Sans 400 / 1rem     / leading-170
   small      DM Sans 400 / 0.875rem / leading-160
   xs         DM Sans 600 / 0.7rem   / uppercase / tracking-180  (labels)
   mono       DM Mono 400 / 0.85rem  (code, reference numbers)
══════════════════════════════════════════════════════════════ */

const headingVariants = cva(
  "tracking-tight transition-colors duration-300",
  {
    variants: {
      level: {
        /* Display Sizes — For Heros and Major Section Heads */
        "display-1": "font-serif font-black text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1]",
        "display-2": "font-serif font-black text-3xl md:text-4xl               leading-[1.15]",
        /* Heading Scale — Brand Guide Spec (§ Typography) */
        1: "font-serif font-bold text-2xl md:text-[2rem]    leading-[1.25]",
        2: "font-serif font-bold text-xl   md:text-[1.5rem]  leading-[1.3]",
        3: "font-sans  font-bold text-lg   md:text-[1.15rem] leading-[1.4]",
        4: "font-sans  font-bold text-base md:text-[1.1rem]  leading-[1.4]",
        5: "font-sans  font-bold text-sm   md:text-[1rem]    leading-[1.5]",
        6: "font-sans  font-bold text-xs   md:text-[0.875rem] leading-[1.5]",
      },
      mode: {
        primary: "text-green-900",
        accent:  "text-gold-600",
        white:   "text-white",
        default: "text-foreground",
        muted:   "text-neutral-500",
      },
      shadow: {
        none:  "",
        sm:    "drop-shadow-sm",
        brand: "drop-shadow-[0_4px_12px_rgba(0,77,61,0.15)]",
        gold:  "drop-shadow-[0_4px_12px_rgba(201,162,39,0.20)]",
      },
    },
    defaultVariants: {
      level:  2,
      mode:   "primary",
      shadow: "none",
    },
  }
)

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  children: React.ReactNode
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span"
}

export const Heading = ({
  className,
  level = 2,
  mode,
  shadow,
  children,
  as,
  ...props
}: HeadingProps) => {
  const Component = as || (level === "display-1" || level === "display-2" ? "h1" : `h${level}`) as any

  return (
    <Component
      className={cn(headingVariants({ level, mode, shadow }), className)}
      {...props}
    >
      {children}
    </Component>
  )
}

/* ─── Text ─────────────────────────────────────────────────── */
const textVariants = cva(
  "font-sans transition-opacity duration-300",
  {
    variants: {
      variant: {
        /* Body scale */
        lead:  "text-lg md:text-[1.125rem] text-foreground/90 font-normal leading-relaxed",
        body:  "text-base text-foreground/80 font-normal leading-relaxed",
        small: "text-sm  text-foreground/70 font-normal leading-normal",
        /* Label — all-caps micro-text for kickers and section labels */
        xs:    "text-[0.7rem] font-semibold uppercase tracking-18 leading-tight",
        /* Mono — for Member IDs, OTPs, and reference data */
        mono:  "font-mono text-[0.85rem] tracking-tight leading-none",
      },
      mode: {
        default: "text-foreground",
        muted:   "text-neutral-500",
        white:   "text-white/90",
        accent:  "text-gold-600",
        brand:   "text-green-700",
      },
    },
    defaultVariants: {
      variant: "body",
      mode:    "default",
    },
  }
)

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  children: React.ReactNode
}

export const Text = ({ className, variant, mode, children, ...props }: TextProps) => (
  <p className={cn(textVariants({ variant, mode }), className)} {...props}>
    {children}
  </p>
)

/* ─── Kicker / Section Label ────────────────────────────────
   Used above headings as uppercase gold category labels.
   Example: "• National Movement • Est. 2024"
─────────────────────────────────────────────────────────────── */
export const Kicker = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={cn(
      "inline-flex items-center gap-3",
      "text-2xs font-semibold uppercase tracking-30",
      "text-gold-600 font-sans",
      className
    )}
    {...props}
  >
    <span className="h-px w-8 bg-gold-500/50 shrink-0">{null}</span>
    {children}
  </span>
)

/* ─── Brand Badge Label ──────────────────────────────────────
   Inline pill for hero sections and kickers. Gold/Green variants.
─────────────────────────────────────────────────────────────── */
export const BrandBadge = ({
  className,
  variant = "green",
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "green" | "gold" | "white"
}) => (
  <span
    className={cn(
      "inline-flex items-center gap-2 px-3 py-1.5 rounded-sm",
      "text-2xs font-semibold uppercase tracking-20",
      variant === "green" && "bg-green-50 text-green-700 border border-green-200",
      variant === "gold"  && "bg-gold-50  text-gold-700  border border-gold-200",
      variant === "white" && "bg-white/10 text-white/85  border border-white/20",
      className
    )}
    {...props}
  >
    <span className="size-1.5 rounded-full bg-current opacity-70 shrink-0">{null}</span>
    {children}
  </span>
)
