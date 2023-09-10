import { client } from "@/utils/Sanity"
import { TExperience as ExperienceType, TExperience } from "@/utils/types"
import moment from "moment"
import { PropsWithChildren } from "react"
import Experience from "./Experience"

async function fetchExperience(): Promise<TExperience[]> {
  const experience = await client.fetch<ExperienceType[]>(
    `*[_type == "experience"]{ 
      ...,
      skills[]->,
      company_logo { 
        ...,
        asset->{
          url
        }
      } 
    }`,
    undefined,
    {
      cache: "force-cache",
    },
  )

  experience.sort((a, b) => moment(b.start_date).unix() - moment(a.start_date).unix())
  return experience
}

const ExperienceList: React.FC<PropsWithChildren> = async () => {
  const experience = await fetchExperience()

  return (
    <ul className="flex flex-col gap-y-[10px]">
      {experience.map((exp) => {
        return (
          <li key={exp._id}>
            <Experience key={exp._id} {...exp} />
          </li>
        )
      })}
    </ul>
  )
}

export default ExperienceList
