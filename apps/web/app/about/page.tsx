import Link from "next/link"
import { Header, Footer, Section, Container, Heading, Text, Logo, Surface, Stack, getPortalLink } from "@hsdnm/ui"
import { Card, Separator } from "@heroui/react"
import { BookOpen, Map, Users, Target, ShieldCheck } from "lucide-react"

export const metadata = {
  title: "About the Movement | HSDNM",
  description: "Learn about the vision, history, and structural blueprint of the Sen. Henry Seriake Dickson National Movement.",
}

export default function AboutPage() {
  const tiers = [
    { title: "National Command", desc: "Federal strategic oversight and policy coordination.", icon: <ShieldCheck className="text-gold-500 size-6" /> },
    { title: "State Command", desc: "Regional localization of directives across the 36 states.", icon: <Map className="text-green-700 size-6" /> },
    { title: "LGA Coordination", desc: "Execution and mobilization across 774 Local Government Areas.", icon: <Users className="text-green-700 size-6" /> },
    { title: "Ward Cells", desc: "The grassroots foundation and primary engagement units.", icon: <Target className="text-green-700 size-6" /> },
  ]

  return (
    <Surface className="flex min-h-screen flex-col font-sans">
      <Header />

      <Surface className="flex-1 w-full bg-neutral-50 overflow-hidden">
        {/* Banner Section */}
        <Surface className="bg-green-900 border-b-4 border-gold-500 relative overflow-hidden py-16 md:py-20">
          <Surface className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
             <Logo size="xl" variant="seal" className="scale-[5] opacity-50" />
          </Surface>
          <Container className="relative z-10 flex flex-col items-center text-center">
            <Heading level={1} className="text-white max-w-4xl text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
              Restoring Institutional Integrity
            </Heading>
            <Text className="text-gold-100 max-w-2xl text-lg md:text-xl font-medium tracking-wide">
              The Sen. Henry Seriake Dickson National Movement is grounded in the principles of accountable governance, infrastructural growth, and absolute loyalty to the people.
            </Text>
          </Container>
        </Surface>

        {/* Senator Bio Section */}
        <Section className="py-12 md:py-16 bg-white">
          <Container>
            <Surface className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <Stack gap="md" className="lg:col-span-6 flex flex-col order-2 lg:order-1">
                <Text variant="xs" mode="accent" className="font-bold tracking-widest uppercase">The Visionary</Text>
                <Heading level={2} className="text-green-900 leading-tight">
                  A Legacy of Restoration and Resolute Leadership
                </Heading>
                <Surface className="h-1.5 w-16 bg-gold-500 mb-2">{null}</Surface>
                <Text className="text-neutral-600 leading-relaxed text-lg">
                  As the architect of modern Bayelsa and a formidable voice in the Senate, Senator Henry Seriake Dickson has consistently demonstrated that political leadership must be anchored on truth, developmental milestones, and the courage to make difficult localized decisions.
                </Text>
                <Text className="text-neutral-600 leading-relaxed text-lg">
                  The HSD National Movement is not a political party; it is a structural vehicle mandated to aggregate like-minded individuals who believe in his philosophy of governance—a philosophy where institutions outlive individuals, and education serves as the ultimate equalizer.
                </Text>
              </Stack>
              
              <Surface className="lg:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-end">
                <Surface className="relative w-full max-w-md aspect-[3/4] bg-neutral-100 rounded-sm overflow-hidden shadow-xl border border-neutral-200">
                  <Surface className="absolute inset-0 bg-green-900/5 mix-blend-multiply">{null}</Surface>
                  {/* Placeholder for real portrait */}
                  <Surface className="absolute inset-0 flex flex-col items-center justify-center text-neutral-300">
                    <BookOpen className="size-20 mb-4 opacity-50" />
                    <Text variant="xs" className="font-sans uppercase tracking-widest font-bold">Official Portrait</Text>
                  </Surface>
                  <Surface className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-green-900 to-transparent p-6 pt-20">
                    <Text className="text-gold-500 m-0 font-serif italic text-lg opacity-90">
                      "Governance is a trust; an institutional mandate to build the future."
                    </Text>
                  </Surface>
                </Surface>
              </Surface>
            </Surface>
          </Container>
        </Section>

        {/* 4-Tier Org Structure */}
        <Section className="py-12 md:py-16 bg-neutral-50 border-t border-neutral-200">
          <Container className="flex flex-col items-center text-center">
            <Text variant="xs" mode="accent" className="font-bold tracking-widest uppercase mb-4">Structural Intelligence</Text>
            <Heading level={2} className="text-green-900 max-w-3xl mb-12">
              The 4-Tier Mobilization Blueprint
            </Heading>
            
            <Surface className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              {tiers.map((tier, idx) => (
                <Card key={idx} className="bg-white border text-left border-neutral-200 shadow-sm rounded-sm relative overflow-hidden group">
                  <Surface className="absolute top-0 left-0 w-full h-1 bg-gold-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300">{null}</Surface>
                  <Card.Content className="p-6 flex flex-col gap-4">
                    <Surface className="p-3 bg-neutral-50 border border-neutral-100 rounded inline-flex w-fit justify-center items-center">
                      {tier.icon}
                    </Surface>
                    <Stack gap="xs">
                      <Heading level={4} className="text-green-900 text-xl tracking-tight mb-2">
                        {tier.title}
                      </Heading>
                      <Text variant="small" className="text-neutral-500">
                        {tier.desc}
                      </Text>
                    </Stack>
                  </Card.Content>
                </Card>
              ))}
            </Surface>
            
            <Surface className="mt-12 max-w-3xl w-full border border-green-200 bg-green-50 p-6 rounded-sm relative overflow-hidden">
              <Surface className="absolute -right-4 -bottom-4 opacity-10">
                 <ShieldCheck className="size-32 text-green-700" />
              </Surface>
              <Stack gap="xs" className="relative z-10 text-left">
                <Text variant="xs" className="font-bold tracking-widest uppercase text-green-700">Section 4 — Operational Manual</Text>
                <Text className="text-green-900 font-serif text-lg leading-relaxed mb-0">
                  All coordination and structural execution relies on top-down alignment and bottom-up feedback. To operate a structural module within this movement requires explicit authorization from the Command Directorate via the Digital Portal.
                </Text>
              </Stack>
            </Surface>
          </Container>
        </Section>
      </Surface>

      {/* Reusing standard Footer with Nav Links slot */}
      <Footer>
        <Stack gap="md">
          <Heading level={4} className="text-white m-0">Platform</Heading>
          <Stack gap="sm">
            <Link href="/" className="text-white/60 hover:text-white text-sm transition-colors">The Vision</Link>
            <Link href="/policy" className="text-white/60 hover:text-white text-sm transition-colors">Policy Positions</Link>
            <Link href="/news" className="text-white/60 hover:text-white text-sm transition-colors">News & Press</Link>
          </Stack>
        </Stack>
        <Stack gap="md">
          <Heading level={4} className="text-white m-0">Network</Heading>
          <Stack gap="sm">
            <Link href={getPortalLink("/dashboard")} className="text-white/60 hover:text-white text-sm transition-colors">Secure Portal</Link>
            <Link href={getPortalLink("/register")} className="text-white/60 hover:text-white text-sm transition-colors">Member Registry</Link>
            <Link href="/contact" className="text-white/60 hover:text-white text-sm transition-colors">Institutional Support</Link>
          </Stack>
        </Stack>
      </Footer>
    </Surface>
  )
}
