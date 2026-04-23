"use client"

import * as React from "react"
import { 
  Heading, 
  Text, 
  Surface, 
  Stack, 
  Grid, 
  Flex, 
  Card, 
  Button 
} from "@hsdnm/ui"
import { Map as MapIcon, Users, MapPin, Target, ChevronRight } from "lucide-react"

/* ══════════════════════════════════════════════════════════════
   HSDNM Portal — National Growth Heatmap
   Institutional UI Architecture · Brand Guide 2026
   - Geospatial Mobilization Logic
   - Real-time Density Sync
   - Structural Block performance
 ══════════════════════════════════════════════════════════════ */

export default function GrowthMapPage() {
  const regions = [
    { id: "bayelsa", name: "Bayelsa State", active: 24500, growth: "+12%" },
    { id: "rivers", name: "Rivers State", active: 18200, growth: "+5%" },
    { id: "delta", name: "Delta State", active: 15400, growth: "+8%" },
    { id: "fct", name: "FCT Abuja", active: 6200, growth: "+18%" },
  ]

  return (
    <Surface className="w-full flex flex-col gap-6 max-w-6xl mx-auto font-sans animate-brand-fade bg-transparent">
      
      {/* Page Header */}
      <Surface className="border-b border-neutral-200 pb-5 bg-transparent">
        <Flex direction={{ sm: "col", md: "row" }} justify="between" align={{ sm: "start", md: "end" }} gap="md">
          <Stack gap="xs">
            <Heading level={2} className="text-green-900 m-0">National Growth Heatmap</Heading>
            <Text variant="small" mode="muted" className="m-0">
              Real-time geospatial visualization of institutional membership density.
            </Text>
          </Stack>
          <Surface className="flex bg-neutral-100 rounded-sm p-1 shrink-0 bg-transparent">
            <Button size="sm" className="bg-white shadow-sm font-sans font-bold text-2xs uppercase tracking-widest px-4 h-8 rounded-sm text-green-900">National View</Button>
            <Button size="sm" className="bg-transparent text-neutral-500 font-sans font-bold text-2xs uppercase tracking-widest px-4 h-8 rounded-sm">State Level</Button>
          </Surface>
        </Flex>
      </Surface>

      <Grid cols={{ sm: 1, lg: 3 }} gap="md" className="mt-2">
        
        {/* Left Column: List/Metrics */}
        <Surface className="lg:col-span-1 bg-transparent">
          <Card className="h-full">
            <Card.Header className="px-6 py-4 flex flex-col items-start bg-neutral-50 border-b border-neutral-100">
              <Text className="font-black text-green-900 uppercase tracking-widest text-2xs">Regional Density</Text>
              <Text variant="xs" mode="muted" className="leading-tight">
                Top performing structural blocks
              </Text>
            </Card.Header>
            <Card.Content className="p-0">
              <Stack gap="none" className="divide-y divide-neutral-100">
                {regions.map((reg) => (
                  <Surface key={reg.id} className="p-4 px-6 flex items-center justify-between hover:bg-neutral-50 transition-colors cursor-pointer group">
                    <Stack gap="none">
                      <Text className="font-sans font-bold text-sm text-green-900">{reg.name}</Text>
                      <Flex align="center" gap="sm" className="mt-0.5">
                        <Users className="size-3 text-neutral-400" />
                        <Text variant="mono" className="text-xs text-neutral-500">{reg.active.toLocaleString()} members</Text>
                      </Flex>
                    </Stack>
                    <Flex align="center" gap="sm">
                      <Text className="text-2xs font-black text-green-700 bg-green-50 border border-green-100 px-2 py-0.5 rounded-sm">{reg.growth}</Text>
                      <ChevronRight className="size-4 text-neutral-300 group-hover:text-gold-500 transition-colors" />
                    </Flex>
                  </Surface>
                ))}
              </Stack>
            </Card.Content>
          </Card>
        </Surface>

        {/* Right Column: The Map Container */}
        <Surface className="lg:col-span-2 flex flex-col h-[500px] bg-transparent">
          <Card className="h-full relative overflow-hidden flex flex-col">
            <Surface className="absolute top-4 left-4 z-10 bg-transparent">
              <Surface className="shadow-sm border border-neutral-200 bg-white px-4 py-2 flex items-center gap-2 rounded-sm border-l-4 border-l-gold-500">
                <Target className="size-4 text-gold-500" />
                <Text className="font-sans text-xs font-black text-green-900 uppercase tracking-widest">Live Density Sync</Text>
              </Surface>
            </Surface>
            
            {/* Map Placeholder Graphic */}
            <Surface className="flex-1 bg-neutral-50 flex items-center justify-center relative overflow-hidden">
              <Surface className="absolute inset-0 opacity-5 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, #001a14 1px, transparent 0)',
                backgroundSize: '24px 24px'
              }}>{null}</Surface>
              
              <Stack gap="md" align="center" className="text-neutral-400">
                <MapIcon className="size-20 opacity-20" />
                <Text className="font-serif italic text-lg opacity-80 text-center max-w-sm text-green-900/40 px-6">
                  Geospatial rendering engine will load interactive SVG map upon data hydration.
                </Text>
              </Stack>
              
              {/* Fake pins (structural indicators) */}
              <Surface className="absolute top-[35%] left-[55%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <Surface className="absolute size-16 bg-gold-500/10 rounded-full animate-ping">{null}</Surface>
                <Surface className="absolute size-4 bg-gold-500 rounded-full border-2 border-white shadow-brand z-10">{null}</Surface>
              </Surface>
              <Surface className="absolute top-[65%] left-[35%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <Surface className="absolute size-12 bg-green-700/10 rounded-full animate-ping delay-500">{null}</Surface>
                <Surface className="absolute size-3 bg-green-700 rounded-full border-2 border-white shadow-brand z-10">{null}</Surface>
              </Surface>
            </Surface>
          </Card>
        </Surface>
      </Grid>
    </Surface>
  )
}
