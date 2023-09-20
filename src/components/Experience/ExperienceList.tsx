import { fetchExperience } from "@/utils/queries"
import Experience from "./Experience"

const ExperienceList = async () => {
  const experience = await fetchExperience()

  return (
    <ul className="flex flex-col gap-y-4">
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
