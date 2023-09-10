import { PortableTextBlock } from "sanity"

/* Experience
------------------------------------------*/
export type Experience = {
  _id: string
	_createdAt: Date
  company_link: string
  job_title: string
  company: string
  start_date: string
  end_date?: string
  skills: Reference[]
  job_description: PortableTextBlock[]
  company_logo?: Logo
}

/* Logo
------------------------------------------*/
export type Logo = {
  _type: string,
  asset: {
    url: string
  }
}

/* Reference
------------------------------------------*/
export type Reference = { 
	_key: string, 
	_ref: string, 
	_type: string 
}


/* Skill
------------------------------------------*/
export type Skill = {
	title: string,
  _updatedAt: string,
  _createdAt: string,
  _rev: string,
  _type: string,
  _id: string
}