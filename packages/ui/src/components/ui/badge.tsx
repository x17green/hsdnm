import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Surface as HeroSurface } from "@heroui/react"
import { cn } from "../../lib/utils"

/* ══════════════════════════════════════════════════════════════
   HSDNM Badge — Brand Guide 2025 compliant
   
   Radius spec: badges → 2px (brand spec = rounded-sm, NOT pill)
   
   Variants:
   default     → green-700 filled (national/status)
   green       → green-50 bg / green-700 text / green-200 border  (informational)
   gold        → gold-50 bg  / gold-700 text  / gold-200 border   (priority/accent)
   neutral     → neutral-100 / neutral-600    / neutral-200        (secondary)
   accent      → gold-500 filled / green-900 text                  (call-to-action)
   destructive → red states
   outline     → bare border
 ══════════════════════════════════════════════════════════════ */

const badgeVariants = cva(
  [
    "inline-flex items-center gap-1.5",
    "rounded-sm",         /* Brand spec: badges = 2px sharp radius */
    "px-2.5 py-0.5",
    "text-[10px] font-semibold uppercase tracking-[0.12em]",
    "font-sans",
    "transition-colors duration-150",
    "focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2",
  ].join(" "),
  {
    variants: {
      variant: {
        /* Filled brand primary */
        default:
          "border-transparent bg-green-700 text-white hover:bg-green-600",

        /* Green tint — informational, status active */
        green:
          "bg-green-50 text-green-700 border border-green-200 hover:bg-green-100",

        /* Gold tint — priority, member portal */
        gold:
          "bg-gold-50 text-gold-700 border border-gold-200 hover:bg-gold-100",

        /* Neutral — secondary, resources */
        neutral:
          "bg-neutral-100 text-neutral-600 border border-neutral-200 hover:bg-neutral-200",

        /* Filled accent — highest priority, CTA labels */
        accent:
          "border-transparent bg-gold-500 text-green-900 hover:bg-gold-400 font-black",

        /* Destructive */
        destructive:
          "border-transparent bg-red-50 text-red-700 border border-red-200",

        /* Bare outline */
        outline:
          "border border-neutral-300 text-foreground",
      },
    },
    defaultVariants: {
      variant: "green",
    },
  }
)

export interface BadgeProps
  extends Omit<React.ComponentProps<typeof HeroSurface>, "variant">,
    VariantProps<typeof badgeVariants> {}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <HeroSurface ref={ref} className={cn(badgeVariants({ variant }), className)} {...props} />
  )
)

export { badgeVariants }
