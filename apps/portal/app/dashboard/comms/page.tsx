"use client"

import * as React from "react"
import { 
  Heading, 
  Text, 
  Surface, 
  Stack, 
  Grid, 
  Card, 
  Button, 
  Input, 
  Select, 
  ListBox, 
  Label,
  Flex,
} from "@hsdnm/ui"
import { TextArea } from "@heroui/react"
import { MessageSquare, Send, Users, Activity, Filter, Info } from "lucide-react"

/* ══════════════════════════════════════════════════════════════
   HSDNM Portal — Communications Hub
   Institutional UI Architecture · Brand Guide 2026
   - Bulk SMS Dispatch
   - API Quota Management
   - Structural Directives
 ══════════════════════════════════════════════════════════════ */

export default function CommunicationsHubPage() {
  return (
    <Surface className="w-full flex flex-col gap-6 max-w-6xl mx-auto font-sans animate-brand-fade bg-transparent">
      
      {/* Page Header */}
      <Surface className="border-b border-neutral-200 pb-5 bg-transparent">
        <Flex direction={{ sm: "col", md: "row" }} justify="between" align={{ sm: "start", md: "end" }} gap="md" className="w-full">
          <Stack gap="xs">
            <Heading level={2} className="text-green-900 m-0">Command Communications</Heading>
            <Text variant="small" mode="muted" className="m-0 font-medium">
              Dispatch bulk SMS alerts and structural directives to verified members.
            </Text>
          </Stack>
          <Surface className="shrink-0 bg-transparent">
            <Button 
              variant="outline" 
              className="h-10 px-8 border-2 border-neutral-100 text-neutral-600 bg-white hover:bg-neutral-50 shadow-sm rounded-sm uppercase text-2xs font-black tracking-widest transition-all"
            >
              Message History
            </Button>
          </Surface>
        </Flex>
      </Surface>

      <Grid cols={{ sm: 1, lg: 12 }} gap="xl" className="mt-2">
        
        {/* Left Column: Composer */}
        <Surface className="lg:col-span-8">
          <Stack gap="md">
            <Card>
              <Card.Header className="flex flex-col gap-3 bg-neutral-50 px-8 py-5 border-b border-neutral-100">
                <Flex align="center" gap="sm">
                  <MessageSquare className="text-gold-500 size-5" />
                  <Text className="font-black text-green-900 uppercase tracking-widest text-2xs">Broadcast Composer</Text>
                </Flex>
                <Text variant="xs" mode="muted" className="leading-tight">
                  Draft and dispatch official movement directives via Termii SMS.
                </Text>
              </Card.Header>
              <Card.Content className="p-8">
                <Stack gap="xl">
                  
                  {/* Target Audience Filter */}
                  <Surface className="p-6 bg-neutral-50 border border-neutral-100 rounded-sm">
                    <Stack gap="md">
                      <Flex align="center" gap="sm" className="border-b border-neutral-100 pb-3">
                        <Filter className="size-4 text-green-700" />
                        <Text className="text-2xs font-black uppercase tracking-widest text-green-900">Target Audience</Text>
                      </Flex>
                      
                      <Grid cols={{ sm: 1, md: 2 }} gap="md">
                        <Stack gap="xs">
                          <Label className="text-2xs font-black uppercase tracking-widest text-neutral-400/80">Geopolitical Scope</Label>
                          <Select placeholder="Select Target Region" className="h-12 w-full border-2 border-neutral-100 bg-white rounded-sm flex items-center px-4 focus:border-green-700 transition-all">
                            <Select.Trigger className="w-full flex justify-between items-center text-green-900 font-black text-xs uppercase tracking-tight border-none shadow-none focus:ring-0">
                              <Select.Value />
                            </Select.Trigger>
                            <Select.Popover className="border border-neutral-200 shadow-xl rounded-sm">
                              <ListBox className="p-2 bg-white">
                                <ListBox.Item id="all" textValue="National (All Members)" className="rounded-sm p-3 hover:bg-green-50 text-green-900 font-bold text-xs uppercase tracking-widest">National (All Members)</ListBox.Item>
                                <ListBox.Item id="bayelsa" textValue="Bayelsa State Region" className="rounded-sm p-3 hover:bg-green-50 text-green-900 font-bold text-xs uppercase tracking-widest">Bayelsa State Region</ListBox.Item>
                              </ListBox>
                            </Select.Popover>
                          </Select>
                        </Stack>

                        <Stack gap="xs">
                          <Label className="text-2xs font-black uppercase tracking-widest text-neutral-400/80">Member Status</Label>
                          <Select placeholder="Select Status" className="h-12 w-full border-2 border-neutral-100 bg-white rounded-sm flex items-center px-4 focus:border-green-700 transition-all">
                            <Select.Trigger className="w-full flex justify-between items-center text-green-900 font-black text-xs uppercase tracking-tight border-none shadow-none focus:ring-0">
                              <Select.Value />
                            </Select.Trigger>
                            <Select.Popover className="border border-neutral-200 shadow-xl rounded-sm">
                              <ListBox className="p-2 bg-white">
                                <ListBox.Item id="active" textValue="Active Members Only" className="rounded-sm p-3 hover:bg-green-50 text-green-900 font-bold text-xs uppercase tracking-widest">Active Members Only</ListBox.Item>
                                <ListBox.Item id="all" textValue="All Statuses" className="rounded-sm p-3 hover:bg-green-50 text-green-900 font-bold text-xs uppercase tracking-widest">All Statuses</ListBox.Item>
                              </ListBox>
                            </Select.Popover>
                          </Select>
                        </Stack>
                      </Grid>
                    </Stack>
                  </Surface>

                  <Stack gap="sm" className="items-center">
                    <Label className="self-start text-2xs font-black uppercase tracking-widest text-neutral-400/80">SMS Payload</Label>
                    <Surface className="w-[480px] space-y-3">
                        <TextArea 
                        fullWidth
                        placeholder="Enter your official broadcast content here..." 
                        rows={5}
                        className="border-2 border-neutral-100 bg-white rounded-sm font-mono text-sm focus:border-green-700 transition-all pb-12"
                      />
                      <Surface className="flex items-center gap-1.5 text-neutral-500 bg-transparent">
                        <Info className="size-3" />
                        <Text className="text-2xs font-black uppercase tracking-widest text-neutral-400">0 / 160 characters</Text>
                      </Surface>
                    </Surface>
                  </Stack>

                  <Flex justify="between" align="center" className="pt-4 border-t border-neutral-100">
                    <Text variant="xs" className="text-neutral-500 font-black uppercase tracking-widest">
                      Estimated Reach: <Text variant="xs" className="text-green-700 inline-block font-black">12,482 verified lines</Text>
                    </Text>
                    <Button 
                      variant="primary"
                      className="h-12 px-10 bg-green-700 hover:bg-green-800 text-white rounded-sm font-sans font-bold text-xs uppercase tracking-widest shadow-brand group"
                    >
                      Dispatch Broadcast
                      <Send className="size-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                  </Flex>
                </Stack>
              </Card.Content>
            </Card>
          </Stack>
        </Surface>

        {/* Right Column: Status & Quota */}
        <Surface className="lg:col-span-4 bg-transparent">
          <Stack gap="md">
            <Card className="border-2 border-neutral-100 rounded-sm">
              <Card.Header className="px-8 py-5 flex flex-col items-start bg-neutral-50 border-b border-neutral-100">
                <Text className="font-black text-green-900 uppercase tracking-widest text-2xs">API Quota Allocation</Text>
                <Text variant="xs" mode="muted" className="leading-tight">
                  Current Termii SMS gateway limits.
                </Text>
              </Card.Header>
              <Card.Content className="p-8">
                <Stack gap="lg">
                  <Surface className="flex flex-col items-center justify-center p-8 bg-green-50 border border-green-100 rounded-sm">
                    <Text variant="mono" className="text-4xl font-black text-green-700 tracking-tighter">84,500</Text>
                    <Text className="text-2xs font-black uppercase tracking-widest text-green-900 mt-2">Credits Remaining</Text>
                  </Surface>
                  
                  <Stack gap="sm" className="px-1">
                    <Flex justify="between" align="center">
                      <Text variant="small" className="font-black text-neutral-400 uppercase tracking-widest">Gateway Status</Text>
                      <Flex align="center" gap="xs" className="px-3 py-1 bg-green-700 text-white rounded-sm text-xs font-black tracking-widest">
                        <Surface className="size-1.5 rounded-full bg-gold-500 animate-pulse shadow-gold">{null}</Surface>
                        ONLINE
                      </Flex>
                    </Flex>
                    <Flex justify="between" align="center">
                      <Text variant="small" className="font-black text-neutral-400 uppercase tracking-widest">Sender ID</Text>
                      <Text variant="mono" className="text-xs font-black text-green-900 bg-neutral-50 border border-neutral-100 px-3 py-1 rounded-sm">HSDNM</Text>
                    </Flex>
                  </Stack>
                </Stack>
              </Card.Content>
            </Card>

            <Card className="bg-green-900 shadow-institutional">
              <Card.Content className="p-6">
                <Stack gap="md">
                  <Flex align="center" gap="sm">
                    <Activity className="size-5 text-gold-500" />
                    <Text className="text-2xs font-black uppercase tracking-widest text-white">System Integrity</Text>
                  </Flex>
                  <Text variant="xs" className="text-white/60 leading-relaxed">
                    All broadcast directives are logged in the immutable audit registry for national compliance.
                  </Text>
                </Stack>
              </Card.Content>
            </Card>
          </Stack>
        </Surface>
      </Grid>
    </Surface>
    // </Surface>
  )
}
