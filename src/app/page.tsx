import Certifications from "@/components/Certifications"
import DownloadButton from "@/components/DownloadButton"
import ExperienceList from "@/components/Experience/ExperienceList"
import Header from "@/components/Header"
import ProjectGallery from "@/components/ProjectGallery"
import Section from "@/components/Section"
import SkillList from "@/components/Skills/SkillList"
import { EmailIcon, ExternalLinkIcon, PhoneIcon } from "@/components/icons"
import { cn } from "@/utils"
import { Plus_Jakarta_Sans } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] })

export default function Home() {
  return (
    <body className={cn(plusJakartaSans.className)}>
      <div className="container relative mx-auto block gap-20 px-6 lg:flex xl:max-w-screen-xl xl:gap-[116px]">
        <Header />
        <main className="flex min-h-[3000px] flex-col gap-[60px] pb-10 lg:pb-[582px] lg:pt-20">
          <div>
            <Image src="/web-development.svg" height={500} width={500} alt="web development" className="mx-auto" />
          </div>
          {/* About me */}
          <Section headingTitle="About me" id="about_me">
            <div className="flex flex-col gap-6">
              <div className="intro">
                <p>
                  The first time got hooked into web was when my college professor showed the whole class a bunch of
                  student portfolios and the Awwwards website where they nominate the best websites of the year. Since
                  then I have continuously been learning and practicing my skills in design and development—trying to
                  make one of my own. Today, I have finally been able to build and deploy my first portfolio website.
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

          {/* Certifications */}
          <Section headingTitle="Certifications" id="certifications">
            <Certifications />
          </Section>

          {/* Education */}
          <Section headingTitle="Education" id="education">
            <div className="flex flex-col gap-2">
              <Link
                href="https://iacademy.edu.ph/"
                target="_blank"
                className="flex max-w-max items-center font-bold leading-none text-frontend-foreground hover:underline"
              >
                iACADEMY <ExternalLinkIcon />
              </Link>
              <p className="text-[15px] leading-snug text-[#5C5C5C]">
                Bachelor of Computer Science with specialization in Software Engineering
              </p>
              <p className="mb-5 text-xs text-[#B6B6B6]">2015 Oct — 2020 Aug</p>
            </div>
            <Image src="/iACADEMY.png" width={153} height={153} alt="iACADEMY Logo" />
          </Section>

          {/* Contact */}
          <Section headingTitle="Contact" id="contact">
            <div className="flex flex-col gap-y-1">
              <p className="flex items-center gap-3">
                <span className="flex aspect-square w-6 items-center justify-center">
                  <EmailIcon />
                </span>
                saludesnathaniel@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <span className="flex aspect-square w-6 items-center justify-center">
                  <PhoneIcon />
                </span>
                +63 976 042 4755
              </p>
            </div>
          </Section>
        </main>
      </div>
    </body>
  )
}
