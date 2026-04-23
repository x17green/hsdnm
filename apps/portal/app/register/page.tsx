"use client"

import * as React from "react"
import { PortalHeader, Heading, Text, Stack, BrandBadge, Card, Button, Input, Select, ListBox, Label, ProgressBar, Form, Flex, Grid, Surface } from "@hsdnm/ui"
import {
  ShieldCheck, ChevronRight, ChevronLeft, Download, Share2, 
  CheckCircle2, AlertCircle, ArrowRight,
  Lock, User, MapPin, Award
} from "lucide-react"

import { Surface as HeroSurface } from "@heroui/react"

import { MemberIDCard, PortalFooter } from "@hsdnm/ui"
import Link from "next/link"

/* ══════════════════════════════════════════════════════════════
   HSDNM Portal — Member Registration
   Realigned to Institutional Aesthetics (Sync with Dashboard & Web)
   Brand Guide 2026 · Foundation Neutral-50
   © 2026 Sen. Henry Seriake Dickson National Movement
   - ANIMATED BACKGROUND REMOVED
   - THEME SYNCED TO LIGHT MODE
══════════════════════════════════════════════════════════════ */

type Step = 1 | 2 | 3 | 4 | 5

const STEPS: { label: string; sublabel: string; icon: React.ReactNode }[] = [
  { label: "Verify Identity",  sublabel: "NIN Verification", icon: <Lock className="size-4" /> },
  { label: "Confirm Details",  sublabel: "Identity Verified", icon: <ShieldCheck className="size-4" /> },
  { label: "Personal Info",    sublabel: "Contact Profile",   icon: <User className="size-4" /> },
  { label: "Location",         sublabel: "LGA & Ward",        icon: <MapPin className="size-4" /> },
  { label: "Complete",         sublabel: "Membership Issued", icon: <Award className="size-4" /> },
] as const

const NIN_LENGTH = 11
const NIN_VERIFY_DELAY = 1600 as const

const IDENTITY_FIELDS = [
  { label: "First Name",    val: "HENRY" },
  { label: "Surname",       val: "SMITH" },
  { label: "Gender",        val: "MALE" },
  { label: "Date of Birth", val: "11 JAN 1985" },
] as const

const StepDot = React.memo(({ step, n, current }: { step: (typeof STEPS)[number], n: number, current: Step }) => {
  const isDone = n < current
  const isActive = n === current

  const dotClasses = isDone
    ? "bg-green-700 text-white border-green-700 shadow-brand"
    : isActive
      ? "bg-white border-green-700 text-green-700 shadow-brand ring-[6px] ring-green-700/5 scale-110"
      : "bg-white border-neutral-200 text-neutral-400"

  const labelClasses = isActive
    ? "text-green-900 opacity-100"
    : isDone
      ? "text-green-600/80"
      : "text-neutral-500"

  return (
    <Flex direction="col" align="center" gap="xs" className="relative z-10 min-w-[70px]">
      <Surface className={`size-10 rounded-md border-2 flex items-center justify-center transition-all duration-500 ${dotClasses}`}>
        {isDone ? <CheckCircle2 className="size-5 animate-in fade-in zoom-in duration-500" /> : step.icon}
      </Surface>
      <Text className={`hidden md:block text-2xs font-black uppercase tracking-18 leading-tight transition-all duration-500 text-center ${labelClasses}`}>
        {step.label}
      </Text>
    </Flex>
  )
})
StepDot.displayName = "StepDot"

const StepIndicator = React.memo(({ current }: { current: Step }) => {
  const progress = ((current - 1) / (STEPS.length - 1)) * 100

  return (
    <Surface className="w-full mb-8 px-2 bg-transparent">
      <Surface className="relative flex items-center justify-between bg-transparent">
        <Surface className="absolute left-10 right-10 top-5 z-0 bg-neutral-200 h-[1px]">{null}</Surface>
        {STEPS.map((s, i) => (
          <StepDot key={i} step={s} n={i + 1} current={current} />
        ))}
      </Surface>
    </Surface>
  )
})
StepIndicator.displayName = "StepIndicator"

export default function RegisterPage() {
  const [step, setStep] = React.useState<Step>(1)
  const [loading, setLoading] = React.useState(false)
  const [nin, setNin] = React.useState("")

  const next = React.useCallback(() => setStep((s) => (s < 5 ? ((s + 1) as Step) : s)), [])
  const prev = React.useCallback(() => setStep((s) => (s > 1 ? ((s - 1) as Step) : s)), [])

  const handleNINSubmit = React.useCallback((e: React.FormEvent) => {
    e.preventDefault()
    if (nin.length !== NIN_LENGTH) return
    setLoading(true)
    const timer = setTimeout(() => { 
      setLoading(false)
      next() 
    }, NIN_VERIFY_DELAY)
    return () => clearTimeout(timer)
  }, [nin, next])

  return (
    <Surface className="min-h-screen min-w-screen flex flex-col bg-neutral-50 font-sans relative overflow-hidden ">
      
      <PortalHeader mode="public" className="relative z-10 bg-green-900/10 border-b border-neutral-200 mb-10" />

      <Surface className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6 bg-transparent">
        <main className="flex-1 flex items-start justify-center py-12">
          <Surface className="w-full animate-brand-fade bg-transparent">

            <Stack align="center" gap="md" className="mb-8 text-center">
              <Surface className="size-16 rounded-lg bg-green-50 border border-green-200 flex items-center justify-center shadow-sm">
                <Award className="size-8 text-green-700" />
              </Surface>
              <HeroSurface className="bg-transparent">
                <Heading level={1} className="text-3xl font-serif text-green-900 mb-1 tracking-tight">HSDNM Portal</Heading>
                <Text className="text-gold-600 font-sans uppercase tracking-20 text-2xs font-bold">Member Registration & Onboarding</Text>
              </HeroSurface>
            </Stack>

            <StepIndicator current={step} />

            {/* ── STEP 1: NIN Entry ──────────────────────────── */}
            {step === 1 && (
              <Card className="overflow-hidden border border-neutral-200 shadow-sm bg-white rounded-md w-full mx-auto">
                <Form onSubmit={handleNINSubmit}>
                  <Card.Header className="flex flex-col items-center text-center gap-6 p-8 bg-neutral-50/50 border-b border-neutral-100">
                    <Surface className="size-16 rounded-md bg-green-50 border-2 border-green-100 text-green-700 flex items-center justify-center">
                      <Lock className="size-8" />
                    </Surface>
                    <HeroSurface className="bg-transparent">
                      <Heading level={2} mode="primary" className="text-2xl mb-2 tracking-tight">Identity Verification</Heading>
                      <Text variant="small" mode="muted" className="max-w-xs mx-auto leading-relaxed">
                        Enter your 11-digit National Identification Number to verify your identity and begin registration.
                      </Text>
                    </HeroSurface>
                  </Card.Header>

                  <Card.Content className="p-8 mx-auto w-full">
                    <Stack align="center" gap="xl">
                      <Surface className="w-full flex-col items-center">
                        <Label className="text-2xs font-bold uppercase tracking-18 text-neutral-400 mb-4 block text-center">
                          National Identification Number (NIN)
                        </Label>
                        <Input
                          type="text"
                          inputMode="numeric"
                          maxLength={NIN_LENGTH}
                          value={nin}
                          onChange={(e) => setNin(e.target.value.replace(/\D/g, "").slice(0, NIN_LENGTH))}
                          placeholder="000 000 000 00"
                          required
                          autoFocus
                          className={`h-16 w-full border-2 rounded-sm shadow-sm outline-none transition-all duration-300 text-center font-mono font-bold text-2xl tracking-widest ${
                            nin.length === NIN_LENGTH 
                              ? "border-green-700 bg-white text-green-900" 
                              : "border-neutral-100 bg-neutral-50 hover:border-neutral-200 text-neutral-400"
                          }`}
                        />
                        <Flex align="center" justify="between" className="mt-6 px-1">
                          <Flex align="center" gap="xs">
                            <ShieldCheck className={`size-4 ${nin.length === NIN_LENGTH ? "text-green-600" : "text-neutral-300"}`} />
                            <Text variant="xs" mode="muted" className="font-bold uppercase tracking-15">Encrypted via SHA-256</Text>
                          </Flex>
                          <Text className={`font-mono font-bold text-xs tracking-10 transition-colors ${
                            nin.length === NIN_LENGTH ? "text-green-600" : "text-neutral-400"
                          }`}>
                            {nin.length}/{NIN_LENGTH}
                          </Text>
                        </Flex>
                      </Surface>

                      <Surface className="w-full p-6 rounded-sm bg-neutral-50 border border-neutral-200 flex items-start gap-4">
                        <Surface className="p-2 bg-neutral-200 rounded-sm">
                          <AlertCircle className="size-4 text-neutral-600" />
                        </Surface>
                        <Text variant="xs" mode="muted" className="leading-relaxed font-bold text-2xs sm:text-xs md:text-xs">
                          Your NIN is verified directly via the NIMC Federal API. We do not store your raw NIN on our servers.
                        </Text>
                      </Surface>
                    </Stack>
                  </Card.Content>

                  <Card.Footer className="px-8 pb-8 pt-0">
                    <Button 
                      variant="primary" 
                      type="submit" 
                      isLoading={loading} 
                      isDisabled={nin.length !== NIN_LENGTH} 
                      className="w-full h-14 bg-green-700 hover:bg-green-800 text-white font-bold text-xs tracking-widest uppercase rounded-sm transition-all shadow-brand group"
                    >
                      {loading ? "Authenticating..." : (
                        <Flex align="center" gap="sm">
                          Continue to Verification <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
                        </Flex>
                      )}
                    </Button>
                  </Card.Footer>
                </Form>
              </Card>
            )}

            {/* ── STEP 2: Identity Confirmed ─────────────────── */}
            {step === 2 && (
              <Card className="overflow-hidden border border-neutral-200 shadow-sm bg-white rounded-md w-full mx-auto">
                <Card.Header className="flex flex-col items-center text-center gap-6 p-8 bg-neutral-50/50 border-b border-neutral-100">
                  <Surface className="size-16 rounded-md bg-green-50 border-2 border-green-200 text-green-700 flex items-center justify-center">
                    <ShieldCheck className="size-8 text-green-700" />
                  </Surface>
                  <HeroSurface className="bg-transparent">
                    <BrandBadge variant="green" className="mb-4 mx-auto">
                      Identity Verified
                    </BrandBadge>
                    <Heading level={2} mode="primary" className="text-2xl mb-2 tracking-tight">Details Confirmed</Heading>
                    <Text variant="small" mode="muted" className="max-w-xs mx-auto leading-relaxed">
                      Your identity has been authenticated against the National Registry. Please confirm the details below.
                    </Text>
                  </HeroSurface>
                </Card.Header>
                
                <Card.Content className="p-8 w-full mx-auto">
                  <Stack gap="xl">
                    <Grid cols={{ sm: 1, md: 2 }} gap="lg" className="w-full mx-auto">
                      {IDENTITY_FIELDS.map((f) => (
                        <Surface key={f.label} className="bg-neutral-50 border border-neutral-100 p-6 rounded-md hover:border-green-200 transition-all">
                          <Label className="text-2xs font-bold uppercase tracking-18 text-neutral-400 mb-3 block">{f.label}</Label>
                          <Text className="font-sans font-bold text-xl text-green-900 tracking-tight">
                            {f.val}
                          </Text>
                        </Surface>
                      ))}
                    </Grid>

                    <Surface className="w-full p-6 rounded-sm bg-green-50 border border-green-100 flex items-start gap-4">
                      <Surface className="p-2 bg-green-100 rounded-sm">
                        <CheckCircle2 className="size-4 text-green-700" />
                      </Surface>
                      <Text variant="xs" mode="brand" className="leading-relaxed font-bold">
                        REF: <span className="font-mono">91AB-229Z</span> • Verification timestamped and hashed for your security.
                      </Text>
                    </Surface>
                  </Stack>
                </Card.Content>

                <Card.Footer className="px-8 pb-8 pt-0">
                  <Flex gap="md" className="w-full">
                    <Button 
                      variant="outline" 
                      className="flex-1 h-14 border-neutral-200 text-neutral-500 font-bold text-xs tracking-widest uppercase rounded-sm hover:bg-neutral-50 transition-all" 
                      onClick={prev}
                    >
                      <ChevronLeft className="size-4 mr-2" /> Incorrect
                    </Button>
                    <Button 
                      variant="primary" 
                      className="flex-[2] h-14 bg-green-700 hover:bg-green-800 text-white font-bold text-xs tracking-widest uppercase rounded-sm shadow-brand transition-all group" 
                      onClick={next}
                    >
                      Confirm Details <ChevronRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Flex>
                </Card.Footer>
              </Card>
            )}

            {/* ── STEP 3: Personal Profile ────────────────────── */}
            {step === 3 && (
              <Card className="overflow-hidden border border-neutral-200 shadow-sm bg-white rounded-md w-full mx-auto">
                <Form onSubmit={(e) => { e.preventDefault(); next(); }}>
                  <Card.Header className="flex flex-col items-center text-center gap-6 p-8 bg-neutral-50/50 border-b border-neutral-100">
                    <Surface className="size-16 rounded-md bg-green-50 border-2 border-green-100 text-green-700 flex items-center justify-center">
                      <User className="size-8" />
                    </Surface>
                    <HeroSurface className="bg-transparent">
                      <Heading level={2} mode="primary" className="text-2xl mb-2 tracking-tight">Personal Profile</Heading>
                      <Text variant="small" mode="muted" className="max-w-xs mx-auto leading-relaxed">
                        Provide your primary contact details to ensure secure communication and record synchronization.
                      </Text>
                    </HeroSurface>
                  </Card.Header>

                  <Card.Content className="px-8 py-18">
                    <Stack gap="lg">
                      <Grid cols={{ sm: 1, md: 2 }} gap="lg" className="w-full flex flex-col mx-auto">
                        <Stack gap="sm">
                          <Label className="text-2xs font-bold uppercase tracking-18 text-neutral-400">Phone Number</Label>
                          <Input type="tel" placeholder="+234 800 000 0000" className="h-14 w-full border-2 border-neutral-100 bg-white px-5 rounded-sm font-mono text-lg focus:border-green-700 transition-all" />
                        </Stack>
                        <Stack gap="sm">
                          <Label className="text-2xs font-bold uppercase tracking-18 text-neutral-400">Email Address</Label>
                          <Input type="email" placeholder="name@domain.com" className="h-14 w-full border-2 border-neutral-100 bg-white px-5 rounded-sm font-sans focus:border-green-700 transition-all" />
                        </Stack>
                        <Stack gap="sm">
                          <Label className="text-2xs font-bold uppercase tracking-18 text-neutral-400">Residential Address</Label>
                          <Input type="address" placeholder="House 00, Street Address, City" className="h-14 w-full border-2 border-neutral-100 bg-white px-5 rounded-sm font-sans focus:border-green-700 transition-all" />
                        </Stack>
                      </Grid>
                    </Stack>
                  </Card.Content>

                  <Card.Footer className="px-8 pb-8 pt-0">
                    <Flex gap="md" className="w-full">
                      <Button variant="outline" className="flex-1 h-14 border-neutral-200 text-neutral-500 font-bold text-xs tracking-widest uppercase rounded-sm hover:bg-neutral-50 transition-all" onClick={prev}>
                        <ChevronLeft className="size-4 mr-2" /> Back
                      </Button>
                      <Button variant="primary" type="submit" className="flex-[2] h-14 bg-green-700 hover:bg-green-800 text-white font-bold text-xs tracking-widest uppercase rounded-sm shadow-brand group">
                        Save Profile <ChevronRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Flex>
                  </Card.Footer>
                </Form>
              </Card>
            )}

            {/* ── STEP 4: Political Domicile ──────────────────── */}
            {step === 4 && (
              <Card className="overflow-hidden border border-neutral-200 shadow-sm bg-white rounded-md w-full mx-auto">
                <Form onSubmit={(e) => { e.preventDefault(); next(); }}>
                  <Card.Header className="flex flex-col items-center text-center gap-6 p-8 bg-neutral-50/50 border-b border-neutral-100">
                    <Surface className="size-16 rounded-md bg-green-50 border-2 border-green-100 text-green-700 flex items-center justify-center">
                      <MapPin className="size-8" />
                    </Surface>
                    <HeroSurface className="bg-transparent">
                      <Heading level={2} mode="primary" className="text-2xl mb-2 tracking-tight">Political Domicile</Heading>
                      <Text variant="small" mode="muted" className="max-w-xs mx-auto leading-relaxed">
                        Your political assignment ensures you are registered within the correct LGA and Ward for local organizing.
                      </Text>
                    </HeroSurface>
                  </Card.Header>

                  <Card.Content className="p-8 w-full mx-auto">
                    <Stack gap="xl">
                      <Grid cols={{ sm: 1, md: 2 }} gap="xl" className="w-full">
                        <Stack gap="sm">
                          <Label className="text-2xs font-bold uppercase tracking-18 text-neutral-400">Local Government Area</Label>
                          <Select placeholder="Select LGA…" className="w-full border-2 border-neutral-100 bg-white flex items-center focus:border-green-700 transition-all shadow-sm">
                            <Select.Trigger className="w-full flex justify-between items-center text-green-950 font-bold text-sm uppercase tracking-tight border-none shadow-none">
                              <Select.Value />
                            </Select.Trigger>
                            <Select.Popover className="border border-neutral-100 shadow-xl rounded-sm">
                              <ListBox className="p-2 bg-white">
                                {["Sagbama", "Ekeremor", "Yenagoa", "Southern Ijaw"].map((lga) => (
                                   <ListBox.Item key={lga} id={lga} textValue={lga} className="rounded-sm p-4 hover:bg-green-50 text-green-950 font-bold text-xs uppercase tracking-18">{lga}</ListBox.Item>
                                ))}
                              </ListBox>
                            </Select.Popover>
                          </Select>
                        </Stack>
                        <Stack gap="sm">
                          <Label className="text-2xs font-bold uppercase tracking-18 text-neutral-400">Ward Assignment</Label>
                          <Select placeholder="Select Ward…" className="w-full border-2 border-neutral-100 bg-white flex items-center focus:border-green-700 transition-all shadow-sm">
                            <Select.Trigger className="w-full flex justify-between items-center text-green-950 font-bold text-sm uppercase tracking-tight border-none shadow-none">
                              <Select.Value />
                            </Select.Trigger>
                            <Select.Popover className="border border-neutral-100 shadow-xl rounded-sm">
                              <ListBox className="p-2 bg-white">
                                {["Ward 01", "Ward 02", "Ward 03", "Ward 04"].map((ward) => (
                                   <ListBox.Item key={ward} id={ward} textValue={ward} className="rounded-sm p-4 hover:bg-green-50 text-green-950 font-bold text-xs uppercase tracking-18">{ward}</ListBox.Item>
                                ))}
                              </ListBox>
                            </Select.Popover>
                          </Select>
                        </Stack>
                      </Grid>

                      <Surface className="w-full p-6 rounded-sm bg-neutral-50 border border-neutral-200 flex items-center gap-4">
                        <Surface className="p-2 bg-neutral-200 rounded-sm">
                          <AlertCircle className="size-4 text-neutral-600" />
                        </Surface>
                        <Text variant="xs" mode="muted" className="leading-relaxed font-bold uppercase tracking-15">
                          Ward assignments determine your voting jurisdiction within HSDNM.
                        </Text>
                      </Surface>
                    </Stack>
                  </Card.Content>

                  <Card.Footer className="px-8 pb-8 pt-0">
                    <Flex gap="md" className="w-full">
                      <Button variant="outline" className="flex-1 h-14 border-neutral-200 text-neutral-500 font-bold text-xs tracking-widest uppercase rounded-sm hover:bg-neutral-50 transition-all" onClick={prev}>
                        <ChevronLeft className="size-4 mr-2" /> Back
                      </Button>
                      <Button variant="primary" type="submit" className="flex-[2] h-14 bg-green-700 hover:bg-green-800 text-white font-bold text-xs tracking-widest uppercase rounded-sm shadow-brand group">
                        Join Movement <ChevronRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Flex>
                  </Card.Footer>
                </Form>
              </Card>
            )}

            {/* ── STEP 5: Membership Issued ────────────────────── */}
            {step === 5 && (
              <Card className="overflow-hidden border border-neutral-200 shadow-sm bg-white rounded-md w-full mx-auto">
                <Card.Header className="flex flex-col items-center text-center gap-6 p-8 bg-neutral-50/50 border-b border-neutral-100">
                  <Surface className="size-16 rounded-md bg-green-50 border-2 border-green-200 text-green-700 flex items-center justify-center">
                    <CheckCircle2 className="size-8" />
                  </Surface>
                  <HeroSurface className="flex flex-col items-center bg-transparent">
                    <BrandBadge variant="green" className="mb-4 mx-auto">
                      Membership Issued
                    </BrandBadge>
                    <Heading level={2} mode="primary" className="text-2xl mb-2 tracking-tight">Welcome to the Movement</Heading>
                    <Text variant="small" mode="muted" className="max-w-xs mx-auto leading-relaxed">
                      Your HSDNM national membership has been officially registered. Your digital credentials are ready below.
                    </Text>
                  </HeroSurface>
                </Card.Header>

                <Card.Content className="p-8 w-full mx-auto">
                  <Stack gap="xl" align="center">
                    <Surface className="w-full flex justify-center">
                      <MemberIDCard 
                        className="shadow-institutional border-2 border-gold-500 hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                        member={{
                          id: "HSD-SS-BYS-0001",
                          name: "HENRY SMITH",
                          ward: "Ward 01",
                          lga: "Sagbama",
                          state: "Bayelsa",
                          joinDate: new Date().toLocaleDateString('en-GB')
                        }}
                      />
                    </Surface>
                    
                    <Surface className="bg-transparent">
                      <Grid cols={2} gap="sm" className="w-full">
                        <Button variant="outline" className="h-14 border-neutral-200 text-neutral-500 font-bold text-2xs uppercase tracking-widest hover:bg-neutral-50 rounded-sm">
                          <Download className="size-4 mr-2" /> Download JPG
                        </Button>
                        <Button variant="outline" className="h-14 border-neutral-200 text-neutral-500 font-bold text-2xs uppercase tracking-widest hover:bg-neutral-50 rounded-sm">
                          <Share2 className="size-4 mr-2" /> Share Card
                        </Button>
                      </Grid>
                    </Surface>

                    <Surface className="p-6 rounded-sm bg-neutral-50 border border-neutral-200 w-full flex items-center gap-4">
                      <Surface className="size-12 rounded-sm bg-neutral-200 flex items-center justify-center">
                        <Award className="size-6 text-neutral-500" />
                      </Surface>
                      <Surface className="flex-1 text-left bg-transparent">
                        <Text className="text-2xs font-bold text-green-900 uppercase tracking-18 mb-1">Authenticity Guaranteed</Text>
                        <Text variant="xs" mode="muted" className="leading-relaxed">
                          Your physical card request was received. Check your Regional Dashboard for delivery status.
                        </Text>
                      </Surface>
                    </Surface>
                  </Stack>
                </Card.Content>

                <Card.Footer className="px-8 pb-8 pt-0">
                  <Button 
                    variant="primary" 
                    as={Link}
                    href="/dashboard"
                    className="w-full h-14 bg-green-700 hover:bg-green-800 text-white font-bold text-xs tracking-widest uppercase rounded-sm flex items-center justify-center shadow-brand group"
                  >
                    Go to Portal Dashboard <ArrowRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Card.Footer>
              </Card>
            )}

            <PortalFooter mode="public" />

          </Surface>
        </main>
      </Surface>
    </Surface>
  )
}
