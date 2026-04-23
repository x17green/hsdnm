import * as React from "react"
import { Surface as HeroSurface } from "@heroui/react"
import { cn } from "./lib/utils"
import { Logo } from "./Layout"
import { Surface } from "@heroui/react"

/* ══════════════════════════════════════════════════════════════
   HSDNM Member ID Card Primitive
   Follows the 60-30-10 color rule. Uses DM Mono for strict data.
   Used on the Profile dashboard and Member detailed view.
══════════════════════════════════════════════════════════════ */

interface MemberIDCardProps {
  member: {
    id: string
    name: string
    ward: string
    lga: string
    state: string
    joinDate: string
    role?: string
  }
  className?: string
  qrCodeUrl?: string // For when we wire up the real QR scanning
}

export const MemberIDCard = ({ member, className, qrCodeUrl }: MemberIDCardProps) => {
  return (
    <HeroSurface
      className={cn(
        "relative overflow-hidden shrink-0",
        "w-full max-w-sm aspect-id-card", // Classic ID card ratio (approx max-w-sm)
        "rounded-lg border border-gold-500 shadow-brand",
        "bg-green-900 text-white flex flex-col justify-between",
        className
      )}
    >
      {/* Background seal watermark */}
      <HeroSurface className="absolute -bottom-16 -right-16 opacity-10 pointer-events-none bg-transparent">
        <Logo size="xl" variant="seal" />
      </HeroSurface>

      {/* Header bar */}
      <HeroSurface className="w-full bg-green-700 border-b-2 border-gold-500/30 px-5 py-3 flex items-center justify-between z-10 shrink-0">
        <HeroSurface className="flex items-center gap-3 bg-transparent">
          <Logo size="sm" variant="seal" mode="dark" />
          <HeroSurface className="flex flex-col bg-transparent">
            <HeroSurface className="font-serif font-bold text-2xs leading-tight text-white tracking-wide uppercase bg-transparent">
              Sen. Henry Seriake Dickson
            </HeroSurface>
            <HeroSurface className="font-sans font-bold text-xs text-gold-500 tracking-15 uppercase leading-none bg-transparent">
              National Movement
            </HeroSurface>
          </HeroSurface>
        </HeroSurface>
        <HeroSurface className="font-sans text-4xs font-bold px-2 py-1 bg-gold-500 text-green-900 rounded-sm uppercase tracking-wider">
          {member.role || "MEMBER"}
        </HeroSurface>
      </HeroSurface>

      {/* Body Area */}
      <HeroSurface className="flex-1 p-5 flex flex-col justify-end z-10 relative bg-transparent">
        <HeroSurface className="flex items-end justify-between w-full bg-transparent">
          {/* Details */}
          <HeroSurface className="flex flex-col gap-1.5 flex-1 bg-transparent">
            <HeroSurface className="flex flex-col bg-transparent">
              <HeroSurface className="text-3xs font-bold text-green-300 uppercase tracking-widest mb-0.5 bg-transparent">
                Full Name
              </HeroSurface>
              <HeroSurface className="font-sans font-bold text-lg text-white leading-none uppercase bg-transparent">
                {member.name}
              </HeroSurface>
            </HeroSurface>
            
            <HeroSurface className="flex flex-col bg-transparent">
              <HeroSurface className="text-3xs font-bold text-green-300 uppercase tracking-widest mb-0.5 bg-transparent">
                Member ID
              </HeroSurface>
              <HeroSurface className="font-mono font-bold text-base text-gold-400 leading-none bg-transparent">
                {member.id}
              </HeroSurface>
            </HeroSurface>

            <HeroSurface className="grid grid-cols-2 gap-4 mt-1 bg-transparent">
              <HeroSurface className="flex flex-col pr-1 bg-transparent">
                <HeroSurface className="text-3xs font-bold text-green-300 uppercase tracking-widest mb-0.5 bg-transparent">
                  LGA / Ward
                </HeroSurface>
                <HeroSurface className="font-sans text-3xs font-semibold text-neutral-100 uppercase leading-tight line-clamp-2 bg-transparent">
                  {member.lga} / {member.ward}
                </HeroSurface>
              </HeroSurface>
              <HeroSurface className="flex flex-col bg-transparent">
                <HeroSurface className="text-3xs font-bold text-green-300 uppercase tracking-widest mb-0.5 bg-transparent">
                  Join Date
                </HeroSurface>
                <HeroSurface className="font-mono text-2xs font-medium text-neutral-100 bg-transparent">
                  {member.joinDate}
                </HeroSurface>
              </HeroSurface>
            </HeroSurface>
          </HeroSurface>
          
          {/* QR Code Block */}
          <HeroSurface className="ml-4 shrink-0 flex flex-col items-center gap-1.5 bg-transparent">
            <HeroSurface className="size-id-size bg-white rounded border-2 border-gold-500 p-1 flex items-center justify-center relative overflow-hidden bg-transparent">
              {/* Fallback QR visual if no URL is provided */}
              {qrCodeUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={qrCodeUrl} alt="QR Code" className="w-full h-full object-contain" />
              ) : (
                <HeroSurface className="w-full h-full border border-dashed border-neutral-300 flex items-center justify-center bg-neutral-50 relative bg-transparent">
                  <Surface className="absolute inset-2 border-2 border-neutral-800 bg-transparent">{null}</Surface>
                  <Surface className="absolute inset-4 bg-neutral-800 border-4 border-white bg-transparent">{null}</Surface>
                  <Surface className="w-2 h-2 bg-white z-10 bg-transparent">{null}</Surface>
                </HeroSurface>
              )}
            </HeroSurface>
          </HeroSurface>
        </HeroSurface>
      </HeroSurface>
      
      {/* Bottom accent line */}
      <HeroSurface className="h-1.5 w-full bg-gold-500 shrink-0 z-10">{null}</HeroSurface>
    </HeroSurface>
  )
}
