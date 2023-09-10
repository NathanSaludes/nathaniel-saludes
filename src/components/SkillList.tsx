import { client } from "@/utils/Sanity"
import { TSkill } from "@/utils/types"
import Pill from "./Pill"

async function fetchSkills() {
  const skills = await client.fetch<TSkill[]>(`*[_type == "skills"] | order(_createdAt asc)`, undefined, {
    cache: "force-cache",
  })
  return skills
}

const SkillList: React.FC = async () => {
  const skills = await fetchSkills()

  return (
    <div className="flex flex-wrap gap-1 gap-y-2">
      {skills.length > 0 && skills.map((skill) => <Pill key={skill._id}>{skill.title}</Pill>)}
    </div>
  )
}

export default SkillList
