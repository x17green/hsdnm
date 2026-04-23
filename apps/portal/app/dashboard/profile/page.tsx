"use client"

import * as React from "react"
import { 
  Heading, 
  Text, 
  MemberIDCard, 
  Surface, 
  Stack, 
  Input, 
  Label, 
  Button, 
  Card,
  Flex,
  Grid
} from "@hsdnm/ui"
import { Download, Save, ShieldCheck, Mail, Phone } from "lucide-react"

/* ══════════════════════════════════════════════════════════════
   HSDNM Portal — Institutional Profile
   Brand Guide 2026 · Foundation Neutral-50
   - Synchronized with Identity Registry
   - Institutional Physics Enabled
 ══════════════════════════════════════════════════════════════ */

export default function ProfilePage() {
  // Mock logged-in member data
  const currentMember = {
    id: "HSD-SS-BYS-0001",
    name: "Henry Seriake Dickson",
    ward: "Toru-Orua",
    lga: "Sagbama",
    state: "Bayelsa",
    joinDate: "2026-01-10",
    role: "NATIONAL COORDINATOR",
  }

  return (
    <Surface className="w-full flex flex-col gap-6 max-w-6xl mx-auto font-sans animate-brand-fade bg-transparent">
      
      {/* Header Section */}
      <Surface className="border-b border-neutral-200 pb-5 bg-transparent">
        <Stack gap="xs">
          <Heading level={2} className="text-green-900">Institutional Profile</Heading>
          <Text variant="small" mode="muted">
            Manage your digital footprint and download your official HSDNM seal card.
          </Text>
        </Stack>
      </Surface>

      <Grid cols={{ sm: 1, lg: 12 }} gap="md">
        
        {/* Left Column: Digital ID */}
        <Surface className="lg:col-span-5 bg-transparent">
          <Card className="h-full">
            <Card.Header className="flex gap-3 bg-neutral-50 px-6 py-4 border-b border-neutral-100">
              <ShieldCheck className="text-gold-500 size-5" />
              <Surface className="bg-transparent">
                <Text className="font-black text-green-900 uppercase tracking-widest text-2xs">Digital ID Card</Text>
              </Surface>
            </Card.Header>
            <Card.Content className="p-8 flex flex-col items-center gap-8">
              <MemberIDCard 
                member={currentMember} 
                className="w-full shadow-institutional hover:scale-[1.02] transition-transform duration-500"
              />
              <Button 
                variant="primary" 
                className="w-full h-12 bg-green-700 hover:bg-green-800 rounded-sm shadow-brand group"
              >
                <Download className="size-4 mr-2" />
                Download PDF Card
              </Button>
            </Card.Content>
          </Card>
        </Surface>

        {/* Right Column: Profile Management */}
        <Surface className="lg:col-span-7 bg-transparent">
          <Stack gap="md">
            
            {/* Editable Contact Info */}
            <Card>
              <Card.Header className="px-6 py-4 flex flex-col items-start bg-neutral-50 border-b border-neutral-100">
                <Text className="font-black text-green-900 uppercase tracking-widest text-2xs">Contact & Communication</Text>
                <Text variant="xs" mode="muted">
                  Update your active contact lines for regional operations.
                </Text>
              </Card.Header>
              <Card.Content className="p-8">
                <Stack gap="xl">
                  <Stack gap="sm">
                    <Label className="text-2xs font-black uppercase tracking-widest text-neutral-400">Primary Phone Number</Label>
                    <Flex align="center" className="relative">
                      <Surface className="absolute left-4 z-10 text-neutral-500 bg-transparent">
                        <Phone className="size-4" />
                      </Surface>
                      <Input
                        defaultValue="08012345678"
                        placeholder="+234 — — —"
                        className="h-14 w-full pl-12 border-2 border-neutral-100 rounded-sm font-mono text-lg focus:border-green-700 transition-all"
                      />
                    </Flex>
                  </Stack>
                  
                  <Stack gap="sm">
                    <Label className="text-2xs font-black uppercase tracking-widest text-neutral-400">Email Address</Label>
                    <Flex align="center" className="relative">
                      <Surface className="absolute left-4 z-10 text-neutral-500 bg-transparent">
                        <Mail className="size-4" />
                      </Surface>
                      <Input
                        defaultValue="dickson@hsdnationalmovement.com"
                        placeholder="name@domain.com"
                        className="h-14 w-full pl-12 border-2 border-neutral-100 rounded-sm font-sans focus:border-green-700 transition-all"
                      />
                    </Flex>
                  </Stack>

                  <Flex justify="end">
                    <Button 
                      variant="primary" 
                      className="h-12 px-8 bg-gold-500 hover:bg-gold-600 text-green-900 rounded-sm shadow-gold group"
                    >
                      <Save className="size-4 mr-2" />
                      Save Changes
                    </Button>
                  </Flex>
                </Stack>
              </Card.Content>
            </Card>

            {/* Read-Only Registry Data */}
            <Card className="opacity-80">
              <Card.Header className="px-6 py-4 flex flex-col items-start bg-neutral-50 border-b border-neutral-100">
                <Text className="font-black text-green-900 uppercase tracking-widest text-2xs">Immutable Identity Data</Text>
                <Text variant="xs" mode="muted">
                  These fields are locked and synced from your NIN verification.
                </Text>
              </Card.Header>
              <Card.Content className="p-8">
                <Grid cols={{ sm: 1, md: 2 }} gap="xl">
                  <Stack gap="xs">
                    <Label className="text-2xs font-black uppercase tracking-widest text-neutral-400">Full Name</Label>
                    <Input disabled defaultValue={currentMember.name} className="h-12 border-neutral-100 rounded-sm bg-neutral-50 px-4 pointer-events-none" />
                  </Stack>
                  <Stack gap="xs">
                    <Label className="text-2xs font-black uppercase tracking-widest text-neutral-400">NIN Status</Label>
                    <Input disabled defaultValue="VERIFIED · SHA-256 HASHED" className="h-12 border-neutral-100 rounded-sm bg-neutral-50 px-4 font-mono text-xs pointer-events-none text-green-700 font-bold" />
                  </Stack>
                  <Stack gap="xs">
                    <Label className="text-2xs font-black uppercase tracking-widest text-neutral-400">State of Domicile</Label>
                    <Input disabled defaultValue={currentMember.state} className="h-12 border-neutral-100 rounded-sm bg-neutral-50 px-4 pointer-events-none" />
                  </Stack>
                  <Stack gap="xs">
                    <Label className="text-2xs font-black uppercase tracking-widest text-neutral-400">Ward Assignment</Label>
                    <Input disabled defaultValue={currentMember.ward} className="h-12 border-neutral-100 rounded-sm bg-neutral-50 px-4 pointer-events-none" />
                  </Stack>
                </Grid>
              </Card.Content>
            </Card>
          </Stack>
        </Surface>
      </Grid>
    </Surface>
  )
}
