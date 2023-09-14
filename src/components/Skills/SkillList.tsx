import { client } from "@/utils/Sanity"
import { TSkill } from "@/utils/types"
import SkillGroup from "./SkillGroup"

async function fetchSkills() {
  const skills = await client.fetch<TSkill[]>(`*[_type == "skills"] | order(_createdAt asc) `, undefined, {
    cache: "force-cache",
  })

  return skills.sort((a, b) => a.category.localeCompare(b.category))
}

const SkillList = async () => {
  const skills = await fetchSkills()

  return (
    <div className="flex gap-1 outline-dashed outline-1">
      {skills.length && (
        <div className="block">
          <SkillGroup
            group="frontend"
            skills={skills}
            title="Frontend"
          />
          <SkillGroup
            group="backend"
            skills={skills}
            title="Backend"
          />
          <SkillGroup
            group="tool"
            skills={skills}
            title="TOol"
          />
          <SkillGroup
            group="design"
            skills={skills}
            title="Design"
          />
          <SkillGroup
            group="misc"
            skills={skills}
            title="Others"
          />
        </div>
      )}
    </div>
  )
}

export default SkillList
