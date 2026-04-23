"use client"

import * as React from "react"
import Link from "next/link"
import { Header, Footer, Section, Container, Heading, Text, Logo, Surface, Stack, Flex, getPortalLink, Button } from "@hsdnm/ui"
import { Card, Input, TextArea } from "@heroui/react"
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react"

/* ══════════════════════════════════════════════════════════════
   HSDNM Institutional Support — Contact Node
   Brand Guide 2026 · § Institutional Integrity
   - 60-30-10 Color Architecture
   - Sharp Radii (rounded-sm)
   - DM Sans / Playfair Display
 ══════════════════════════════════════════════════════════════ */

export default function ContactPage() {
  return (
    <Surface className="flex min-h-screen flex-col font-sans animate-brand-fade">
      <Header />

      <Surface className="flex-1 w-full bg-neutral-50">
        {/* Banner Section */}
        <Surface className="bg-green-900 border-b-[3px] border-gold-500 relative overflow-hidden py-24 md:py-32">
          <Surface className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
             <Logo size="xl" variant="seal" className="scale-[6] opacity-30" />
          </Surface>
          <Container className="relative z-10 text-center">
            <Flex direction="col" align="center">
              <Surface className="bg-gold-500 text-green-950 px-4 py-1.5 rounded-sm border border-gold-400 mb-8">
                <Text variant="xs" className="font-black tracking-40 m-0 text-green-950">Institutional Support</Text>
              </Surface>
              <Heading level="display-1" className="text-white mb-6">
                Connect with the Movement
              </Heading>
              <Text variant="lead" className="text-white/80 max-w-2xl mx-auto">
                Official channels for structural inquiries, membership verification, and media relations.
              </Text>
            </Flex>
          </Container>
        </Surface>

        {/* Contact Grid */}
        <Section className="py-20">
          <Container>
            <Surface className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Info Column */}
              <Surface className="lg:col-span-5">
                <Stack gap="xl">
                  <Stack gap="md">
                    <Heading level={2} className="text-green-900">Reach the Command Directorate</Heading>
                    <Text className="text-neutral-600 text-lg leading-relaxed">
                      For all official correspondence at the national or state level, please utilize the authenticated channels below. Members are encouraged to use the portal for localized LGA coordination.
                    </Text>
                  </Stack>

                  <Stack gap="lg" className="pt-8">
                    <Flex gap="md" align="center">
                      <Surface className="size-12 bg-green-50 border border-green-100 rounded-sm flex items-center justify-center text-green-700 shrink-0">
                        <Mail className="size-5" />
                      </Surface>
                      <Stack gap="none">
                        <Text variant="xs" className="font-black uppercase tracking-widest text-neutral-400">Electronic Mail</Text>
                        <Text className="text-green-900 font-bold text-lg">support@hsdnationalmovement.com</Text>
                      </Stack>
                    </Flex>

                    <Flex gap="md" align="center">
                      <Surface className="size-12 bg-green-50 border border-green-100 rounded-sm flex items-center justify-center text-green-700 shrink-0">
                        <Phone className="size-5" />
                      </Surface>
                      <Stack gap="none">
                        <Text variant="xs" className="font-black uppercase tracking-widest text-neutral-400">Response Hotline</Text>
                        <Text className="text-green-900 font-bold text-lg">+234 (0) 800 HSDNM INFO</Text>
                      </Stack>
                    </Flex>

                    <Flex gap="md" align="center">
                      <Surface className="size-12 bg-green-50 border border-green-100 rounded-sm flex items-center justify-center text-green-700 shrink-0">
                        <MapPin className="size-5" />
                      </Surface>
                      <Stack gap="none">
                        <Text variant="xs" className="font-black uppercase tracking-widest text-neutral-400">National Headquarters</Text>
                        <Text className="text-green-900 font-bold text-lg">Maitama District, Abuja, FCT</Text>
                      </Stack>
                    </Flex>
                  </Stack>

                  <Surface className="bg-green-50 border border-green-100 p-6 rounded-sm mt-8">
                    <Flex gap="md" align="start">
                      <MessageSquare className="size-6 text-green-700 shrink-0 mt-1" />
                      <Stack gap="xs">
                        <Text className="text-green-900 font-bold">Existing Member?</Text>
                        <Text variant="small" className="text-green-700/80">
                          Log in to the Secure Portal to track your ticket status or connect directly with your Ward Coordinator.
                        </Text>
                        <Button 
                          as={Link} 
                          href={getPortalLink("/dashboard")}
                          variant="accent" 
                          size="sm" 
                          className="mt-2 w-fit h-9 px-4 rounded-sm"
                        >
                          Go to Dashboard
                        </Button>
                      </Stack>
                    </Flex>
                  </Surface>
                </Stack>
              </Surface>

              {/* Form Column */}
              <Surface className="lg:col-span-7">
                <Card className="bg-white border-2 border-neutral-100 shadow-sm rounded-sm p-8 md:p-10">
                  <Stack gap="lg">
                    <Heading level={3} className="text-green-900 border-b border-neutral-100 pb-4">Inquiry Directive</Heading>
                    
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                      <Stack gap="sm">
                        <Text variant="xs" className="font-black uppercase tracking-widest text-neutral-400">Full Name</Text>
                        <Input placeholder="Authorized Name" className="h-12 border-2 border-neutral-100 rounded-sm font-sans" />
                      </Stack>
                      <Stack gap="sm">
                        <Text variant="xs" className="font-black uppercase tracking-widest text-neutral-400">Email Address</Text>
                        <Input type="email" placeholder="name@domain.com" className="h-12 border-2 border-neutral-100 rounded-sm font-sans" />
                      </Stack>
                      <Stack gap="sm" className="md:col-span-2">
                        <Text variant="xs" className="font-black uppercase tracking-widest text-neutral-400">Subject Area</Text>
                        <Input placeholder="Membership, Media, Policy Inquiries" className="h-12 border-2 border-neutral-100 rounded-sm font-sans" />
                      </Stack>
                      <Stack gap="sm" className="md:col-span-2">
                        <Text variant="xs" className="font-black uppercase tracking-widest text-neutral-400">Message Content</Text>
                        <TextArea placeholder="Details of your inquiry..." className="min-h-32 border-2 border-neutral-100 rounded-sm font-sans" />
                      </Stack>
                      <Surface className="md:col-span-2 pt-4">
                        <Button variant="primary" className="h-14 w-full rounded-sm bg-green-700 shadow-brand group">
                          <Send className="size-4 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          Transmit Inquiry
                        </Button>
                      </Surface>
                    </form>
                  </Stack>
                </Card>
              </Surface>
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
            <Link href="/contact" className="text-gold-500 font-bold text-sm transition-colors">Institutional Support</Link>
          </Stack>
        </Stack>
      </Footer>
    </Surface>
  )
}
