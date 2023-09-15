import { PortableTextBlock } from "sanity"

/* Experience
------------------------------------------*/
export type TExperience = {
  _id: string
  _createdAt: Date
  company_link: string
  job_title: string
  company: string
  start_date: string
  end_date?: string
  skills: TSkill[]
  job_description: PortableTextBlock[]
  company_logo?: TImage
}

/* Logo
------------------------------------------*/
export type TImage = {
  _type: string
  asset: {
    url: string
  }
}

/* Reference
------------------------------------------*/
export type TReference = {
  _key: string
  _ref: string
  _type: string
}

/* Skill
------------------------------------------*/
export type TSkill = {
  title: string
  category: "frontend" | "backend" | "tool" | "design" | "misc"
  _updatedAt: string
  _createdAt: string
  _rev: string
  _type: string
  _id: string
}

/* Project
------------------------------------------*/
export type TProject = {
  _id: string
  title: string
  project_url: string
  thumbnail: {
    asset: {
      url: string
    }
  }
}

/* Achievements
------------------------------------------*/
export type TAchievements = {
  _type: string,
  link: string,
  thumbnail_preview: TImage
  _updatedAt: string,
  date_acquired: string,
  _createdAt: string,
  _id: string,
  label: string
}