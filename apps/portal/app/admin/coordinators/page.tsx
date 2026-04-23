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
import { Chip, Select, ListBox, Pagination, Table } from "@heroui/react"
import { ShieldAlert, Search, Filter, Key, CheckCircle2 } from "lucide-react"

/* ══════════════════════════════════════════════════════════════
   HSDNM Portal — Command Architecture Assignment
   Institutional Admin Interface · Brand Guide 2026
   - Role-Based Access Control (RBAC)
   - Operational Coordinator Elevations
   - NIN Cryptographic Verification required
 ══════════════════════════════════════════════════════════════ */

export default function CoordinatorsManagementPage() {
  const [page, setPage] = React.useState(1)
  const totalPages = 5
  
  const members = [
    { id: "HSD-SS-BYS-0001", name: "Endurance Amagbe", lga: "Sagbama", role: "LGA_COORDINATOR", status: "VERIFIED" },
    { id: "HSD-SS-BYS-0002", name: "Preye Joshua", lga: "Southern Ijaw", role: "MEMBER", status: "VERIFIED" },
    { id: "HSD-SS-BYS-0003", name: "Diepreye Alabo", lga: "Ekeremor", role: "WARD_COORDINATOR", status: "VERIFIED" },
    { id: "HSD-SS-BYS-0004", name: "Tari Perewei", lga: "Nembe", role: "MEMBER", status: "PENDING_NIN" },
  ]

  return (
    <Surface className="w-full flex flex-col gap-6 max-w-7xl mx-auto font-sans animate-brand-fade">
      
      {/* Security Protocol Banner */}
      <Surface className="bg-red-50 border border-red-200 rounded-sm p-5 flex gap-4 items-start mb-2">
        <ShieldAlert className="text-red-700 size-5 shrink-0 mt-0.5" />
        <Stack gap="xs">
          <Text className="font-sans font-black text-xs text-red-900 uppercase tracking-widest">Restricted Administrative Protocol</Text>
          <Text variant="xs" className="text-red-700 font-bold leading-relaxed">
            Actions executed on this interface strictly modify the Role-Based Access Control (RBAC) privileges across the national movement. Do not grant Coordinator clearance without physical mandate verification.
          </Text>
        </Stack>
      </Surface>

      {/* Page Header */}
      <Surface className="border-b border-neutral-200 pb-5">
        <Stack gap="xs">
          <Heading level={2} className="text-green-900 m-0">Command Architecture Assignment</Heading>
          <Text variant="small" mode="muted" className="m-0">
            Elevate verified members to operational coordination status (LGA / Ward levels).
          </Text>
        </Stack>
      </Surface>

      <Card>
        <Card.Header className="flex flex-col md:flex-row gap-4 items-center justify-between px-6 py-4 bg-neutral-50 border-b border-neutral-100">
          <Flex align="center" gap="sm" className="w-full md:w-auto">
            <Surface className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 size-4 z-10" />
              <Input
                placeholder="Search NIN hash or Member ID..."
                className="font-sans pl-12 bg-white border-2 border-neutral-100 rounded-sm h-11 w-full focus:border-green-700 transition-all"
              />
            </Surface>
            <Button
              variant="outline"
              className="border-neutral-200 bg-white rounded-sm text-neutral-600 size-11 shrink-0 p-0"
            >
              <Filter className="size-4" />
            </Button>
          </Flex>
          
          <Surface className="flex gap-2 w-full md:w-auto">
             <Button 
              variant="primary" 
              className="bg-green-700 hover:bg-green-800 text-white rounded-sm font-sans font-bold text-xs uppercase tracking-widest px-8 h-11 shadow-brand"
            >
                Commit RBAC Changes
             </Button>
          </Surface>
        </Card.Header>

        <Card.Content className="p-0 overflow-hidden">
          <Table aria-label="Members Directory for Role Assignment">
            <Table.ScrollContainer>
              <Table.Content>
                <Table.Header>
                  <Table.Column className="bg-neutral-50 text-neutral-500 font-sans font-black text-2xs uppercase tracking-widest px-6 py-4 border-b border-neutral-100">MEMBER ID</Table.Column>
                  <Table.Column className="bg-neutral-50 text-neutral-500 font-sans font-black text-2xs uppercase tracking-widest px-6 py-4 border-b border-neutral-100">FULL NAME / LGA</Table.Column>
                  <Table.Column className="bg-neutral-50 text-neutral-500 font-sans font-black text-2xs uppercase tracking-widest px-6 py-4 border-b border-neutral-100">INTEGRITY STATUS</Table.Column>
                  <Table.Column className="bg-neutral-50 text-neutral-500 font-sans font-black text-2xs uppercase tracking-widest px-6 py-4 border-b border-neutral-100">STRUCTURAL CLEARANCE (ROLE)</Table.Column>
                  <Table.Column className="bg-neutral-50 text-neutral-500 font-sans font-black text-2xs uppercase tracking-widest px-6 py-4 border-b border-neutral-100 text-right">AUTHORIZATION</Table.Column>
                </Table.Header>
                <Table.Body>
                  {members.map((member) => (
                    <Table.Row key={member.id} className="hover:bg-neutral-50/50 transition-colors">
                      <Table.Cell className="px-6 py-5 border-b border-neutral-50">
                        <Text variant="mono" className="font-black text-xs text-neutral-500 bg-neutral-50 border border-neutral-100 px-2 py-1 rounded-sm">
                          {member.id}
                        </Text>
                      </Table.Cell>
                      <Table.Cell className="px-6 py-5 border-b border-neutral-50">
                        <Stack gap="none">
                          <Text className="font-bold text-sm text-green-900">{member.name}</Text>
                          <Text className="text-2xs font-bold text-neutral-400 uppercase tracking-widest">{member.lga}</Text>
                        </Stack>
                      </Table.Cell>
                      <Table.Cell className="px-6 py-5 border-b border-neutral-50">
                        {member.status === "VERIFIED" ? (
                          <Chip size="sm" className="font-black border border-green-200 bg-green-50 text-green-700 tracking-widest text-[9px] uppercase rounded-sm">
                            NIN SECURED
                          </Chip>
                        ) : (
                          <Chip size="sm" className="font-black border border-gold-200 bg-gold-50 text-gold-700 tracking-widest text-[9px] uppercase rounded-sm">
                            UNVERIFIED
                          </Chip>
                        )}
                      </Table.Cell>
                      <Table.Cell className="px-6 py-5 border-b border-neutral-50">
                        <Surface className="w-56">
                          <Select
                            isDisabled={member.status !== "VERIFIED"}
                            defaultValue={member.role}
                            className="font-sans"
                          >
                            <Select.Trigger className={[
                              "bg-white border-2 rounded-sm shadow-sm px-3 h-10 flex items-center justify-between transition-all",
                              member.role !== "MEMBER" ? "border-gold-500 bg-gold-50/20" : "border-neutral-100"
                            ].join(" ")}>
                              <Select.Value className="text-xs font-bold text-green-900 uppercase" />
                              <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover className="border border-neutral-100 shadow-xl rounded-sm">
                              <ListBox className="p-2 bg-white">
                                <ListBox.Item id="MEMBER" textValue="Standard Member" className="rounded-sm p-3 hover:bg-green-50 text-green-900 font-bold text-xs uppercase tracking-widest">Standard Member</ListBox.Item>
                                <ListBox.Item id="WARD_COORDINATOR" textValue="Ward Coordinator" className="rounded-sm p-3 hover:bg-green-50 text-green-900 font-bold text-xs uppercase tracking-widest">Ward Coordinator</ListBox.Item>
                                <ListBox.Item id="LGA_COORDINATOR" textValue="LGA Coordinator" className="rounded-sm p-3 hover:bg-green-50 text-green-900 font-bold text-xs uppercase tracking-widest">LGA Coordinator</ListBox.Item>
                                <ListBox.Item id="STATE_COMMAND" textValue="State Command" className="rounded-sm p-3 hover:bg-green-50 text-green-900 font-bold text-xs uppercase tracking-widest">State Command</ListBox.Item>
                              </ListBox>
                            </Select.Popover>
                          </Select>
                        </Surface>
                      </Table.Cell>
                      <Table.Cell className="px-6 py-5 border-b border-neutral-50 text-right">
                         <Flex justify="end">
                          <Button 
                              size="sm" 
                              variant="ghost" 
                              className={[
                                "h-9 px-4 font-sans font-bold text-2xs uppercase tracking-widest rounded-sm transition-all",
                                member.status !== "VERIFIED" ? "text-neutral-300 pointer-events-none" : "text-green-700 hover:bg-green-50"
                              ].join(" ")}
                          >
                            {member.role !== "MEMBER" ? <CheckCircle2 className="size-3 mr-2" /> : <Key className="size-3 mr-2" />}
                            {member.role !== "MEMBER" ? "Active" : "Grant Access"}
                          </Button>
                         </Flex>
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
                  Showing top 4 administrative candidates
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
