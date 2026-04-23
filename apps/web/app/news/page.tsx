"use client"

import * as React from "react"
import Link from "next/link"
import { Header, Footer, Section, Container, Heading, Text, Logo, Surface, Stack, Flex, Grid, cn, getPortalLink, Button as HSDButton } from "@hsdnm/ui"
import { Card, Button, Pagination } from "@heroui/react"
import { Calendar, ArrowRight } from "lucide-react"

/* ══════════════════════════════════════════════════════════════
   HSDNM News & Press — Institutional Archive
   Brand Guide 2026 · § News & Directives
   - Mandatory Primitive Structure
   - Solid Color Boundaries
   - DM Sans / Playfair Display Pure Implementation
 ══════════════════════════════════════════════════════════════ */

export default function NewsPage() {
  const [currentPage, setCurrentPage] = React.useState(1)
  const totalPages = 3

  const articles = [
    {
      id: 1,
      tag: "Press Release",
      title: "HSDNM Launches Digital Directory for Verified Grassroots Footprint",
      date: "September 15, 2025",
      excerpt: "In a move to secure the structural integrity of the movement, the National Directorate introduces the mandatory identity verification platform linked to the NIN subsystem...",
    },
    {
      id: 2,
      tag: "Policy Statement",
      title: "Consolidating Security and Development in the Niger Delta",
      date: "August 28, 2025",
      excerpt: "Senator Dickson outlines the crucial blueprint required to sustain the hard-won peace and infrastructural gains within the region moving into the new operational year...",
    },
    {
      id: 3,
      tag: "Town Hall",
      title: "Abuja National Coordination Summit Scheduled for Q4",
      date: "August 10, 2025",
      excerpt: "State Coordinators across the 36 states are summoned to aggregate the grassroots data required to push forward the legislative and mobilization agenda...",
    },
    {
      id: 4,
      tag: "Movement News",
      title: "Over 50,000 Verified Members Synchronized in Bayelsa",
      date: "July 22, 2025",
      excerpt: "The first phase of the structural enrollment captures a massive influx of verified members in the home state, demonstrating organic loyalty...",
    },
    {
      id: 5,
      tag: "Statement",
      title: "Reaffirming Institutional Independence",
      date: "July 05, 2025",
      excerpt: "The Directorate issues a formal statement strictly delineating the movement from partisan affiliations while maintaining its value-driven civic mobilization strategy...",
    },
    {
      id: 6,
      tag: "Event Summary",
      title: "Inauguration of the LGA Coordinators Framework",
      date: "June 18, 2025",
      excerpt: "All 774 local government areas now have activated command nodes. Read the summary of the inauguration ceremony and the directives issued...",
    }
  ]

  return (
    <Surface className="flex min-h-screen flex-col font-sans animate-brand-fade">
      <Header>
        <Surface className="flex items-center gap-8">
          <Link href="/" className="text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/policy" className="text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white transition-colors">
             Policy
          </Link>
          <Link href="/events" className="text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white transition-colors">
             Events
          </Link>
          <Link href="/news" className="text-xs font-semibold uppercase tracking-widest text-gold-500 font-bold transition-colors">
             News
          </Link>
          <HSDButton variant="accent" className="flex items-center justify-center h-10 px-5 text-xs tracking-wider" as={Link} href={getPortalLink("/register")}>
            Join Movement
          </HSDButton>
        </Surface>
      </Header>

      <Surface className="flex-1 w-full bg-neutral-50 overflow-hidden">
        {/* Banner Section */}
        <Surface className="bg-green-900 border-b-[3px] border-gold-500 relative overflow-hidden py-24 md:py-32">
          <Surface className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
             <Logo size="xl" variant="seal" className="scale-[6] opacity-30" />
          </Surface>
          <Container className="relative z-10 text-center">
            <Flex direction="col" align="center">
              <Surface className="bg-gold-500 text-green-950 px-4 py-1.5 rounded-sm border border-gold-400 mb-8">
                <Text variant="xs" className="font-black tracking-40 m-0">Official Press Center</Text>
              </Surface>
              <Heading level="display-1" className="text-white mb-6">
                News & Directives
              </Heading>
              <Text variant="lead" className="text-white/80 max-w-2xl mx-auto">
                Immutable records of official communications, policy positions, and organizational milestones.
              </Text>
            </Flex>
          </Container>
        </Surface>

        {/* Content Section */}
        <Section className="py-20 bg-neutral-50">
          <Container>
            <Grid cols={{ sm: 1, md: 2, lg: 3 }} gap="lg">
              {articles.map((article) => (
                <Card 
                  key={article.id} 
                  className="bg-white border-2 border-neutral-100 text-left shadow-sm rounded-sm hover:border-green-700 hover:shadow-brand transition-all flex flex-col h-full group"
                >
                  <Card.Header className="flex-col items-start px-8 pt-8 pb-4 gap-4 !border-b-0">
                    <Surface className="bg-gold-50 px-3 py-1.5 rounded-sm border border-gold-100 text-gold-700">
                       <Text variant="xs" className="font-black tracking-widest m-0">{article.tag}</Text>
                    </Surface>
                    <Heading level={2} className="text-green-900 m-0 leading-tight group-hover:text-green-700 transition-colors">
                      {article.title}
                    </Heading>
                  </Card.Header>
                  <Card.Content className="px-8 py-2 flex-grow">
                    <Flex align="center" gap="xs" className="text-neutral-400 mb-6">
                      <Calendar className="size-3.5" />
                      <Text variant="mono" className="text-2xs uppercase tracking-widest">{article.date}</Text>
                    </Flex>
                    <Text variant="body" className="text-neutral-600 leading-relaxed m-0 line-clamp-4">
                      {article.excerpt}
                    </Text>
                  </Card.Content>
                  <Surface className="px-8 pb-8 pt-6 mt-auto">
                    <Button 
                      variant="ghost" 
                      className="group/btn flex items-center justify-between w-full border-2 border-neutral-100 hover:border-green-700 hover:bg-green-50 transition-all px-4 h-12 rounded-sm"
                    >
                      <Text variant="xs" className="font-black text-neutral-900 group-hover/btn:text-green-700">Read Full Report</Text>
                      <ArrowRight className="size-4 text-gold-500 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Surface>
                </Card>
              ))}
            </Grid>
            
            <Surface className="mt-16 flex justify-center w-full">
              <Pagination size="md" className="bg-white rounded-sm border-2 border-neutral-100 p-2">
                <Pagination.Content className="flex items-center gap-2">
                  <Pagination.Item>
                    <Pagination.Previous 
                      isDisabled={currentPage === 1}
                      onPress={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      className="bg-neutral-50 px-4 h-10 rounded-sm text-2xs font-bold uppercase tracking-widest text-green-700"
                    >
                      Previous
                    </Pagination.Previous>
                  </Pagination.Item>
                  <Pagination.Item>
                    <Pagination.Link 
                      isActive={currentPage === 1} 
                      onPress={() => setCurrentPage(1)}
                      className={cn("size-10 rounded-sm text-xs font-bold", currentPage === 1 ? "bg-green-700 text-white" : "text-neutral-500 hover:bg-neutral-50")}
                    >
                      1
                    </Pagination.Link>
                  </Pagination.Item>
                  <Pagination.Item>
                    <Pagination.Link 
                      isActive={currentPage === 2} 
                      onPress={() => setCurrentPage(2)}
                      className={cn("size-10 rounded-sm text-xs font-bold", currentPage === 2 ? "bg-green-700 text-white" : "text-neutral-500 hover:bg-neutral-50")}
                    >
                      2
                    </Pagination.Link>
                  </Pagination.Item>
                  <Pagination.Item>
                    <Pagination.Next 
                      isDisabled={currentPage === totalPages}
                      onPress={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                      className="bg-neutral-50 px-4 h-10 rounded-sm text-2xs font-bold uppercase tracking-widest text-green-700"
                    >
                      Next
                    </Pagination.Next>
                  </Pagination.Item>
                </Pagination.Content>
              </Pagination>
            </Surface>
          </Container>
        </Section>
      </Surface>

      <Footer>
        <Stack gap="md">
          <Heading level={4} className="text-white m-0">Platform</Heading>
          <Stack gap="sm">
            {[
              { label: "The Vision", href: "/" },
              { label: "About", href: "/about" },
              { label: "Policy Positions", href: "/policy" },
              { label: "Town Hall Events", href: "/events" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="text-white/60 hover:text-white text-sm transition-colors">
                {l.label}
              </Link>
            ))}
          </Stack>
        </Stack>
        <Stack gap="md">
          <Heading level={4} className="text-white m-0">Network</Heading>
          <Stack gap="sm">
            <Link href="/news" className="text-gold-500 font-bold text-sm transition-colors">News & Press</Link>
            <Link href={getPortalLink("/dashboard")} className="text-white/60 hover:text-white text-sm transition-colors">Secure Portal</Link>
            <Link href={getPortalLink("/register")} className="text-white/60 hover:text-white text-sm transition-colors">Member Registry</Link>
            <Link href="/contact" className="text-white/60 hover:text-white text-sm transition-colors">Institutional Support</Link>
          </Stack>
        </Stack>
      </Footer>
    </Surface>
  )
}
