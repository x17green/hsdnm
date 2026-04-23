"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo, getWebLink, Surface, Stack, Heading, Text, Button, Avatar } from "@hsdnm/ui"
import {
  Users, UserPlus, Map,
  BarChart3, Settings, LogOut,
  Bell, Network, MessageSquare,
  ShieldCheck, LayoutDashboard
} from "lucide-react"

/* ══════════════════════════════════════════════════════════════
   HSDNM Portal — Authenticated Shell Layout
   Brand Guide 2026 · §4 Org structure (4-tier)
══════════════════════════════════════════════════════════════ */

const navItems = [
  { label: "Overview",       icon: LayoutDashboard, href: "/dashboard", exact: true },
  { label: "Member Hub",     icon: Users,           href: "/dashboard/members" },
  { label: "Network",        icon: Network,         href: "/dashboard/network" },
  { label: "Comms Hub",      icon: MessageSquare,   href: "/dashboard/comms" },
  { label: "Growth Map",     icon: Map,             href: "/dashboard/map" },
  { label: "Registration",   icon: UserPlus,        href: "/register" },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <Surface className="flex h-screen overflow-hidden bg-transparent font-sans">
      {/* ── SIDEBAR ── */}
      <Surface className="hidden md:flex w-sidebar shrink-0 flex-col bg-green-900 border-r border-gold-500/20 shadow-xl">
        
        {/* Logo zone — matches header height of register page (64px) */}
        <Surface className="h-16 border-b-3 border-b-gold-500 flex items-center px-6 shrink-0 bg-transparent">
          <Link href={getWebLink("/")} className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Logo size="sm" mode="dark" variant="seal" />
            <Stack gap="none" className="flex flex-col leading-none">
              <Text className="font-serif font-black text-white text-base tracking-tight m-0">HSDNM</Text>
              <Text variant="xs" className="font-sans font-semibold text-gold-500 m-0">
                Member Portal
              </Text>
            </Stack>
          </Link>
        </Surface>

        {/* Nav */}
        <Surface className="flex-1 px-4 py-6 flex flex-col gap-1 overflow-y-auto bg-transparent">
          {navItems.map((item) => {
            const isActive = item.exact 
              ? pathname === item.href 
              : pathname?.startsWith(item.href)

            return (
              <Link
                key={item.label}
                href={item.href}
                className={[
                  "flex items-center gap-3 px-4 py-3 rounded-sm w-full",
                  "text-2xs font-semibold uppercase tracking-widest transition-all duration-150",
                  isActive
                    ? "bg-gold-500 text-green-900 shadow-gold"
                    : "text-white/60 hover:bg-white/10 hover:text-white",
                ].join(" ")}
              >
                <item.icon className="size-4 shrink-0" />
                {item.label}
              </Link>
            )
          })}
        </Surface>

        {/* Bottom nav */}
        <Surface className="px-4 py-4 border-t bg-transparent flex flex-col gap-1 shrink-0">
          <Link
            href="/dashboard/settings"
            className={[
              "flex items-center gap-3 px-4 py-3 rounded-sm w-full",
              "text-2xs font-semibold uppercase tracking-widest transition-all duration-150",
              pathname?.startsWith("/dashboard/settings")
                ? "bg-white/10 text-white" 
                : "text-white/40 hover:bg-white/10 hover:text-white/80"
            ].join(" ")}
          >
            <Settings className="size-4 shrink-0" />
            Settings
          </Link>
          <Link
            href={getWebLink("/")}
            className="flex items-center gap-3 px-4 py-3 rounded-sm w-full text-2xs font-semibold uppercase tracking-widest text-red-400/70 hover:bg-red-950/40 hover:text-red-400 transition-all"
          >
            <LogOut className="size-4 shrink-0" />
            Exit Portal
          </Link>
        </Surface>
      </Surface>

      {/* ── MAIN CONTENT ── */}
      <Surface className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Top bar — matches 64px sidebar logo zone height */}
        <Surface className="h-16 shrink-0 border-b border-neutral-200 bg-white px-4 md:px-6 flex items-center justify-between">
          <Surface>
            <Text variant="xs" mode="accent" className="font-bold mb-1">
              Coordinators Hub
            </Text>
            <Heading level={4} className="text-green-900 m-0">
              Institutional Dashboard
            </Heading>
          </Surface>
          <Surface className="flex items-center gap-3">
            <Button isIconOnly variant="ghost" className="size-9 rounded-sm bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 transition-colors relative">
              <Bell className="size-4" />
              <Surface className="absolute top-2 right-2 size-1.5 bg-gold-500 rounded-full">{null}</Surface>
            </Button>
            <Link href="/dashboard/profile" className="transition-transform hover:scale-105 active:scale-95">
              <Avatar className="size-9 rounded-sm border-2 border-gold-500 bg-green-900 shadow-institutional">
                <Avatar.Fallback className="text-2xs font-black text-gold-500 bg-transparent">
                  HS
                </Avatar.Fallback>
              </Avatar>
            </Link>
          </Surface>
        </Surface>

        {/* Scrollable content area */}
        <Surface className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </Surface>
      </Surface>
    </Surface>
  )
}
