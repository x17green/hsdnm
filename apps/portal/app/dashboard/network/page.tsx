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
import { Network, Crown, TrendingUp, Users } from "lucide-react"

/* ══════════════════════════════════════════════════════════════
   HSDNM Portal — National Referral Network
   Institutional DNA · Brand Guide 2026
   - Grassroots Mobilization Tracker
   - Multi-tier Downline Visibility
   - Authoritative Leaderboard
 ══════════════════════════════════════════════════════════════ */

export default function ReferralNetworkPage() {
  const leaders = [
    { id: "HSD-SS-BYS-0001", name: "Henry Seriake Dickson", referrals: 1250, location: "Sagbama", rank: 1 },
    { id: "HSD-SS-BYS-0002", name: "Endurance Amagbe", referrals: 890, location: "Yenagoa", rank: 2 },
    { id: "HSD-SS-BYS-0003", name: "Preye Joshua", referrals: 645, location: "Southern Ijaw", rank: 3 },
    { id: "HSD-SS-BYS-0004", name: "Diepreye Alabo", referrals: 412, location: "Ekeremor", rank: 4 },
    { id: "HSD-SS-BYS-0005", name: "Tari Perewei", referrals: 290, location: "Nembe", rank: 5 },
  ]

  return (
    <Surface className="flex flex-col gap-6 font-sans animate-brand-fade bg-transparent">
      
      {/* Header Section */}
      <Surface className="border-b border-neutral-200 pb-5 bg-transparent">
        <Stack gap="xs">
          <Heading level={2} className="text-green-900 m-0">National Referral Network</Heading>
          <Text variant="small" mode="muted" className="m-0">
            Track organic grassroots mobilization and structural growth across units.
          </Text>
        </Stack>
      </Surface>

      <Grid cols={{ sm: 1, lg: 2 }} gap="md" className="mt-2">
        
        {/* Left Column: Top Coordinators */}
        <Surface className="lg:col-span-1">
          <Card className="h-full">
            <Card.Header className="flex gap-2 bg-neutral-50 border-b border-neutral-100 px-4 py-3 items-center">
              <Crown className="text-gold-500 size-5" />
              <Surface className="flex items-center gap-2 bg-transparent">
                <Text className="font-black text-green-900 uppercase tracking-widest text-2xs">Mobilization Leaderboard</Text>
              </Surface>
            </Card.Header>
            <Card.Content className="p-0 bg-transparent">
              <Stack gap="none" className="divide-y divide-neutral-100">
                {leaders.map((leader) => (
                  <Surface key={leader.id} className="p-2 px-4 flex w-full items-center justify-between hover:bg-neutral-50 transition-colors">
                    {/* Leader Rank */}
                    <Flex align="center" gap="md">
                      <Surface className="flex items-center justify-center size-8 rounded-sm bg-neutral-50 border border-neutral-200 font-serif font-black text-green-900 shadow-sm relative">
                        {leader.rank}
                        {leader.rank === 1 && (
                          <Surface className="absolute -top-1.5 -right-1.5 text-gold-500">
                            <Crown className="size-3 fill-gold-500" />
                          </Surface>
                        )}
                      </Surface>
                      <Stack gap="none">
                        <Text className="font-sans font-bold text-sm text-green-900 leading-tight">{leader.name}</Text>
                        <Flex wrap align="center" gap="sm">
                          <Text variant="mono" className="text-xs text-neutral-500">{leader.id}</Text>
                          <Text className="text-2xs uppercase font-black text-neutral-400 tracking-widest">{leader.location}</Text>
                        </Flex>
                      </Stack>
                    </Flex>
                    {/* Verified Nodes */}
                    <Stack gap="none" align="end">
                      <Flex align="center" gap="xs" className="bg-green-50 px-2 py-1 rounded-sm border border-green-200">
                        <Users className="size-3 text-green-700" />
                        <Text className="text-sm font-bold text-green-900">{leader.referrals}</Text>
                      </Flex>
                      <Text className="text-2xs uppercase font-black tracking-widest text-neutral-400 mt-1">Nodes</Text>
                    </Stack>
                  </Surface>
                ))}
              </Stack>
            </Card.Content>
          </Card>
        </Surface>

        {/* Right Column: Your Network Tree */}
        <Surface className="lg:col-span-1">
          <Card className="h-full bg-green-50 border border-green-200 shadow-none">
            <Card.Header className="px-5 py-4 flex flex-col items-start bg-neutral-50 border-b border-neutral-100">
              <Flex align="center" gap="sm">
                <Network className="size-4 text-green-700" />
                <Text className="font-bold text-green-900 uppercase tracking-widest text-2xs">Your Direct Downline</Text>
              </Flex>
              <Text variant="xs" mode="muted" className="mt-1 opacity-80">
                Members registered via your structural code.
              </Text>
            </Card.Header>
            <Card.Content className="p-8 flex flex-col items-center justify-center h-full min-h-[280px]">
              <Stack gap="md" align="center">
                <Surface className="p-6 bg-green-50 rounded-sm border border-green-100">
                  <TrendingUp className="size-10 text-green-700" />
                </Surface>
                <Heading level={3} className="text-green-900 m-0">0 Nodes</Heading>
                <Text variant="small" mode="muted" className="text-center max-w-xs leading-relaxed">
                  You haven't mobilized any new members recently. Share your unique referral link to build your network.
                </Text>
                <Button 
                  variant="primary"
                  className="bg-green-700 hover:bg-green-800 text-white rounded-sm font-sans font-bold text-xs uppercase tracking-widest w-full h-12 shadow-brand mt-4"
                >
                  Copy Referral Link
                </Button>
              </Stack>
            </Card.Content>
          </Card>
        </Surface>
      </Grid>
    </Surface>
  )
}
