import AboutMeSection from "@/components/AboutMeSection"
import Certifications from "@/components/Certifications"
import Contact from "@/components/Contact"
import Education from "@/components/Education"
import ExperienceList from "@/components/Experience/ExperienceList"
import Header from "@/components/Header/Header"
import HeroImage from "@/components/HeroImage"
import Main from "@/components/Main"
import ProjectGallery from "@/components/Projects/ProjectGallery"
import Section from "@/components/Section"
import SkillList from "@/components/Skills/SkillList"
import { ObserverContextProvider } from "@/utils/contexts/ObserverContext"
import { Plus_Jakarta_Sans } from "next/font/google"

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] })

export default function Home() {
  return (
    <body className={plusJakartaSans.className}>
      <div className="container relative mx-auto block gap-20 px-6 lg:flex xl:max-w-screen-xl xl:gap-[116px]">
        <ObserverContextProvider>
          <Header />
          <Main>
            <HeroImage />
            <Section title="About me" id="about_me">
              <AboutMeSection />
            </Section>
            <Section title="Skills" id="skills">
              <SkillList />
            </Section>
            <Section title="Experience" id="experience">
              <ExperienceList />
            </Section>
            <Section title="Projects" id="projects">
              <ProjectGallery />
            </Section>
            <Section title="Certifications" id="certifications">
              <Certifications />
            </Section>
            <Section title="Education" id="education">
              <Education />
            </Section>
            <Section title="Contact" id="contact">
              <Contact />
            </Section>
          </Main>
        </ObserverContextProvider>
      </div>
    </body>
  )
}
