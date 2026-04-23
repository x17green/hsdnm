import { Avatar as HeroAvatar } from "@heroui/react"
import { cn } from "../../lib/utils"
import * as React from "react"

/* ══════════════════════════════════════════════════════════════
   HSDNM Avatar — HeroUI v3 Beta Wrapper
   Brand Guide 2026 · §4 UI Morphology
   Radius spec: rounded-sm (2px) - sharp institutional feel.
══════════════════════════════════════════════════════════════ */

interface AvatarProps extends React.ComponentPropsWithoutRef<typeof HeroAvatar> {}

interface AvatarComponent extends React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLElement>> {
  Image: typeof HeroAvatar.Image
  Fallback: typeof HeroAvatar.Fallback
}

const Avatar = React.forwardRef<HTMLElement, AvatarProps>(
  ({ className, ...props }, ref) => (
    <HeroAvatar
      ref={ref as any}
      className={cn(
        "rounded-sm font-sans",
        className
      )}
      {...props}
    />
  )
) as AvatarComponent

Avatar.Image = HeroAvatar.Image
Avatar.Fallback = HeroAvatar.Fallback

Avatar.displayName = "Avatar"

export { Avatar }
