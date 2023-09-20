"use client"
import { useCallback, useContext } from "react"
import NavLink from "./NavLinks"
import { ObserverContext } from "@/utils/contexts/ObserverContext"

const Nav = () => {
  const { currentSection } = useContext(ObserverContext)

  const sectionIsVisible = useCallback(
    (sectionId: string) => {
      if (sectionId === currentSection) {
        return true
      }
      return false
    },
    [currentSection],
  )

  return (
    <nav className="hidden max-w-max flex-grow flex-col gap-2 pl-[34px] font-semibold text-[rgba(0,0,0,40%)] lg:flex">
      <NavLink href="#skills" visible={sectionIsVisible("skills")}>
        Skills
      </NavLink>
      <NavLink href="#experience" visible={sectionIsVisible("experience")}>
        Experience
      </NavLink>
      <NavLink href="#projects" visible={sectionIsVisible("projects")}>
        Projects
      </NavLink>
      <NavLink href="#certifications" visible={sectionIsVisible("certifications")}>
        Certifications
      </NavLink>
      <NavLink href="#education" visible={sectionIsVisible("education")}>
        Education
      </NavLink>
      <NavLink href="#contact" visible={sectionIsVisible("contact")}>
        Contact
      </NavLink>
    </nav>
  )
}

export default Nav
