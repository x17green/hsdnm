import Link from "next/link"
import { Header, Footer, Section, Container, Heading, Text, Logo, Surface, Stack, getPortalLink, Button } from "@hsdnm/ui"
import { Card } from "@heroui/react"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Town Hall Calendar | HSDNM",
  description: "Schedule of upcoming structural town halls, inaugurations, and public movement events.",
}

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Southern Ijaw LGA Zonal Inauguration",
      date: "OCTOBER 15, 2026",
      time: "10:00 AM WAT",
      location: "Oporoma Township Hall, Southern Ijaw, Bayelsa",
      type: "Structural Event",
    },
    {
      id: 2,
      title: "National Policy Roadmap Presentation",
      date: "NOVEMBER 02, 2026",
      time: "14:00 PM WAT",
      location: "Virtual Broadcast (Portal Access Only)",
      type: "Policy Briefing",
    },
    {
      id: 3,
      title: "Ekeremor Baseline Enrollment Drive",
      date: "DECEMBER 10, 2026",
      time: "09:00 AM WAT",
      location: "Ekeremor Main Park",
      type: "Grassroots Activity",
    }
  ]

  return (
    <Surface className="flex min-h-screen flex-col font-sans">
      <Header />

      <Surface className="flex-1 w-full bg-neutral-50 overflow-hidden">
        <Surface className="bg-green-900 border-b-4 border-gold-500 relative overflow-hidden py-16 md:py-20">
          <Surface className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
             <Logo size="xl" variant="seal" className="scale-[5] opacity-50" />
          </Surface>
          <Container className="relative z-10 flex flex-col items-center text-center">
            <Heading level={1} className="text-white max-w-4xl text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
              Town Hall Calendar
            </Heading>
            <Text className="text-neutral-300 max-w-2xl text-lg md:text-xl font-medium tracking-wide">
              Official schedule for structural mobilization, civic education, and policy briefings.
            </Text>
          </Container>
        </Surface>

        <Section className="py-16 bg-neutral-50">
          <Container className="max-w-4xl">
            <Stack gap="md" className="flex flex-col">
              {events.map((evt) => (
                <Card 
                  key={evt.id} 
                  className="bg-white border text-left border-neutral-200 shadow-sm rounded-sm flex flex-col md:flex-row overflow-hidden relative"
                >
                  <Surface className="md:w-64 bg-green-50 border-b md:border-b-0 md:border-r border-green-200 p-6 flex flex-col items-center justify-center text-center shrink-0">
                    <Text variant="xs" className="font-sans font-bold tracking-widest uppercase text-green-700 mb-1">{evt.type}</Text>
                    <Text className="font-mono text-xl font-bold text-green-900">{evt.date}</Text>
                    <Surface className="flex items-center gap-1.5 mt-2 opacity-60">
                      <Clock className="size-3" />
                      <Text variant="xs" className="font-mono">{evt.time}</Text>
                    </Surface>
                  </Surface>
                  <Surface className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                    <Heading level={3} className="text-green-900 mb-3 text-2xl">{evt.title}</Heading>
                    <Surface className="flex items-start gap-2 mb-6">
                      <MapPin className="size-5 text-gold-500 shrink-0 mt-0.5" />
                      <Text className="text-neutral-600 m-0">{evt.location}</Text>
                    </Surface>
                    <Surface className="flex">
                      <Button 
                        as={Link}
                        href={getPortalLink("/register")}
                        variant="primary"
                        className="bg-green-700 text-white rounded-sm font-sans font-bold text-xs uppercase tracking-wider px-6 shadow-sm flex items-center justify-center gap-2 h-10 w-full md:w-auto hover:bg-green-600 transition-all font-sans"
                      >
                        RSVP via Portal <ArrowRight className="size-4" />
                      </Button>
                    </Surface>
                  </Surface>
                </Card>
              ))}
            </Stack>
            
            <Surface className="mt-12 text-center border border-dashed border-neutral-300 rounded-sm p-8 bg-neutral-100/50">
              <Calendar className="size-8 text-neutral-400 mx-auto mb-3 opacity-50" />
              <Text className="text-neutral-500 m-0 max-w-sm mx-auto">
                No further events scheduled for this quarter. To organize a local cell meeting, please contact your LGA Coordinator through the secured dashboard.
              </Text>
            </Surface>
          </Container>
        </Section>
      </Surface>

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
