import "./globals.css"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nathaniel Saludes",
  description: "I design / develop accessible websites with seamless user experience.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-pt-24 scroll-smooth">
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  )
}
