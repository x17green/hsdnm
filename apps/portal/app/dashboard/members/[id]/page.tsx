"use client"

import * as React from "react"
import { use } from "react"
import { 
  Heading, 
  Text, 
  MemberIDCard, 
  Surface, 
  Stack, 
  Grid, 
  Flex, 
  Card, 
  Button 
} from "@hsdnm/ui"
import { ShieldCheck, UserX, AlertCircle, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"

/* ══════════════════════════════════════════════════════════════
   HSDNM Portal — Member Intelligence Profile
   Institutional UI Architecture · Brand Guide 2026
   - Identity Chain Verification
   - NIN Cryptographic Audit
   - Admin Controls
 ══════════════════════════════════════════════════════════════ */

export default function MemberProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const memberId = resolvedParams.id
  
  // Mock data mapping (Real world: use React Server Components filter)
  const member = {
    id: decodeURIComponent(memberId).toUpperCase(),
    name: "Endurance Amagbe",
    ward: "Sagbama Ward 1",
    lga: "Sagbama",
    state: "Bayelsa",
    joinDate: "2026-01-12",
    role: "MEMBER",
    status: "ACTIVE", 
  }

  return (
    <Surface className="w-full flex flex-col gap-6 max-w-6xl mx-auto font-sans animate-brand-fade">
      
      {/* Top Action Bar */}
      <Stack gap="md">
        <Link 
          href="/dashboard/members"
          className="flex items-center gap-2 text-neutral-500 hover:text-green-700 transition-colors w-fit text-sm font-bold uppercase tracking-widest"
        >
          <ArrowLeft className="size-4" />
          Back to Directory
        </Link>
        
        <Surface className="border-b border-neutral-200 pb-5">
          <Flex direction={{ sm: "col", md: "row" }} justify="between" align={{ sm: "start", md: "end" }} gap="md">
            <Stack gap="xs">
              <Flex align="center" gap="sm">
                <Heading level={2} className="text-green-900 m-0">Member Intelligence</Heading>
                <Surface className={[
                  "px-2 py-0.5 rounded-sm text-2xs font-bold uppercase tracking-widest",
                  member.status === "ACTIVE" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                ].join(" ")}>
                  {member.status}
                </Surface>
              </Flex>
              <Text variant="small" mode="muted" className="m-0">
                Detailed identity and structural mapping for {member.name}.
              </Text>
            </Stack>

            <Surface className="shrink-0">
              <Button 
                variant="outline"
                className="h-10 px-6 border-red-200 text-red-700 hover:bg-red-50 rounded-sm font-sans font-bold text-2xs uppercase tracking-widest transition-all"
              >
                <UserX className="size-4 mr-2" />
                Suspend Member
              </Button>
            </Surface>
          </Flex>
        </Surface>
      </Stack>

      <Grid cols={{ sm: 1, lg: 12 }} gap="md" className="mt-2">
        
        {/* Left Column: Digital ID */}
        <Surface className="lg:col-span-5">
          <Card>
            <Card.Header className="flex gap-3 bg-neutral-50 px-6 py-4 border-b border-neutral-100">
              <ShieldCheck className="text-gold-500 size-5" />
              <Surface>
                <Text className="font-bold text-green-900 uppercase tracking-widest text-2xs">Official Clearance Card</Text>
              </Surface>
            </Card.Header>
            <Card.Content className="p-8 flex flex-col items-center gap-6">
              <MemberIDCard 
                member={member} 
                className="w-full shadow-institutional"
              />
            </Card.Content>
          </Card>
        </Surface>

        {/* Right Column: Audit Logs / Metadata */}
        <Surface className="lg:col-span-7">
          <Stack gap="md">
            <Card>
              <Card.Header className="px-6 py-4 flex flex-col items-start bg-neutral-50 border-b border-neutral-100">
                <Text className="font-bold text-green-900 uppercase tracking-widest text-2xs">Identity Chain Verification</Text>
                <Text variant="xs" mode="muted" className="leading-tight">
                  Data obtained during enrollment via NIN cryptographic matching.
                </Text>
              </Card.Header>
              <Card.Content className="p-8">
                <Grid cols={{ sm: 1, md: 2 }} gap="xl">
                  <Stack gap="xs" className="border-b border-dashed border-neutral-100 pb-3">
                    <Text className="text-2xs uppercase tracking-widest text-neutral-400 font-bold">Full Name</Text>
                    <Text className="font-sans font-bold text-green-900">{member.name}</Text>
                  </Stack>
                  <Stack gap="xs" className="border-b border-dashed border-neutral-100 pb-3">
                    <Text className="text-2xs uppercase tracking-widest text-neutral-400 font-bold">NIN Hash Integrity</Text>
                    <Flex align="center" gap="sm">
                      <ShieldCheck className="text-green-700 size-3" />
                      <Text variant="mono" className="text-sm text-green-700 font-bold">SHA-256 Verified</Text>
                    </Flex>
                  </Stack>
                  <Stack gap="xs" className="border-b border-dashed border-neutral-100 pb-3">
                    <Text className="text-2xs uppercase tracking-widest text-neutral-400 font-bold">Registered LGA</Text>
                    <Text className="font-sans font-bold text-green-900">{member.lga}</Text>
                  </Stack>
                  <Stack gap="xs" className="border-b border-dashed border-neutral-100 pb-3">
                    <Text className="text-2xs uppercase tracking-widest text-neutral-400 font-bold">Registered Ward</Text>
                    <Text className="font-sans font-bold text-green-900">{member.ward}</Text>
                  </Stack>
                </Grid>
              </Card.Content>
            </Card>

            <Card>
              <Card.Header className="px-6 py-4 flex gap-3 items-center bg-neutral-50 border-b border-neutral-100">
                <Calendar className="text-green-700 size-5" />
                <Surface>
                  <Text className="font-bold text-green-900 uppercase tracking-widest text-2xs">Registration Audit Trail</Text>
                </Surface>
              </Card.Header>
              <Card.Content className="p-0">
                <Stack gap="none" className="divide-y divide-neutral-100">
                  <Surface className="flex justify-between items-start p-4 md:px-6 bg-white">
                    <Stack gap="none">
                      <Text className="text-sm font-bold text-green-900">Member Onboarding</Text>
                      <Text variant="xs" mode="muted">NIN matched and credentials generated.</Text>
                    </Stack>
                    <Text variant="mono" className="text-xs text-neutral-400">{member.joinDate}</Text>
                  </Surface>
                  
                  <Surface className="flex justify-between items-start p-4 md:px-6 bg-neutral-50">
                    <Stack gap="none">
                      <Text className="text-sm font-bold text-green-900">Portal Initialization</Text>
                      <Text variant="xs" mode="muted">Account secured. Awaiting active participation log.</Text>
                    </Stack>
                    <Text variant="mono" className="text-xs text-neutral-400">{member.joinDate}</Text>
                  </Surface>
                </Stack>
              </Card.Content>
            </Card>
          </Stack>
        </Surface>
      </Grid>
    </Surface>
  )
}
