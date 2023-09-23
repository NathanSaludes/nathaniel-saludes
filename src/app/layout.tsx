import type { Metadata } from "next"
import "./globals.css"
import { GlobalContextProvider } from "@/utils/contexts/Providers"

export const metadata: Metadata = {
  title: "Nathaniel Saludes",
  description: "I design / develop accessible websites with seamless user experience.",
  openGraph: {
    images: "./opengraph-image.jpg",
  },
  icons: "./favicon.ico",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-pt-24 scroll-smooth antialiased">
      <GlobalContextProvider>{children}</GlobalContextProvider>
    </html>
  )
}
