import Queries from "@/utils/Queries"
import Pill from "./Pill"

const SkillList = async () => {
  const skills = await Queries.fetchSkills()
  return (
    <div className="flex flex-wrap gap-1 gap-y-2">
      {skills.length > 0 && skills.map((skill) => <Pill key={skill._id}>{skill.title}</Pill>)}
    </div>
  )
}

export default SkillList
