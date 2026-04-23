import { 
  Surface, 
  Section, 
  Heading, 
  Text, 
  Button,
  getWebLink,
  getPortalLink
} from "@hsdnm/ui"
import Link from "next/link"
import Image from "next/image"
import { Shield, Users, Lock, ChevronRight } from "lucide-react"

export default function PortalLandingPage() {
  return (
    <main className="min-h-screen bg-neutral-50 flex flex-col">
      {/* ── Institutional Header ── */}
      <header className="py-6 px-6 bg-green-900 border-b-2 border-gold-500 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-full bg-white flex items-center justify-center p-1 border-2 border-gold-500 overflow-hidden shadow-[0_0_15px_rgba(201,162,39,0.3)]">
              <Image 
                src="/Logo.PNG" 
                alt="HSDNM Official Logo" 
                width={56}
                height={56}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <Heading level={4} className="text-white font-serif leading-none tracking-tight">
                HSDNM
              </Heading>
              <Text variant="body" className="text-gold-500 tracking-[0.2em] text-[10px] uppercase font-black">
                Member Portal
              </Text>
            </div>
          </div>
          <Link href={getWebLink("/")} className="text-white/60 hover:text-gold-500 text-xs font-sans tracking-widest uppercase transition-colors">
            Main Site
          </Link>
        </div>
      </header>

      {/* ── Hero Section: The Gateway ── */}
      <Section variant="hero" className="flex-1 flex items-center pt-16 pb-24 overflow-hidden relative">
        {/* Subtle Brand Watermark */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center overflow-hidden">
             <div className="text-[40rem] font-serif font-black select-none">HSD</div>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-6 relative z-10">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-950/40 border border-green-700 rounded-sm text-green-400 font-sans text-[10px] tracking-widest uppercase">
                <Shield className="w-3 h-3" />
                Secure Identity Environment
              </div>
              <Heading className="text-6xl font-serif font-black text-green-900 leading-[1.1]">
                Gateway to <br />
                <span className="text-gold-500">Responsible</span> <br />
                Leadership
              </Heading>
            </div>
            
            <Text className="text-lg text-neutral-600 max-w-xl leading-relaxed">
              Welcome to the unified digital backbone of the HSD National Movement. 
              Securely register your membership, verify your identity via NIN, 
              and access the institutional resources of the movement.
            </Text>

            <div className="flex flex-wrap gap-4 pt-4">
               <Button 
                asChild 
                variant="accent" 
                size="lg" 
                className="bg-gold-500 hover:bg-gold-400 text-green-950 px-8 rounded-sm font-black tracking-widest h-14"
              >
                <Link href="/register" className="flex items-center gap-2">
                  JOIN THE MOVEMENT <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-2 border-green-700 text-green-900 hover:bg-green-50 px-8 rounded-sm font-bold tracking-widest h-14"
              >
                <Link href="/login">
                  MEMBER LOGIN
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Surface className="p-8 border-2 border-green-900 bg-white shadow-brand-lg relative overflow-hidden">
               {/* Accent Edge */}
               <div className="absolute top-0 left-0 w-full h-1 bg-gold-500" />
               
               <div className="space-y-6">
                  <div className="space-y-2">
                    <Heading level={3} className="font-serif font-black text-green-900">
                      Access Tiers
                    </Heading>
                    <Text className="text-sm text-neutral-500">
                      Standardized entry for all levels of the movement hierarchy.
                    </Text>
                  </div>

                  <div className="space-y-3">
                    {[
                      { icon: Users, label: "Registered Members", desc: "Access Digital ID & Network" },
                      { icon: Shield, label: "LGA Coordinators", desc: "Local Mobilization Tools" },
                      { icon: Lock, label: "State & National", desc: "Strategic Command Dashboards" }
                    ].map((tier, i) => (
                      <div key={i} className="flex gap-4 p-4 bg-neutral-50 border border-neutral-200 hover:border-gold-500/50 transition-all group">
                         <div className="w-10 h-10 rounded-sm bg-green-900 flex items-center justify-center text-gold-500 shrink-0">
                           <tier.icon className="w-5 h-5" />
                         </div>
                         <div>
                            <div className="text-sm font-black text-green-900 uppercase tracking-wider">{tier.label}</div>
                            <div className="text-xs text-neutral-500">{tier.desc}</div>
                         </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                     <Text className="text-[10px] text-neutral-400 font-mono">SECURE GATEWAY V2.6</Text>
                     <Link href="/coordinator/login" className="text-green-700 hover:text-gold-600 text-[10px] font-black tracking-widest uppercase underline underline-offset-4">
                        ADMIN LOGIN
                     </Link>
                  </div>
               </div>
            </Surface>
          </div>
        </div>
      </Section>

      {/* ── Trust Indicators ── */}
      <footer className="py-12 bg-white border-t border-neutral-200 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <div className="flex items-center gap-2 text-neutral-900 font-black tracking-tighter">
             <Shield className="w-5 h-5 text-green-700" />
             <span className="text-sm">NIN VERIFIED</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-900 font-black tracking-tighter">
             <Lock className="w-5 h-5 text-green-700" />
             <span className="text-sm">NDPR COMPLIANT</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-900 font-black tracking-tighter">
             <div className="w-5 h-5 bg-green-700 rounded-full" />
             <span className="text-sm">HSD LEGACY SECURE</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
