"use client"

import { NextStudio } from "next-sanity/studio"
import config from "../../../../sanity.config"
import { Plus_Jakarta_Sans } from "next/font/google"
import { cn } from "@/utils"

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] })

export default function AdminPage() {
  return (
    <body className={cn(plusJakartaSans.className, "antialiased")}>
      <NextStudio config={config} />
    </body>
  )
}
