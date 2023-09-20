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
    // <div className="rounded-lg p-3 outline-1 outline-[rgba(0,0,0,0.03)] hover:cursor-pointer hover:bg-white hover:shadow-md hover:shadow-[rgba(0,0,0,0.05)] hover:outline">
    //   <p className="mb-2 w-max cursor-text font-semibold leading-none text-black/30">{title}</p>
    //   <div className="pills flex flex-wrap gap-x-1 gap-y-2">

    //   </div>
    // </div>
  )
}

export default SkillGroup
