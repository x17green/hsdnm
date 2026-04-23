import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About the Movement | HSDNM",
  description: "Learn about the vision, history, and structural blueprint of the Sen. Henry Seriake Dickson National Movement.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
