import { PortableTextBlock } from "sanity"

export type Experience = {
  _id: string
	_createdAt: Date
  company_link: string
  job_title: string
  company: string
  start_date: string
  end_date?: string
  skills: string[]
  job_description: PortableTextBlock[]
}