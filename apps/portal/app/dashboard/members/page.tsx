"use client"

import * as React from "react"
import Link from "next/link"
import { Heading, Text, Stack, Surface } from "@hsdnm/ui"
import { 
  Users, UserPlus, Filter, Download, 
  Search, MoreHorizontal, ChevronDown, CheckCircle2,
  AlertCircle
} from "lucide-react"

import {
  Table,
  Input,
  Pagination,
  Chip,
  Dropdown,
  Label,
} from "@heroui/react"
import { Button } from "@hsdnm/ui"

/* ══════════════════════════════════════════════════════════════
   HSDNM Portal — Member Directory
   Inherits layout from ../layout.tsx
══════════════════════════════════════════════════════════════ */

interface Member {
  id: string
  memberId: string
  name: string
  phone: string
  ward: string
  lga: string
  state: string
  status: "Active" | "Suspended"
  joinDate: string
}

const mockMembers: Member[] = [
  { id: "1", memberId: "HSD-SS-BYS-0001", name: "Henry Seriake Dickson", phone: "08012345678", ward: "Toru-Orua", lga: "Sagbama", state: "Bayelsa", status: "Active", joinDate: "2026-01-10" },
  { id: "2", memberId: "HSD-SS-BYS-0002", name: "Endurance Amagbe", phone: "08023456789", ward: "Sagbama Ward 1", lga: "Sagbama", state: "Bayelsa", status: "Active", joinDate: "2026-01-12" },
  { id: "3", memberId: "HSD-SS-BYS-0003", name: "Perewei Tari", phone: "08034567890", ward: "Ekeremor Town", lga: "Ekeremor", state: "Bayelsa", status: "Active", joinDate: "2026-02-05" },
  { id: "4", memberId: "HSD-SS-BYS-0004", name: "Preye Joshua", phone: "08045678901", ward: "Oporoma", lga: "Southern Ijaw", state: "Bayelsa", status: "Suspended", joinDate: "2026-02-18" },
  { id: "5", memberId: "HSD-SS-BYS-0005", name: "Diepreye Alabo", phone: "08056789012", ward: "Agbura", lga: "Yenagoa", state: "Bayelsa", status: "Active", joinDate: "2026-03-01" },
]

export default function MembersDirectoryPage() {
  const [page, setPage] = React.useState(1)
  const totalPages = 3

  const statusColorMap: Record<string, "success" | "danger" | "warning"> = {
    Active: "success",
    Suspended: "danger",
  }

  return (
    <Surface className="flex flex-col animate-brand-fade">
      {/* Header section */}
      <Surface className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
        <Stack gap="xs">
          <Surface className="flex items-center gap-3">
            <Surface className="size-10 rounded-sm bg-gold-50 border border-gold-200 flex items-center justify-center shrink-0">
              <Users className="size-5 text-gold-500" />
            </Surface>
            <Heading level={2} mode="primary" className="text-2xl m-0">
              Member Directory
            </Heading>
          </Surface>
          <Text variant="small" mode="muted" className="pl-12">
            View, search, and manage registered movement members in your region.
          </Text>
        </Stack>
        <Surface className="flex items-center gap-3 shrink-0">
          <Button
            variant="outline"
            className="flex-1 md:flex-none h-11 px-6 border-2 border-neutral-100 rounded-sm text-2xs font-black uppercase tracking-widest text-neutral-600 hover:bg-neutral-50 transition-all font-sans"
          >
            <Download className="size-4 mr-2" />
            Export CSV
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

      {/* Filters and Search */}
      <Surface className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <Surface className="w-full sm:max-w-md relative border border-neutral-200 bg-white rounded-sm shadow-sm flex items-center h-10">
          <Search className="size-4 text-neutral-400 absolute left-3 z-10" />
          <Input 
            placeholder="Search by name, NIN, or Member ID..." 
            className="w-full h-full font-sans pl-10 bg-transparent border-none shadow-none text-sm"
          />
        </Surface>
        <Surface className="flex items-center gap-3 w-full sm:w-auto">
          <Dropdown>
            <Dropdown.Trigger>
              <Button 
                variant="outline" 
                className="rounded-sm border-neutral-200 text-neutral-600 bg-white shadow-sm font-sans flex items-center gap-2"
              >
                <Filter className="size-4 text-neutral-400" />
                <Text variant="small">Filter: All LGAs</Text>
                <ChevronDown className="size-4" />
              </Button>
            </Dropdown.Trigger>
            <Dropdown.Popover>
              <Dropdown.Menu aria-label="LGA Filters">
                <Dropdown.Item id="all">All LGAs</Dropdown.Item>
                <Dropdown.Item id="sagbama">Sagbama</Dropdown.Item>
                <Dropdown.Item id="yenagoa">Yenagoa</Dropdown.Item>
                <Dropdown.Item id="ekeremor">Ekeremor</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>
          <Dropdown>
            <Dropdown.Trigger>
              <Button 
                variant="outline" 
                className="rounded-sm border-neutral-200 text-neutral-600 bg-white shadow-sm font-sans flex items-center gap-2"
              >
                <Text variant="small">Status: All</Text>
                <ChevronDown className="size-4" />
              </Button>
            </Dropdown.Trigger>
            <Dropdown.Popover>
              <Dropdown.Menu aria-label="Status Filters">
                <Dropdown.Item id="all">All Statuses</Dropdown.Item>
                <Dropdown.Item id="active">
                  <Surface className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-green-700" />
                    <Text variant="small">Active</Text>
                  </Surface>
                </Dropdown.Item>
                <Dropdown.Item id="suspended">
                  <Surface className="flex items-center gap-2">
                    <AlertCircle className="size-4 text-red-600" />
                    <Text variant="small">Suspended</Text>
                  </Surface>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>
        </Surface>
      </Surface>

      {/* Main Table */}
      <Surface className="border border-neutral-200 rounded-sm overflow-hidden bg-white shadow-sm">
        <Table aria-label="HSDNM Members Directory Table" className="w-full">
          <Table.ScrollContainer>
            <Table.Content>
              <Table.Header className="bg-green-900 border-none">
                <Table.Column isRowHeader className="text-white font-bold text-xs uppercase tracking-wider h-12">Member ID</Table.Column>
                <Table.Column className="text-white font-bold text-xs uppercase tracking-wider h-12">Name</Table.Column>
                <Table.Column className="text-white font-bold text-xs uppercase tracking-wider h-12">Contact</Table.Column>
                <Table.Column className="text-white font-bold text-xs uppercase tracking-wider h-12">Location</Table.Column>
                <Table.Column className="text-white font-bold text-xs uppercase tracking-wider h-12">Status</Table.Column>
                <Table.Column className="text-white font-bold text-xs uppercase tracking-wider h-12">Join Date</Table.Column>
                <Table.Column className="text-white font-bold text-xs uppercase tracking-wider h-12">Actions</Table.Column>
              </Table.Header>
              <Table.Body>
                {mockMembers.map((member) => (
                  <Table.Row key={member.id} className="border-b border-neutral-100 last:border-none hover:bg-neutral-50 transition-colors">
                    <Table.Cell>
                      <Text variant="mono" className="font-bold text-green-900 bg-gold-50 border border-gold-100 px-2 py-1 rounded-sm whitespace-nowrap inline-block">
                        {member.memberId}
                      </Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text className="font-semibold text-sm text-green-900 whitespace-nowrap">{member.name}</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text variant="mono" className="text-xs text-neutral-500 whitespace-nowrap">{member.phone}</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Stack gap="none" className="flex flex-col">
                        <Text className="text-sm font-medium text-green-900 whitespace-nowrap">{member.lga}</Text>
                        <Text variant="xs" className="text-neutral-500 whitespace-nowrap">{member.ward}</Text>
                      </Stack>
                    </Table.Cell>
                    <Table.Cell>
                      <Chip color={statusColorMap[member.status]} size="sm" variant="secondary" className="rounded-sm uppercase tracking-wider text-xs font-bold">
                        {member.status}
                      </Chip>
                    </Table.Cell>
                    <Table.Cell>
                      <Text variant="small" className="text-neutral-500 whitespace-nowrap">{member.joinDate}</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Dropdown>
                        <Dropdown.Trigger>
                          <Button isIconOnly variant="ghost" className="text-neutral-500 hover:text-green-700 transition-colors">
                            <MoreHorizontal className="size-4" />
                          </Button>
                        </Dropdown.Trigger>
                        <Dropdown.Popover>
                          <Dropdown.Menu aria-label="Member Actions">
                            <Dropdown.Item id="view" textValue="View Full Profile">
                              <Label>View Full Profile</Label>
                            </Dropdown.Item>
                            <Dropdown.Item id="download" textValue="Download ID Card">
                              <Label>Download ID Card</Label>
                            </Dropdown.Item>
                            <Dropdown.Item id="suspend" textValue="Suspend Member" variant="danger">
                              <Label>Suspend Member</Label>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown.Popover>
                      </Dropdown>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
          <Table.Footer>
            <Surface className="flex w-full items-center justify-between p-4 border-t border-neutral-100 bg-transparent">
              <Pagination
                size="sm"
                className="w-full"
              >
                <Pagination.Summary>
                   <Text variant="xs" mode="muted" className="font-bold uppercase tracking-widest">Showing 1 to 5 of 12,482 members</Text>
                </Pagination.Summary>
                <Pagination.Content>
                   <Pagination.Item>
                     <Pagination.Previous 
                       isDisabled={page === 1}
                       onPress={() => setPage(p => Math.max(1, p - 1))}
                       className="flex items-center gap-1.5"
                     >
                       <Pagination.PreviousIcon />
                       <Text variant="small">Previous</Text>
                     </Pagination.Previous>
                   </Pagination.Item>
                   <Pagination.Item>
                     <Pagination.Link isActive={page === 1} onPress={() => setPage(1)}>
                       <Text variant="small">1</Text>
                     </Pagination.Link>
                   </Pagination.Item>
                   <Pagination.Item>
                     <Pagination.Ellipsis />
                   </Pagination.Item>
                   <Pagination.Item>
                     <Pagination.Next 
                       isDisabled={page === totalPages}
                       onPress={() => setPage(p => Math.min(totalPages, p + 1))}
                       className="flex items-center gap-1.5"
                     >
                       <Text variant="small">Next</Text>
                       <Pagination.NextIcon />
                     </Pagination.Next>
                   </Pagination.Item>
                </Pagination.Content>
              </Pagination>
            </Surface>
          </Table.Footer>
        </Table>
      </Surface>
    </Surface>
  )
}
