import DownloadButton from "@/components/DownloadButton"
import Experience from "@/components/Experience"
import Header from "@/components/Header"
import Section from "@/components/Section"
import Skills from "@/components/Skills"
import { Skill } from "@/types/skill-type"
import { createClient } from "next-sanity"
// import experienceData from "@/testdata.json"

export default async function Home() {
  const client = createClient({
    projectId: "1avgl6w2",
    dataset: "production",
    useCdn: false,
    apiVersion: "2023-09-09",
  })

  const experienceData = await client.fetch(`*[_type == "experience"]`)
  const skillsData = await client.fetch<Skill[]>(`*[_type == "skills"]`)
  const skills = skillsData.map((skill) => skill.title)

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
            <Skills data={skills} />
          </Section>

          {/* Work Experience */}
          <Section headingTitle="Experience" id="experience">
            <Experience data={experienceData} />
          </Section>

          {/* Projects */}
          <Section headingTitle="Projects" id="projects">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque error architecto quisquam illo expedita
              doloribus at, similique possimus ratione nesciunt.
            </p>
          </Section>

          {/* Achievements */}
          <Section headingTitle="Achievements" id="achievements">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque error architecto quisquam illo expedita
              doloribus at, similique possimus ratione nesciunt.
            </p>
          </Section>

          {/* Education */}
          <Section headingTitle="Education" id="education">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque error architecto quisquam illo expedita
              doloribus at, similique possimus ratione nesciunt.
            </p>
          </Section>

          {/* Contact */}
          <Section headingTitle="Contact" id="contact">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque error architecto quisquam illo expedita
              doloribus at, similique possimus ratione nesciunt.
            </p>
          </Section>
        </main>
      </div>
    </div>
  )
}
