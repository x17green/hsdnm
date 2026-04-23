"use client"

import * as React from "react"
import Link from "next/link"
import { 
  Heading, 
  Text, 
  Stack, 
  Surface, 
  Flex, 
  Button, 
  Card 
} from "@hsdnm/ui"
import { Chip, Table } from "@heroui/react"
import { UserPlus, ChevronRight, TrendingUp, Download } from "lucide-react"

/* ══════════════════════════════════════════════════════════════
   HSDNM Portal — Dashboard Overview Content
   Brand Guide 2026 Compliant · §4 Institutional Scaling
   - 60-30-10 Color Architecture
   - Zero-HTML Layout Primitives
   - Authoritative Metrics
   - Zero Transparency Boundary Policy
 ══════════════════════════════════════════════════════════════ */

const stats = [
  { label: "Total Members",  value: "1,290,342", trend: "+12%", accent: false },
  { label: "New This Week",  value: "12,482",    trend: "+8%",  accent: true  },
  { label: "Active LGAs",   value: "774 / 774", trend: "100%", accent: false },
  { label: "Active Wards",  value: "8,920",     trend: "+5%",  accent: false },
]

const recentActivity = [
  { ward: "W01", name: "Ward 01 – Sagbama Unit",    count: 12, time: "2 mins ago", state: "Bayelsa" },
  { ward: "W02", name: "Ward 02 – Agbura Unit",     count: 9,  time: "5 mins ago", state: "Bayelsa" },
  { ward: "W03", name: "Ward 03 – Kolokuma Unit",   count: 18, time: "8 mins ago", state: "Bayelsa" },
  { ward: "W04", name: "Ward 04 – Ekeremor Unit",   count: 6,  time: "11 mins ago",state: "Bayelsa" },
  { ward: "W05", name: "Ward 05 – Brass LGA Unit",  count: 21, time: "14 mins ago",state: "Bayelsa" },
]

export default function DashboardPage() {
  return (
    <Surface className="flex flex-col animate-brand-fade bg-transparent">
      
      {/* Welcome Row */}
      <Surface className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
        <Stack gap="xs">
          <Surface className="flex items-center gap-3">
            <Heading level={2} className="text-green-900 m-0">
              Welcome Back, Henry.
            </Heading>
          </Surface>
          <Text variant="small" mode="muted" className="m-0 font-medium">
            Movement activity as of today · Institutional Sync Active
          </Text>
        </Stack>
        <Surface className="flex items-center gap-3 shrink-0">
          <Button 
            variant="outline"
            className="flex-1 md:flex-none h-11 px-6 border-2 border-neutral-100 rounded-sm text-2xs font-black uppercase tracking-widest text-neutral-600 hover:bg-neutral-50 transition-all font-sans"
          >
            <Download className="size-4 mr-2" />
            Download Report
          </Button>
          <Button
            href="/register"
            as={Link}
            variant="primary"
            className="flex-1 md:flex-none h-11 px-8 bg-green-700 hover:bg-green-800 text-white rounded-sm text-2xs font-black uppercase tracking-widest transition-all shadow-brand font-sans"
            >
            <UserPlus className="size-4 mr-2" />
            Register Member
          </Button>
        </Surface>
      </Surface>

      {/* ── Stat Cards ── */}
      <Surface className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((s) => (
          <Card
            key={s.label}
            className={[
              "rounded-sm border-2 transition-all duration-300",
              s.accent
                ? "bg-gold-500 border-gold-400 shadow-gold"
                : "bg-white border-neutral-100 hover:border-green-700 shadow-sm",
            ].join(" ")}
          >
            <Card.Content className="p-4">
              <Text variant="xs" className={[
                "font-black tracking-widest mb-4",
                s.accent ? "text-green-900" : "text-neutral-400",
              ].join(" ")}>
                {s.label}
              </Text>
              <Heading level={1} className={[
                "text-green-900 m-0 text-3xl md:text-4xl",
                s.accent ? "text-green-950" : "text-green-900",
              ].join(" ")}>
                {s.value}
              </Heading>
              <Flex align="center" gap="xs" className={[
                "mt-6 text-2xs font-black uppercase tracking-widest",
                s.accent ? "text-green-950/80" : "text-green-700",
              ].join(" ")}>
                <TrendingUp className="size-3.5" />
                {s.trend} from last cycle
              </Flex>
            </Card.Content>
          </Card>
        ))}
      </Surface>

      {/* ── Activity Table ── */}
      <Card className="rounded-sm border-2 border-neutral-100 bg-white shadow-sm overflow-hidden">
        <Card.Header className="px-8 py-6 border-b border-neutral-100 bg-neutral-50">
          <Flex justify="between" align="center" className="w-full">
            <Stack gap="none">
              <Heading level={4} className="text-green-900 m-0 uppercase font-black">
                Recent Mobilisation Activity
              </Heading>
              <Text variant="xs" mode="muted" className="mt-1 font-medium">
                Real-time data from ward coordinators across all LGAs
              </Text>
            </Stack>
            <Chip size="sm" className="bg-green-100 text-green-700 border border-green-200 text-2xs px-3 h-7 font-black uppercase tracking-widest rounded-sm">
              Live Sync
            </Chip>
          </Flex>
        </Card.Header>

        <Card.Content className="p-0">
          <Table aria-label="Recent Mobilisation activity logs">
            <Table.ScrollContainer>
              <Table.Content>
                <Table.Header className="bg-green-900 border-none">
                  <Table.Column className="bg-green-950 text-white font-black text-2xs uppercase tracking-widest px-8 py-5">WARD / LOCATION</Table.Column>
                  <Table.Column className="bg-green-950 text-white font-black text-2xs uppercase tracking-widest px-8 py-5 text-right">METRICS / STATUS</Table.Column>
                </Table.Header>
                <Table.Body>
                  {recentActivity.map((item) => (
                    <Table.Row key={item.ward} className="border-b border-neutral-50 last:border-none hover:bg-neutral-50 transition-colors cursor-pointer group">
                      <Table.Cell className="px-8 py-5">
                        <Flex align="center" gap="md">
                          <Surface className="size-11 rounded-sm bg-neutral-50 border-2 border-neutral-100 flex items-center justify-center text-green-900 font-mono font-black text-xs group-hover:bg-green-900 group-hover:text-gold-500 group-hover:border-green-900 transition-all">
                            {item.ward}
                          </Surface>
                          <Stack gap="none">
                            <Text className="text-sm font-bold text-green-900">{item.name}</Text>
                            <Text variant="xs" className="text-neutral-500">
                              {item.count} new members registered · {item.state}
                            </Text>
                          </Stack>
                        </Flex>
                      </Table.Cell>
                      <Table.Cell className="px-8 py-5">
                        <Flex align="center" justify="end" gap="lg" className="text-right">
                          <Stack gap="none" align="end" className="hidden sm:flex">
                            <Text variant="xs" className="font-black text-green-700 uppercase tracking-widest">Active</Text>
                            <Text variant="mono" className="text-xs text-neutral-400 font-bold">{item.time}</Text>
                          </Stack>
                          <ChevronRight className="size-5 text-neutral-200 group-hover:text-gold-500 transition-colors" />
                        </Flex>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Content>
            </Table.ScrollContainer>
          </Table>
        </Card.Content>

        <Surface className="px-8 py-5 border-t border-neutral-100 bg-neutral-50">
          <Flex justify="between" align="center" className="w-full">
            <Text variant="xs" mode="muted" className="font-bold uppercase tracking-widest">
              Showing 5 of 9,200+ active wards
            </Text>
            <Button 
              variant="ghost"
              className="h-10 px-6 font-sans font-black text-2xs uppercase tracking-widest text-green-700 hover:bg-green-100 rounded-sm transition-all"
            >
              View All Activity
              <ChevronRight className="size-4 ml-2" />
            </Button>
          </Flex>
        </Surface>
      </Card>
    </Surface>
  )
}
