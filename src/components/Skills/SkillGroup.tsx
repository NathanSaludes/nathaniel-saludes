import { TSkill } from "@/utils/types"
import { skillCategoryStyles } from "@/utils/constants"
import Pill from "../Pill"

interface SkillGroupProps {
  skills: TSkill[]
  title: string
  group: "frontend" | "backend" | "tool" | "design" | "misc"
}
const SkillGroup = ({ skills, group }: SkillGroupProps) => {
  return (
    <>
      {skills
        .filter(({ category }) => category === group)
        .map(({ _id, title }) => (
          <Pill
            foregroundColor={skillCategoryStyles[group].foreground}
            backgroundColor={skillCategoryStyles[group].background}
            key={_id}
          >
            {title}
          </Pill>
        ))}
    </>
  )
}

export default SkillGroup
