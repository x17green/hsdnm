"use client"

import * as React from "react"
import { Button as HeroButton, type ButtonProps as HeroButtonProps } from "@heroui/react"
import { cn } from "../../lib/utils"

/* ══════════════════════════════════════════════════════════════
   HSDNM Button — HeroUI v3 Beta Implementation
   Preserves Brand Guide 2026 variants while leveraging HeroUI logic.
   
   Radius spec (brand guide section 4.3): 2px (sharp)
══════════════════════════════════════════════════════════════ */

export interface ButtonProps extends Omit<HeroButtonProps, "variant"> {
  variant?: "primary" | "accent" | "outline" | "outline-dark" | "ghost" | "link" | "danger"
  as?: React.ElementType
  [key: string]: any // Allow extra props for polymorphic components (like href for Links)
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    
    // Map HSDNM variants to HeroUI variants + custom class logic
    const variantMap: Record<string, any> = {
      primary:      { v: "primary", c: "bg-green-700 text-white shadow-brand hover:bg-green-600 active:scale-95 transition-all" },
      accent:       { v: "primary", c: "bg-gold-500 text-green-900 shadow-gold hover:bg-gold-400 active:scale-95 transition-all font-black" },
      outline:      { v: "outline", c: "border-2 border-green-700 text-green-700 hover:bg-green-50 active:scale-95" },
      "outline-dark": { v: "outline", c: "border-2 border-white/50 text-white hover:bg-white/10 active:scale-95" },
      ghost:        { v: "ghost",   c: "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 border border-neutral-200" },
      danger:       { v: "danger",  c: "" },
      link:         { v: "ghost",   c: "text-green-700 hover:underline px-0 min-w-0 h-auto" }
    }

    const { v, c } = variantMap[variant] || { v: "solid", c: "" }

    const combinedClassName = cn(
      "rounded-sm font-sans font-bold uppercase tracking-10",
      c,
      className
    )

    if (props.as) {
      const { as: Component, ...rest } = props
      return (
        <HeroButton
          ref={ref}
          variant={v as any}
          size={size}
          className={combinedClassName}
          render={(renderProps) => <Component {...renderProps} {...rest} />}
        />
      )
    }

    return (
      <HeroButton
        ref={ref}
        variant={v as any}
        size={size}
        className={combinedClassName}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button }
