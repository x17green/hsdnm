import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Town Hall Calendar | HSDNM",
  description: "Schedule of upcoming structural town halls, inaugurations, and public movement events.",
}

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
