import { Card as HeroCard, Surface as HeroSurface } from "@heroui/react"
import { cn } from "../../lib/utils"
import * as React from "react"
/* ══════════════════════════════════════════════════════════════
   HSDNM Card — HeroUI v3 Beta Wrapper
   Radius spec (brand guide section 4.3): 8px
   Anatomy: Card.Header, Card.Title, Card.Description, Card.Content, Card.Footer
══════════════════════════════════════════════════════════════ */

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  accent?: "green" | "gold" | "none"
}

interface CardComponent extends React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>> {
  Header: typeof HeroCard.Header
  Title: typeof HeroCard.Title
  Description: typeof HeroCard.Description
  Content: typeof HeroCard.Content
  Footer: typeof HeroCard.Footer
  Body: typeof HeroCard.Content // Alias
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, accent = "none", ...props }, ref) => (
    <HeroCard
      ref={ref}
      className={cn(
        "rounded-lg border border-neutral-200 bg-white shadow-sm overflow-hidden flex flex-col",
        className
      )}
      {...props}
    >
      {accent !== "none" && (
        <HeroSurface className={cn(
          "h-1 w-full shrink-0",
          accent === "gold" ? "bg-gold-500" : "bg-green-700"
        )}>{null}</HeroSurface>
      )}
      {children}
    </HeroCard>
  )
) as CardComponent

Card.Header = HeroCard.Header
Card.Title = HeroCard.Title
Card.Description = HeroCard.Description
Card.Content = HeroCard.Content
Card.Footer = HeroCard.Footer
Card.Body = HeroCard.Content

Card.displayName = "Card"

// Legacy individual exports for backward compatibility
const CardHeader = HeroCard.Header
const CardFooter = HeroCard.Footer
const CardContent = HeroCard.Content

export { Card, CardHeader, CardFooter, CardContent }
