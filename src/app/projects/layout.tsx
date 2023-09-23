import { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import Header from "./components/Header"

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Projects",
  description: "Websites, apps, and various projects that I have worked on",
}

function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <body className={plusJakartaSans.className}>
      <Header />
      <main>{children}</main>
    </body>
  )
}

export default ProjectsLayout
