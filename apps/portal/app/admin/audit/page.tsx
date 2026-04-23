"use client"

import * as React from "react"
import { 
  Heading, 
  Text, 
  Surface, 
  Stack, 
  Flex, 
  Card, 
  Button, 
  Input 
} from "@hsdnm/ui"
import { Chip, Pagination, Table } from "@heroui/react"
import { ShieldCheck, Search, Filter, History, Download } from "lucide-react"

/* ══════════════════════════════════════════════════════════════
   HSDNM Portal — Immutable Audit Ledgers
   Institutional UI Architecture · Brand Guide 2026
   - Cryptographically Secure Operational Logs
   - National Security & Compliance Protocols
   - Operational Transparency
 ══════════════════════════════════════════════════════════════ */

export default function AuditLedgersPage() {
  const [page, setPage] = React.useState(1)
  const totalPages = 5
  
  const auditLogs = [
    { id: "LOG-9001", timestamp: "2026-10-12 14:05:22", actor: "SUPER_ADMIN (HSD-0001)", action: "RBAC_ELEVATION", target: "HSD-SS-BYS-0003", details: "Granted WARD_COORDINATOR access for Ekeremor Ward 2", severity: "HIGH" },
    { id: "LOG-9002", timestamp: "2026-10-12 13:42:10", actor: "SYSTEM_NIN_BRIDGE", action: "IDENTITY_SYNC", target: "HSD-SS-BYS-0899", details: "NIN Hash verified and credentials provisioned.", severity: "INFO" },
    { id: "LOG-9003", timestamp: "2026-10-12 11:21:05", actor: "LGA_COORD (HSD-0021)", action: "SMS_DISPATCH", target: "RIVERS_STATE_ALL", details: "Broadcast: 'Town hall scheduled for Friday.' (12,400 units)", severity: "MEDIUM" },
    { id: "LOG-9004", timestamp: "2026-10-11 09:14:33", actor: "SYSTEM_MONITOR", action: "FAILED_LOGIN", target: "IP: 192.168.1.45", details: "3 consecutive invalid OTP attempts blocked.", severity: "CRITICAL" },
  ]

  const getSeverityStyle = (severity: string) => {
    switch(severity) {
      case "CRITICAL": return "danger"
      case "HIGH": return "warning"
      case "MEDIUM": return "success"
      default: return "default"
    }
  }

  return (
    <Surface className="w-full flex flex-col gap-6 max-w-7xl mx-auto font-sans animate-brand-fade">
      
      {/* Page Header */}
      <Surface className="border-b border-neutral-200 pb-5">
        <Flex direction={{ sm: "col", md: "row" }} justify="between" align={{ sm: "start", md: "end" }} gap="md">
          <Stack gap="xs">
            <Flex align="center" gap="sm">
              <ShieldCheck className="text-green-700 size-6" />
              <Heading level={2} className="text-green-900 m-0">Immutable Audit Ledgers</Heading>
            </Flex>
            <Text variant="small" mode="muted" className="m-0 pl-8">
              Cryptographically secure operational logs. All role elevations, NIN synchronizations, and bulk dispatches are permanently recorded.
            </Text>
          </Stack>
          <Surface className="shrink-0 mt-4 md:mt-0">
            <Button 
              variant="outline"
              className="h-10 px-6 border-neutral-200 text-green-700 bg-white rounded-sm font-sans font-bold text-2xs uppercase tracking-widest shadow-sm transition-all"
            >
              <Download className="size-4 mr-2" />
              Export Ledger
            </Button>
          </Surface>
        </Flex>
      </Surface>

      <Card>
        <Card.Header className="flex flex-col md:flex-row gap-4 items-center justify-between px-6 py-4 bg-neutral-50 border-b border-neutral-100">
          <Surface className="flex items-center gap-3 w-full md:w-auto">
            <Surface className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 size-4 z-10" />
              <Input
                placeholder="Search by Actor or Log ID..."
                className="font-sans pl-12 h-11 w-full bg-white border-2 border-neutral-100 rounded-sm focus:border-green-700 transition-all"
              />
            </Surface>
            <Button
              variant="outline"
              className="border-neutral-200 bg-white rounded-sm text-neutral-600 size-11 shrink-0 p-0"
            >
              <Filter className="size-4" />
            </Button>
          </Surface>
        </Card.Header>

        <Card.Content className="p-0 overflow-hidden">
          <Table aria-label="System Security Logs">
            <Table.ScrollContainer>
              <Table.Content>
                <Table.Header>
                  <Table.Column className="bg-neutral-50 text-neutral-500 font-sans font-black text-2xs uppercase tracking-widest px-6 py-4 border-b border-neutral-100">LOG REF / TIME</Table.Column>
                  <Table.Column className="bg-neutral-50 text-neutral-500 font-sans font-black text-2xs uppercase tracking-widest px-6 py-4 border-b border-neutral-100">ACTOR</Table.Column>
                  <Table.Column className="bg-neutral-50 text-neutral-500 font-sans font-black text-2xs uppercase tracking-widest px-6 py-4 border-b border-neutral-100">ACTION CATEGORY</Table.Column>
                  <Table.Column className="bg-neutral-50 text-neutral-500 font-sans font-black text-2xs uppercase tracking-widest px-6 py-4 border-b border-neutral-100">DETAILS / TARGET</Table.Column>
                  <Table.Column className="bg-neutral-50 text-neutral-500 font-sans font-black text-2xs uppercase tracking-widest px-6 py-4 border-b border-neutral-100">SEVERITY</Table.Column>
                </Table.Header>
                <Table.Body>
                  {auditLogs.map((log) => (
                    <Table.Row key={log.id} className="hover:bg-neutral-50/50 transition-colors">
                      <Table.Cell className="px-6 py-5 border-b border-neutral-50">
                        <Stack gap="none">
                          <Text variant="mono" className="font-black text-xs text-neutral-500">{log.id}</Text>
                          <Flex align="center" gap="xs" className="mt-1 text-neutral-400">
                            <History className="size-3" />
                            <Text variant="mono" className="text-3xs tracking-tight">{log.timestamp}</Text>
                          </Flex>
                        </Stack>
                      </Table.Cell>
                      <Table.Cell className="px-6 py-5 border-b border-neutral-50">
                        <Text variant="mono" className="font-black text-xs text-green-700 bg-green-50 border border-green-100 px-2 py-1 rounded-sm">
                          {log.actor}
                        </Text>
                      </Table.Cell>
                      <Table.Cell className="px-6 py-5 border-b border-neutral-50">
                        <Text className="text-2xs font-black text-neutral-500 tracking-widest uppercase">
                          {log.action}
                        </Text>
                      </Table.Cell>
                      <Table.Cell className="px-6 py-5 border-b border-neutral-50">
                        <Stack gap="none" className="max-w-sm">
                          <Text variant="mono" className="text-xs text-green-900 font-bold mb-0.5">{log.target}</Text>
                          <Text variant="xs" className="text-neutral-500 leading-snug">{log.details}</Text>
                        </Stack>
                      </Table.Cell>
                      <Table.Cell className="px-6 py-5 border-b border-neutral-50">
                        <Chip 
                          size="sm" 
                          className={[
                            "font-black border tracking-widest text-[9px] uppercase rounded-sm px-2 py-0.5",
                            log.severity === "CRITICAL" ? "bg-red-50 text-red-700 border-red-200" :
                            log.severity === "HIGH" ? "bg-gold-50 text-gold-700 border-gold-200" :
                            log.severity === "MEDIUM" ? "bg-green-50 text-green-700 border-green-200" :
                            "bg-neutral-50 text-neutral-500 border-neutral-100"
                          ].join(" ")}
                        >
                          {log.severity}
                        </Chip>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Content>
            </Table.ScrollContainer>
          </Table>
        </Card.Content>
        <Table.Footer className="p-4 border-t border-neutral-100 bg-neutral-50">
          <Pagination 
            size="sm"
            className="w-full"
          >
            <Pagination.Content className="flex w-full items-center justify-between">
               <Text variant="xs" mode="muted" className="font-bold uppercase tracking-widest">
                  Monitoring 4 active administrative logs
               </Text>
               <Flex align="center" gap="xs">
                 <Pagination.Item>
                   <Pagination.Previous 
                     isDisabled={page === 1}
                     onPress={() => setPage(p => Math.max(1, p - 1))}
                     className="bg-white border-2 border-neutral-100 rounded-sm h-10 px-4 text-2xs font-bold uppercase tracking-widest text-green-700"
                   >
                     Prev
                   </Pagination.Previous>
                 </Pagination.Item>
                 <Pagination.Item>
                   <Pagination.Next 
                     isDisabled={page === totalPages}
                     onPress={() => setPage(p => Math.min(totalPages, p + 1))}
                     className="bg-white border-2 border-neutral-100 rounded-sm h-10 px-4 text-2xs font-bold uppercase tracking-widest text-green-700"
                   >
                     Next
                   </Pagination.Next>
                 </Pagination.Item>
               </Flex>
            </Pagination.Content>
          </Pagination>
        </Table.Footer>
      </Card>
    </Surface>
  )
}
