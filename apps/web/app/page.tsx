"use client"

import * as React from "react"
import Link from "next/link"
import {
  Button as HSDButton,
  Logo,
  Header,
  Footer,
  Badge,
  Heading,
  Text,
  Section,
  Stack,
  BrandBadge,
  Kicker,
  Surface,
  getPortalLink,
} from "@hsdnm/ui"
import { Card } from "@heroui/react"
import {
  Users,
  Landmark,
  Globe,
  Scale,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
} from "lucide-react"

/* ══════════════════════════════════════════════════════════════
   HSDNM Web — Public Landing Page
   Content sourced directly from HSDNM Independent Operating Manual
   Brand Guide 2026 · 60-30-10 color architecture
══════════════════════════════════════════════════════════════ */

/* §3 Core Values — direct from Operating Manual */
const coreValues = [
  { label: "Integrity",    desc: "In leadership and followership at every level of the movement." },
  { label: "Accountability", desc: "In all actions and decisions — to our members and to Nigeria." },
  { label: "Democracy",    desc: "Respect for democratic institutions and constitutional governance." },
  { label: "Inclusion",    desc: "Across ethnic, religious, and social lines in our great nation." },
  { label: "Courage",      desc: "The courage to speak truth to power, always and without compromise." },
  { label: "Discipline",   desc: "In organisation and communication at every tier of the movement." },
]

/* §4 Organizational structure — direct from Operating Manual */
const orgTiers = [
  {
    num: "01",
    tier: "National Leadership Council",
    desc: "Responsible for policy direction, strategic decisions, and national coordination of the movement.",
  },
  {
    num: "02",
    tier: "State Chapters",
    desc: "Implement national directives while adapting to state realities across all 36 states.",
  },
  {
    num: "03",
    tier: "Local Government Units",
    desc: "Drive grassroots mobilisation and community engagement across all 774 LGAs.",
  },
  {
    num: "04",
    tier: "Ward Coordinators",
    desc: "Serve as the closest link to the people, ensuring participation at the grassroots.",
  },
]

/* §2 Mission — from Operating Manual */
const missionHighlights = [
  {
    icon: Users,
    title: "Citizen Mobilisation",
    desc: "We mobilise citizens — especially young Nigerians — toward active participation in governance, policy advocacy, and leadership accountability.",
  },
  {
    icon: Landmark,
    title: "Responsible Leadership",
    desc: "The movement advances the democratic ideals and public service legacy of Sen. Henry Seriake Dickson, rooted in accountability to the people.",
  },
  {
    icon: Scale,
    title: "Democratic Stability",
    desc: "We promote responsible leadership and democratic stability as the foundation for inclusive national development across all 36 states.",
  },
  {
    icon: Globe,
    title: "National Spread",
    desc: "Through our four-tier structure, we reach every ward, every local government, and every state — leaving no Nigerian behind.",
  },
]

const newsItems = [
  {
    category: "Movement Update",
    headline: "HSDNM Launches Nationwide Ward Coordinator Registration Drive",
    time: "Latest",
  },
  {
    category: "Governance",
    headline: "Sen. Dickson Calls for Stronger Federal Commitment to South-South Development",
    time: "This Week",
  },
  {
    category: "Digital Platform",
    headline: "Secure NIN-Verified Membership Portal Now Open for All Nigerians",
    time: "New",
  },
]

export default function LandingPage() {
  return (
    <Surface className="flex min-h-screen flex-col font-sans selection:bg-gold-500/25">

      {/* ── HEADER ── */}
      <Header
        variant="full"
        logoSize="lg"
      >
        <Surface className="flex items-center gap-8">
          <Link href="#mission" className="text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white transition-colors hidden md:block">
            Our Mission
          </Link>
          <Link href="#structure" className="text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white transition-colors hidden md:block">
            Structure
          </Link>
          <Link href="#values" className="text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white transition-colors hidden md:block">
            Core Values
          </Link>
          <Link href="/policy" className="text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white transition-colors hidden lg:block">
            Policy
          </Link>
          <Link href="/events" className="text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white transition-colors hidden lg:block">
            Events
          </Link>
          <Link href="/news" className="text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white transition-colors hidden md:block">
            News
          </Link>
          <HSDButton variant="accent" className="flex items-center justify-center h-10 px-5 text-xs tracking-wider" as={Link} href={getPortalLink("/register")}>
            Join the Movement
          </HSDButton>
        </Surface>
      </Header>

      <Surface className="flex-1">

        {/* ══════════════
            HERO — 30% Brand Layer
        ══════════════ */}
        <Section variant="hero">
          <Surface className="max-w-4xl animate-brand-fade">
            <Stack gap="lg">
              <BrandBadge variant="white">
                National Movement · Est. 2026 · Federal Republic of Nigeria
              </BrandBadge>
              <Heading level={1} mode="white" shadow="gold">
                Mobilising Nigerians for{" "}
                <Surface className="text-gold-400 underline decoration-gold-500/30 underline-offset-8">
                  Responsible Leadership.
                </Surface>
              </Heading>
              <Text variant="lead" mode="white" className="max-w-3xl opacity-85">
                The Sen. Henry Seriake Dickson National Movement is a value-driven civic
                and political mobilisation platform. We mobilise citizens — especially
                young Nigerians — toward active participation in governance, policy
                advocacy, and leadership accountability.
              </Text>
              <Surface className="flex flex-col sm:flex-row gap-4 pt-4">
                <HSDButton variant="accent" className="flex items-center justify-center gap-2 h-12 px-6 text-xs uppercase tracking-wider" as={Link} href={getPortalLink("/register")}>
                  Join the Movement <ChevronRight className="size-4" />
                </HSDButton>
                <HSDButton variant="outline-dark" className="flex items-center justify-center gap-2 h-12 px-6 text-xs uppercase tracking-wider" as={Link} href="#mission">
                  Our Mission <ArrowRight className="size-4" />
                </HSDButton>
              </Surface>
            </Stack>
          </Surface>
        </Section>

        {/* ══════════════
            STATS BAR — Surface
        ══════════════ */}
        <Section variant="default" spacing="sm" className="border-b border-neutral-200">
          <Surface className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "36",    label: "State Chapters" },
              { value: "774",   label: "Local Government Units" },
              { value: "4",     label: "Organisational Tiers" },
              { value: "2026",  label: "Movement Year" },
            ].map((s) => (
              <Surface key={s.label} className="flex flex-col items-center text-center gap-1 py-4">
                <Surface className="font-serif font-black text-4xl md:text-5xl text-green-700 leading-none">{s.value}</Surface>
                <Surface className="text-xs font-semibold uppercase tracking-widest text-neutral-500">{s.label}</Surface>
              </Surface>
            ))}
          </Surface>
        </Section>

        {/* ══════════════
            VISION & MISSION — §2 Operating Manual
        ══════════════ */}
        <Section id="mission">
          <Surface className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            <Stack gap="lg" className="lg:col-span-5">
              <Kicker>§2 Vision &amp; Mission</Kicker>
              <Stack gap="sm">
                <Surface className="flex items-center gap-3 mb-1">
                  <Surface className="h-px w-8 bg-gold-500/50 shrink-0">{null}</Surface>
                  <Surface className="text-xs font-semibold uppercase tracking-widest text-gold-600">Vision</Surface>
                </Surface>
                <Heading level={2} mode="primary">
                  Nationwide movement. Responsible leadership. Inclusive development.
                </Heading>
              </Stack>
              <Text variant="body" mode="muted">
                To build a nationwide movement that promotes responsible leadership,
                democratic stability, and inclusive national development.
              </Text>
              <Surface className="bg-green-50 border border-green-200 rounded-md p-6">
                <Surface className="flex items-center gap-3 mb-3">
                  <Surface className="h-px w-8 bg-gold-500/50 shrink-0">{null}</Surface>
                  <Surface className="text-xs font-semibold uppercase tracking-widest text-gold-600">Mission</Surface>
                </Surface>
                <Text variant="body" mode="brand">
                  To mobilise citizens, especially young people, toward active participation
                  in governance, policy advocacy, and leadership accountability — while
                  advancing the ideals associated with Senator Henry Seriake Dickson.
                </Text>
              </Surface>
            </Stack>

            {/* Mission pillars */}
            <Surface className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {missionHighlights.map((p, i) => (
                <Card
                  key={i}
                  className="bg-white border border-neutral-200 rounded-sm hover:border-green-700 hover:shadow-brand transition-all duration-300 group"
                >
                  <Card.Content className="p-6">
                    <Stack gap="sm">
                      <Surface className="size-11 rounded-sm bg-green-50 flex items-center justify-center text-green-700 group-hover:bg-green-700 group-hover:text-white transition-all duration-300">
                        <p.icon className="size-5" />
                      </Surface>
                      <Heading level={4} mode="primary" className="leading-snug">{p.title}</Heading>
                      <Text variant="small" mode="muted">{p.desc}</Text>
                    </Stack>
                  </Card.Content>
                </Card>
              ))}
            </Surface>
          </Surface>
        </Section>

        {/* ══════════════
            CORE VALUES — §3 Operating Manual
        ══════════════ */}
        <Section variant="muted" id="values">
          <Stack gap="lg">
            <Surface className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <Stack gap="sm">
                <Kicker>§3 Core Values</Kicker>
                <Heading level={2} mode="primary">
                  What the Movement Stands For.
                </Heading>
                <Text variant="body" mode="muted" className="max-w-lg">
                  The movement operates on six founding principles, each binding on
                  every member — from ward coordinators to national leadership.
                </Text>
              </Stack>
            </Surface>
            <Surface className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {coreValues.map((v, i) => (
                <Surface
                  key={i}
                  className="bg-white p-6 rounded-sm border border-neutral-200 hover:border-green-700 hover:shadow-brand transition-all duration-300 group"
                >
                  <Surface className="flex items-start gap-4">
                    <Surface className="size-8 rounded-sm bg-gold-50 border border-gold-200 flex items-center justify-center shrink-0 mt-0.5
                                    group-hover:bg-gold-500 transition-colors">
                      <Surface className="text-xs font-mono font-bold text-gold-600 group-hover:text-white transition-colors">
                        0{i + 1}
                      </Surface>
                    </Surface>
                    <Surface>
                      <Heading level={5} mode="primary" className="mb-1.5">{v.label}</Heading>
                      <Text variant="small" mode="muted">{v.desc}</Text>
                    </Surface>
                  </Surface>
                </Surface>
              ))}
            </Surface>
          </Stack>
        </Section>

        {/* ══════════════
            ORG STRUCTURE — §4 Operating Manual
        ══════════════ */}
        <Section variant="primary" id="structure">
          <Surface className="relative overflow-hidden">
            <Surface className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,162,39,0.08)_0%,transparent_60%)] pointer-events-none">{null}</Surface>
            <Surface className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

              <Stack gap="md">
                <BrandBadge variant="gold">§4 Organisational Structure</BrandBadge>
                <Heading level={2} mode="white">
                  A Four-Tier Structure. National Reach. Grassroots Depth.
                </Heading>
                <Text variant="lead" mode="white" className="opacity-80">
                  To ensure efficiency and national spread, the movement adopts a
                  four-tier structure — from the National Leadership Council down to
                  Ward Coordinators in every community across Nigeria.
                </Text>
                <Surface className="mt-2">
                  <HSDButton variant="accent" className="flex items-center justify-center gap-2 h-12 px-6 text-xs uppercase tracking-wider self-start" as={Link} href={getPortalLink("/register")}>
                    Register as a Coordinator <ArrowRight className="size-4" />
                  </HSDButton>
                </Surface>
              </Stack>

              <Surface className="flex flex-col gap-3">
                {orgTiers.map((t) => (
                  <Surface
                    key={t.num}
                    className="flex gap-5 p-6 rounded-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <Surface className="font-mono text-gold-400 font-bold text-sm shrink-0 mt-0.5">{t.num}</Surface>
                    <Surface>
                      <Surface className="font-sans font-semibold text-white text-sm mb-1">{t.tier}</Surface>
                      <Surface className="text-white/55 text-xs leading-relaxed">{t.desc}</Surface>
                    </Surface>
                  </Surface>
                ))}
              </Surface>
            </Surface>
          </Surface>
        </Section>

        {/* ══════════════
            NEWS — Surface (muted)
        ══════════════ */}
        <Section id="news">
          <Stack gap="md">
            <Surface className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <Stack gap="sm">
                <Kicker>Movement Updates</Kicker>
                <Heading level={2} mode="primary">Latest from HSDNM</Heading>
              </Stack>
              <HSDButton variant="outline" className="flex items-center justify-center gap-2 h-10 px-5 text-xs tracking-wider uppercase">
                All Updates <ArrowRight className="size-3" />
              </HSDButton>
            </Surface>
            <Surface className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {newsItems.map((n, i) => (
                <Surface
                  key={i}
                  className="bg-white rounded-sm border border-neutral-200 p-6 flex flex-col gap-4 hover:border-green-700 hover:shadow-brand transition-all duration-300 group cursor-pointer"
                >
                  <Badge variant="green">{n.category}</Badge>
                  <Heading level={4} mode="primary" className="group-hover:text-green-600 transition-colors leading-snug">
                    {n.headline}
                  </Heading>
                  <Surface className="flex items-center gap-2 mt-auto pt-4 border-t border-neutral-100">
                    <Surface className="text-xs font-semibold uppercase tracking-widest text-neutral-400">{n.time}</Surface>
                    <ArrowRight className="size-3 text-gold-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Surface>
                </Surface>
              ))}
            </Surface>
          </Stack>
        </Section>

        {/* ══════════════
            JOIN CTA — Accent Green-50 Band
        ══════════════ */}
        <Section variant="accent">
          <Surface className="flex flex-col md:flex-row items-center justify-between gap-8">
            <Stack gap="sm" className="max-w-2xl">
              <Heading level={2} mode="primary">
                Secure Your Place in the Movement.
              </Heading>
              <Text variant="body" mode="muted">
                Register with your National Identification Number and join Nigerians
                committed to responsible leadership and inclusive governance. Your
                digital membership card is issued immediately upon verification.
              </Text>
            </Stack>
            <Surface className="flex flex-col gap-3 shrink-0">
              <HSDButton variant="accent" className="flex items-center justify-center gap-2 h-12 px-6 text-xs uppercase tracking-wider" as={Link} href={getPortalLink("/register")}>
                Register Now <ChevronRight className="size-4" />
              </HSDButton>
              <Text variant="xs" mode="muted" className="text-center normal-case tracking-normal">
                Free to join · NIN verification required
              </Text>
            </Surface>
          </Surface>
        </Section>

      </Surface>

      {/* ── FOOTER — Forest Black ── */}
      <Footer>
        <Stack gap="md">
          <Heading level={6} className="text-xs uppercase tracking-widest text-gold-400 font-semibold border-b border-white/10 pb-3">
            The Movement
          </Heading>
          <Surface className="flex flex-col gap-3">
            {[
              { label: "About the Movement", href: "/about" },
              { label: "Policy Positions", href: "/policy" },
              { label: "Town Hall Events", href: "/events" },
              { label: "News & Press", href: "/news" },
              { label: "Institutional Support", href: "/contact" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="text-sm text-white/55 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </Surface>
        </Stack>

        <Stack gap="md">
          <Heading level={6} className="text-xs uppercase tracking-widest text-gold-400 font-semibold border-b border-white/10 pb-3">
            Member Resources
          </Heading>
          <Surface className="flex flex-col gap-3">
            {[
              { label: "Membership Portal", href: getPortalLink("/register") },
              { label: "Member Dashboard", href: getPortalLink("/dashboard") },
              { label: "Register as Coordinator", href: getPortalLink("/register") },
              { label: "Security Charter", href: "/policy" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="text-sm text-white/55 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </Surface>
        </Stack>

        <Stack gap="md">
          <Surface className="bg-green-800 border border-gold-500/25 rounded-md p-6 flex flex-col gap-6 h-full">
            <Stack gap="xs">
              <Heading level={4} mode="white" className="text-base text-white">Join the Movement</Heading>
              <Text variant="small" className="text-white/55 leading-relaxed">
                Become a registered member of the HSDNM. Free to join.
                NIN verification required. Your digital membership card
                is issued immediately upon verification.
              </Text>
            </Stack>
            <Stack gap="sm" className="mt-auto">
              <HSDButton variant="accent" className="flex items-center justify-center w-full h-10 px-5 text-xs uppercase tracking-wider" as={Link} href={getPortalLink("/register")}>
                Register Now
              </HSDButton>
              <HSDButton variant="outline-dark" className="flex items-center justify-center w-full h-10 px-5 text-xs uppercase tracking-wider" as={Link} href={getPortalLink("/register")}>
                Member Login
              </HSDButton>
            </Stack>
          </Surface>
        </Stack>
      </Footer>

    </Surface>
  )
}
