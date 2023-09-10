import { Experience } from "@/types/experience-type";
import { Skill } from "@/types/skill-type";
import moment from "moment";
import { createClient } from "next-sanity";

export default class Queries {

	static experience: Experience[]
	static skills: Skill[]

	// initialize client
	static client = createClient({
		projectId: "1avgl6w2",
		dataset: "production",
		useCdn: true,
		apiVersion: moment().format("YYYY-MM-DD"),
	})	

	// Experience
	static async fetchExperience(): Promise<Experience[]> {
		const _experience = await this.client.fetch<Experience[]>(
			`*[_type == "experience"]{ 
				..., 
				company_logo { 
					...,
					asset -> { 
						url 
					} 
				} 
			}`,
		)
	
		// sort experience in descending order (latest -> oldest)
		this.experience = _experience.sort((a, b) => moment(b.start_date).unix() - moment(a.start_date).unix())
		return this.experience
	}

	// Skills
	static async fetchSkills(): Promise<Skill[]> {
		this.skills = await this.client.fetch<Skill[]>(`*[_type == "skills"]`)
		return this.skills;
	}
}