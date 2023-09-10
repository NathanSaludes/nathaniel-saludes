import DownloadButton from "@/components/DownloadButton"
import ExperienceList from "@/components/Experience/ExperienceList"
import Header from "@/components/Header"
import ProjectGallery from "@/components/ProjectGallery"
import Section from "@/components/Section"
import SkillList from "@/components/Skills/SkillList"

export default async function Home() {
  return (
    <div className="antialiased">
      <div className="container relative mx-auto flex max-w-[1188px] gap-[116px] px-10">
        <Header />
        <main className="scroll-container flex min-h-[3000px] flex-col gap-[60px] py-20">
          {/* About me */}
          <Section id="about_me">
            <div className="flex flex-col gap-6">
              <div className="intro">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laboriosam tempore quod dolor ipsum sint
                  doloribus soluta quia illo. Quas?
                </p>
              </div>
              <DownloadButton />
            </div>
          </Section>

          {/* Skills */}
          <Section headingTitle="Skills" id="skills">
            <SkillList />
          </Section>

          {/* Work Experience */}
          <Section headingTitle="Experience" id="experience">
            <ExperienceList />
          </Section>

          {/* Projects */}
          <Section headingTitle="Projects" id="projects">
            <ProjectGallery />
          </Section>

          {/* Achievements */}
          <Section headingTitle="Achievements" id="achievements">
            <p className="text-gray-300">Coming Soon...</p>
          </Section>

          {/* Education */}
          <Section headingTitle="Education" id="education">
            <p className="text-gray-300">Coming Soon...</p>
          </Section>

          {/* Contact */}
          <Section headingTitle="Contact" id="contact">
            <p className="text-gray-300">Coming Soon...</p>
          </Section>
        </main>
      </div>
    </div>
  )
}
