import type { Metadata } from "next"
import "./globals.css"
import { GlobalContextProvider } from "@/utils/contexts/Providers"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nathanielsaludes.com"),
  title: "Nathaniel Saludes",
  description: "I design / develop accessible websites with seamless user experience.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-pt-24 scroll-smooth bg-default-background text-default-foreground">
      <GlobalContextProvider>{children}</GlobalContextProvider>
    </html>
  )
}
