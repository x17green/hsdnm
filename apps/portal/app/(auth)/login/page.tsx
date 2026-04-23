"use client"

import React, { useState, useTransition } from "react"
import { 
  Surface, 
  Section, 
  Heading, 
  Text,
  Button
} from "@hsdnm/ui"
import { 
  Input, 
  InputOTP, 
  Card, 
  Separator,
} from "@heroui/react"
import { Shield, Fingerprint, Mail, Phone, Lock, ChevronRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LoginPage() {
  const [step, setStep] = useState<"identify" | "otp">("identify")
  const [identifier, setIdentifier] = useState("")
  const [isPending, startTransition] = useTransition()
  const [otpValue, setOtpValue] = useState("")

  const handleDiscovery = () => {
    if (!identifier) return
    
    // Institutional Identity Discovery Flow
    startTransition(async () => {
      // Simulate Backend Identity Lookup & OTP Trigger
      await new Promise(r => setTimeout(r, 1500))
      setStep("otp")
    })
  }

  const handleVerify = () => {
    startTransition(async () => {
      // Simulate Verification
      await new Promise(r => setTimeout(r, 1000))
      // In a real scenario, this would redirect to /dashboard
      window.location.href = "/dashboard"
    })
  }

  return (
    <main className="min-h-screen bg-green-900 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Institutional Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-700/20 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none" />
      
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-md border-none shadow-2xl rounded-sm">
        <Card.Header className="flex flex-col gap-1 p-8 pb-4">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center p-2 border-2 border-gold-500 shadow-gold relative overflow-hidden">
              <Image 
                src="/Logo.PNG" 
                alt="HSDNM" 
                width={80} 
                height={80} 
                className="object-contain" 
              />
            </div>
          </div>
          <Card.Title className="text-center font-serif font-black text-green-900 text-2xl">
            {step === "identify" ? "Identity Discovery" : "Security Verification"}
          </Card.Title>
          <Card.Description className="text-center text-neutral-500 text-[10px] tracking-widest uppercase font-bold mt-1">
            Institutional Access Gateway
          </Card.Description>
        </Card.Header>

        <Card.Content className="px-8 py-4">
          {step === "identify" ? (
            <div className="space-y-6">
              <Text className="text-sm text-neutral-600 text-center leading-relaxed">
                Enter your Email, Phone Number, Member ID, or NIN to discover your account.
              </Text>
              
              <div className="space-y-4">
                <Input
                  aria-label="Identifier"
                  placeholder="e.g. HSD-SS-BYS-0001"
                  variant="secondary"
                  className="font-sans border-2 border-neutral-200 focus-within:border-green-700 h-14 rounded-sm"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                />
                
                <Button 
                  className="w-full bg-green-900 text-gold-500 font-black tracking-widest h-14 rounded-sm shadow-brand"
                  onPress={handleDiscovery}
                  isLoading={isPending}
                >
                  {isPending ? "DISCOVERING..." : "DISCOVER IDENTITY"}
                </Button>
              </div>

              <div className="flex items-center gap-3 py-2">
                <Separator className="flex-1" />
                <Text className="text-[10px] font-mono text-neutral-300">OR</Text>
                <Separator className="flex-1" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                 <button className="flex flex-col items-center justify-center p-3 border-2 border-neutral-100 hover:border-gold-500 rounded-sm transition-colors group">
                    <Mail className="w-5 h-5 text-neutral-400 group-hover:text-green-700" />
                    <span className="text-[10px] font-bold mt-1 text-neutral-400 uppercase tracking-tighter">Support</span>
                 </button>
                 <button className="flex flex-col items-center justify-center p-3 border-2 border-neutral-100 hover:border-gold-500 rounded-sm transition-colors group">
                    <Shield className="w-5 h-5 text-neutral-400 group-hover:text-green-700" />
                    <span className="text-[10px] font-bold mt-1 text-neutral-400 uppercase tracking-tighter">Security</span>
                 </button>
              </div>
            </div>
          ) : (
            <div className="space-y-8 py-4">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-700 border-2 border-green-700/20">
                  <Lock className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <Text className="text-sm text-neutral-700 font-bold">OTP Verification</Text>
                  <Text className="text-xs text-neutral-500">Security code sent to your linked credentials.</Text>
                </div>
              </div>

              <div className="flex justify-center">
                <InputOTP 
                  maxLength={6} 
                  value={otpValue}
                  onChange={setOtpValue}
                >
                  <InputOTP.Group className="gap-2">
                    <InputOTP.Slot index={0} className="border-2 border-neutral-200 focus-within:border-green-700 h-14 w-12 rounded-sm text-green-900 font-bold text-lg" />
                    <InputOTP.Slot index={1} className="border-2 border-neutral-200 focus-within:border-green-700 h-14 w-12 rounded-sm text-green-900 font-bold text-lg" />
                    <InputOTP.Slot index={2} className="border-2 border-neutral-200 focus-within:border-green-700 h-14 w-12 rounded-sm text-green-900 font-bold text-lg" />
                  </InputOTP.Group>
                  <InputOTP.Separator />
                  <InputOTP.Group className="gap-2">
                    <InputOTP.Slot index={3} className="border-2 border-neutral-200 focus-within:border-green-700 h-14 w-12 rounded-sm text-green-900 font-bold text-lg" />
                    <InputOTP.Slot index={4} className="border-2 border-neutral-200 focus-within:border-green-700 h-14 w-12 rounded-sm text-green-900 font-bold text-lg" />
                    <InputOTP.Slot index={5} className="border-2 border-neutral-200 focus-within:border-green-700 h-14 w-12 rounded-sm text-green-900 font-bold text-lg" />
                  </InputOTP.Group>
                </InputOTP>
              </div>

              <div className="space-y-3">
                <Button 
                  className="w-full bg-gold-500 text-green-950 font-black tracking-widest h-14 rounded-sm shadow-gold"
                  onPress={handleVerify}
                  isLoading={isPending}
                >
                  {isPending ? "VERIFYING..." : "AUTHORIZE ACCESS"}
                </Button>
                <button 
                  className="w-full text-[10px] font-black text-green-700 hover:text-gold-600 tracking-widest uppercase py-2 flex items-center justify-center gap-2"
                  onClick={() => setStep("identify")}
                >
                  <ArrowLeft className="w-3 h-3" /> Use Different Identifier
                </button>
              </div>
            </div>
          )}
        </Card.Content>

        <Card.Footer className="flex flex-col gap-4 p-8 pt-4">
          <Separator />
          <Text className="text-center text-[10px] text-neutral-400 leading-relaxed uppercase tracking-tighter">
            By accessing this portal, you agree to the <br />
            Institutional Data Protection Policy and NDPR standards.
          </Text>
          <div className="flex items-center justify-center gap-4 grayscale opacity-40">
             <div className="flex items-center gap-1">
                <Shield className="w-3 h-3" />
                <span className="text-[8px] font-bold">NIN SECURE</span>
             </div>
             <div className="flex items-center gap-1">
                <Lock className="w-3 h-3" />
                <span className="text-[8px] font-bold">AES-256</span>
             </div>
          </div>
        </Card.Footer>
      </Card>
    </main>
  )
}
