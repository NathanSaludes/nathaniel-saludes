"use client"
import { client } from "@/utils/Sanity"
import { TExperience as ExperienceType } from "@/utils/types"
import moment from "moment"
import { useCallback, useEffect, useState } from "react"
import Experience from "./Experience"

interface Props {
  children?: React.ReactNode | undefined
}
const ExperienceList: React.FC<Props> = () => {
  const [experience, setExperience] = useState<ExperienceType[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const fetchExperience = useCallback(async () => {
    const experience = await client.fetch<ExperienceType[]>(
      `*[_type == "experience"]{ 
        ...,
        skills[]->,
        company_logo { 
          ...,
          asset -> { 
            url 
          } 
        } 
      }`,
    )

    experience.sort((a, b) => moment(b.start_date).unix() - moment(a.start_date).unix())
    return experience
  }, [])

  useEffect(() => {
    fetchExperience().then((res) => {
      setExperience(res)
      setLoading(false)
    })
  }, [fetchExperience])

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul className="flex flex-col gap-y-[10px]">
          {experience.map((exp) => {
            return (
              <li key={exp._id}>
                <Experience key={exp._id} {...exp} />
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}

export default ExperienceList
