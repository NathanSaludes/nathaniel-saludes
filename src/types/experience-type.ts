import { PortableTextBlock } from "sanity"
import { Reference } from "./reference-type"

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
}