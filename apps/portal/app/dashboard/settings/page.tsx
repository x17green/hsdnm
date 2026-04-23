"use client"

import * as React from "react"
import { Surface, Stack, Heading, Text, Button, Card, Flex, Grid, BrandBadge } from "@hsdnm/ui"
import { ShieldCheck, Lock, Bell, User, Globe, ChevronRight } from "lucide-react"

/* ══════════════════════════════════════════════════════════════
   HSDNM Portal — Member Settings
   Brand Guide 2026 · § Institutional Authority
   - Pure Primitive Architecture
   - Sharp Radii (rounded-sm)
 ══════════════════════════════════════════════════════════════ */

export default function SettingsPage() {
  const sections = [
    {
      title: "Security & Authentication",
      desc: "Manage your credentials and identity verification protocols.",
      icon: <Lock className="size-5 text-green-700" />,
      items: ["Password Reset", "Two-Factor Authentication", "Device Management"]
    },
    {
      title: "Notification Preferences",
      desc: "Configure directives and movement updates delivery.",
      icon: <Bell className="size-5 text-green-700" />,
      items: ["Email Alerts", "Portal Announcements", "SMS Directives"]
    },
    {
      title: "Privacy & Data",
      desc: "Manage your PII exposure and data accessibility settings.",
      icon: <ShieldCheck className="size-5 text-green-700" />,
      items: ["View Stored Data", "PII Access Logs", "Data Export"]
    },
    {
      title: "Global Profile",
      desc: "Public-facing membership details and coordination status.",
      icon: <Globe className="size-5 text-green-700" />,
      items: ["Public Alias", "Coordinator Badges", "Social Links"]
    }
  ]

  return (
    <Surface className="bg-transparent animate-brand-fade">
      <Stack gap="xl" className="bg-transparent">
        {/* Header zone */}
        <Surface className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-neutral-200 bg-transparent">
          <Stack gap="sm" className="bg-transparent">
            <BrandBadge variant="green">Institutional Mandate</BrandBadge>
            <Heading level={2} className="text-3xl text-green-900 tracking-tight">Member Settings</Heading>
            <Text className="text-neutral-500 max-w-lg">
              Manage your structural account configurations and security protocols within the HSDNM network.
            </Text>
          </Stack>
          <Button variant="primary" className="h-11 px-6 rounded-sm shadow-brand font-black">
            Save All Changes
          </Button>
        </Surface>

        {/* Content grid */}
        <Grid cols={{ sm: 1, md: 2 }} gap="lg" className="bg-transparent">
          {sections.map((section, idx) => (
            <Card key={idx} className="bg-white border-2 border-neutral-100 shadow-sm rounded-sm overflow-hidden flex flex-col group hover:border-green-700 transition-all">
              <Card.Header className="p-8 border-b border-neutral-50 flex items-start gap-6">
                <Surface className="size-12 bg-green-50 border border-green-100 rounded-sm flex items-center justify-center shrink-0">
                  {section.icon}
                </Surface>
                <Stack gap="xs" className="bg-transparent">
                  <Heading level={4} className="text-green-900 m-0">{section.title}</Heading>
                  <Text variant="small" className="text-neutral-500 leading-relaxed">{section.desc}</Text>
                </Stack>
              </Card.Header>
              <Card.Content className="p-0 flex-1">
                <Surface className="bg-transparent flex flex-col">
                  {section.items.map((item, i) => (
                    <Button 
                      key={i} 
                      variant="ghost" 
                      className="w-full h-14 border-none border-b border-neutral-50 rounded-none justify-between px-8 hover:bg-neutral-50 group/item transition-colors"
                    >
                      <Text variant="xs" className="font-bold uppercase tracking-widest text-neutral-600 group-hover/item:text-green-900 transition-colors">{item}</Text>
                      <ChevronRight className="size-4 text-neutral-300 transition-transform group-hover/item:translate-x-1 group-hover/item:text-gold-500" />
                    </Button>
                  ))}
                </Surface>
              </Card.Content>
            </Card>
          ))}
        </Grid>
      </Stack>
    </Surface>
  )
}
