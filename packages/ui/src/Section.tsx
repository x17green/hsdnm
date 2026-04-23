import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Surface as HeroSurface } from "@heroui/react"
import { cn } from "./lib/utils"
import { Container } from "./Layout"

/* ══════════════════════════════════════════════════════════════
   HSDNM Section Primitives — Brand Guide 2025 compliant
   
   60-30-10 surface map:
   default   → White (#ffffff)         — 60% surface layer
   muted     → Stone-50 (#F8F9FA)      — 60% alt surface
   primary   → Deep Green (#004d3d)    — 30% brand layer
   hero      → Forest→Green gradient   — 30% brand hero
   accent    → Green-50 tint           — brand tint band

   Section padding spec:
   Desktop: 96px top/bottom (py-24)
   Mobile:  48px top/bottom (py-12)
   Hero:    80px top (pt-20), 96px bottom (pb-24)
══════════════════════════════════════════════════════════════ */

const sectionVariants = cva(
  "relative w-full overflow-hidden transition-colors duration-300",
  {
    variants: {
      variant: {
        /* 60% surface — white page body */
        default: "bg-background py-12 md:py-24",

        /* 60% alt surface — subtle section separator */
        muted: "bg-neutral-50 py-12 md:py-24",

        /* 30% brand — deep green filled section */
        primary: "bg-green-700 text-white py-12 md:py-24",

        /* 30% brand hero — Forest Black → Deep Green gradient */
        hero: [
          "bg-[linear-gradient(135deg,#001a14_0%,#004d3d_100%)]",
          "text-white",
          "pt-20 pb-28 lg:pt-24 lg:pb-36",
        ].join(" "),

        /* Brand tint band — Green-50 accent separator */
        accent: "bg-green-50 border-y border-green-200 py-20 md:py-24",
      },
      spacing: {
        none: "py-0",
        sm: "py-8 md:py-12",
        md: "py-12 md:py-24", // 48px mobile, 96px desktop per brand guide
        lg: "py-24 md:py-32",
      },
    },
    defaultVariants: {
      variant: "default",
      spacing:  "md",
    },
  }
)

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  containerSize?: "sm" | "md" | "lg" | "xl" | "full"
}

export const Section = ({
  className,
  variant,
  spacing,
  containerSize = "xl",
  children,
  ...props
}: SectionProps) => (
  <HeroSurface className={cn(sectionVariants({ variant, spacing }), className)} {...props}>
    {containerSize === "full" ? (
      children
    ) : (
      <Container
        className={cn(
          containerSize === "sm" && "max-w-3xl",
          containerSize === "md" && "max-w-5xl",
          containerSize === "lg" && "max-w-6xl",
          containerSize === "xl" && "max-w-7xl"
        )}
      >
        {children}
      </Container>
    )}
  </HeroSurface>
)

/* ─── Stack ─────────────────────────────────────────────────── */
const stackVariants = cva("flex flex-col", {
  variants: {
    gap: {
      none: "gap-0",
      xs: "gap-2",
      sm: "gap-4",
      md: "gap-4 md:gap-6", // 16px mobile, 24px desktop institutional gutter
      lg: "gap-8 md:gap-12",
      xl: "gap-12 md:gap-24",
    },
    align: {
      start:  "items-start",
      center: "items-center",
      end:    "items-end",
    },
  },
  defaultVariants: {
    gap:   "md",
    align: "start",
  },
})

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariants> {}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, gap, align, ...props }, ref) => (
    <div ref={ref} className={cn(stackVariants({ gap, align }), className)} {...props} />
  )
)
Stack.displayName = "Stack"
