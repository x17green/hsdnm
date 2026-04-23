"use client"

import * as React from "react"
import Link from "next/link"
import { Header, Footer, Section, Container, Heading, Text, Logo, Surface, Stack, Flex, cn, getPortalLink, Button as HSDButton } from "@hsdnm/ui"
import { Accordion, AccordionItem, Card } from "@heroui/react"
import { ShieldCheck, BookOpen, HeartPulse, Building2, TrendingUp } from "lucide-react"

/* ══════════════════════════════════════════════════════════════
   HSDNM Public Policy — Institutional Playbook
   Brand Guide 2026 · § Institutional Authority
   - Pure Primitive Architecture
   - Zero Transparent Borders
   - Authorized Typography
 ══════════════════════════════════════════════════════════════ */

export default function PolicyPage() {
  const policies = [
    {
      id: "institutional-reform",
      title: "Institutional Reform & Governance",
      icon: <ShieldCheck className="text-gold-500 size-5" />,
      content: "The bedrock of the movement lies in reinforcing the separation of powers, empowering the judiciary, and ensuring that government institutions run on meritocracy rather than political patronage. True stability is born when institutions outlive their creators."
    },
    {
      id: "education",
      title: "Educational Subsidies & Infrastructure",
      icon: <BookOpen className="text-green-700 size-5" />,
      content: "Drawing mapped strategies from the Bayelsa Educational Development Trust Fund, the movement advocates for dedicating a minimum constitutional percentage of geopolitical revenues to aggressive educational expansion, boarding facilities, and teacher welfare."
    },
    {
      id: "healthcare",
      title: "Grassroots Health Insurance Coverage",
      icon: <HeartPulse className="text-green-700 size-5" />,
      content: "Decentralizing healthcare access via state-backed insurance schemes that capture the informal sector. A healthy population is the baseline for economic productivity."
    },
    {
      id: "infrastructure",
      title: "The Blue Economy & Deep Sea Architecture",
      icon: <Building2 className="text-green-700 size-5" />,
      content: "Maximizing the littoral advantages of the Niger Delta through deliberate federal investments in deep seaport infrastructure, road connectivity linking hinterlands to coastal trade routes, and modernized aquaculture."
    },
    {
      id: "economy",
      title: "Economic Diversification & SME Grants",
      icon: <TrendingUp className="text-green-700 size-5" />,
      content: "Transitioning structurally away from oil dependency by empowering small and medium enterprises with zero-interest, long-tenure structural grants targeted primarily at youth and women."
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
          <Link href="/policy" className="text-xs font-semibold uppercase tracking-widest text-gold-500 font-bold transition-colors">
             Policy
          </Link>
          <Link href="/events" className="text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white transition-colors">
             Events
          </Link>
          <Link href="/news" className="text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white transition-colors">
             News
          </Link>
          <HSDButton variant="accent" className="flex items-center justify-center h-10 px-5 text-xs tracking-wider" as={Link} href={getPortalLink("/register")}>
            Join Movement
          </HSDButton>
        </Surface>
      </Header>

      <Surface className="flex-1 w-full bg-neutral-50 overflow-hidden">
        {/* Hero Section */}
        <Surface className="bg-green-900 border-b-[3px] border-gold-500 relative overflow-hidden py-24 md:py-32">
          <Surface className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
             <Logo size="xl" variant="seal" className="scale-[6] opacity-30" />
          </Surface>
          <Container className="relative z-10">
            <Flex direction="col" align="center" className="text-center">
              <Surface className="inline-flex items-center bg-gold-500 text-green-950 px-4 py-1.5 rounded-sm mb-8">
                <Text variant="xs" className="font-black tracking-40 m-0">Official Playbook</Text>
              </Surface>
              <Heading level="display-1" className="text-white mb-6">
                Policy Positions
              </Heading>
              <Text variant="lead" className="text-white/80 max-w-2xl mx-auto">
                The ideological boundaries, strategic directives, and governance manifesto governing the decisions of the movement.
              </Text>
            </Flex>
          </Container>
        </Surface>

        {/* Content Section */}
        <Section className="py-20 bg-neutral-50">
          <Container className="max-w-4xl">
            <Card className="bg-white border-2 border-neutral-100 shadow-sm rounded-sm overflow-hidden">
              <Card.Content className="p-0">
                <Accordion 
                  variant="surface"
                  className="w-full"
                >
                  {policies.map((pol) => (
                    <Accordion.Item key={pol.id} id={pol.id}>
                      <Accordion.Trigger className="rounded-none px-8 py-6 hover:bg-neutral-50 transition-colors border-b border-neutral-50">
                        <Flex align="center" gap="md">
                          <Surface className="size-12 bg-green-50 flex items-center justify-center rounded-sm border border-green-100 flex-shrink-0">
                            {pol.icon}
                          </Surface>
                          <Heading level={2} className="text-green-900 m-0 text-xl md:text-2xl">
                            {pol.title}
                          </Heading>
                        </Flex>
                      </Accordion.Trigger>
                      <Accordion.Body className="bg-white px-8 py-10">
                        <Stack gap="lg">
                          <Text variant="body" className="text-neutral-600 text-lg leading-relaxed">
                            {pol.content}
                          </Text>
                          
                          <Surface className="pt-6 border-t border-neutral-100">
                            <Flex justify="between" align="center" gap="md" wrap>
                              <Text variant="xs" className="font-black text-neutral-400">Institutional Mandate Verification</Text>
                              <Flex gap="sm">
                                <Surface className="bg-neutral-100 text-neutral-600 px-3 py-1 rounded-sm text-2xs font-bold uppercase tracking-widest">Q3 2025</Surface>
                                <Surface className="bg-green-100 text-green-700 border border-green-200 px-3 py-1 rounded-sm text-2xs font-bold uppercase tracking-widest">Active Mandate</Surface>
                              </Flex>
                            </Flex>
                          </Surface>
                        </Stack>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </Card.Content>
            </Card>
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
              <Link key={l.label} href={l.href} className={cn("text-sm transition-colors", l.href === "/policy" ? "text-gold-500 font-bold" : "text-white/60 hover:text-white")}>
                {l.label}
              </Link>
            ))}
          </Stack>
        </Stack>
        <Stack gap="md">
          <Heading level={4} className="text-white m-0">Network</Heading>
          <Stack gap="sm">
            <Link href="/news" className="text-white/60 hover:text-white text-sm transition-colors">News & Press</Link>
            <Link href={getPortalLink("/dashboard")} className="text-white/60 hover:text-white text-sm transition-colors">Secure Portal</Link>
            <Link href={getPortalLink("/register")} className="text-white/60 hover:text-white text-sm transition-colors">Member Registry</Link>
            <Link href="/contact" className="text-white/60 hover:text-white text-sm transition-colors">Institutional Support</Link>
          </Stack>
        </Stack>
      </Footer>
    </Surface>
  )
}
