import { cn } from "@/utils"
import Header from "./components/Header"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Metadata } from "next"

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Projects",
  description: "Websites, apps, and various projects that I have worked on",
}

function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <body className={cn(plusJakartaSans.className, "bg-default-background text-default-foreground antialiased")}>
      <Header />
      <main>{children}</main>
    </body>
  )
}

export default ProjectsLayout
