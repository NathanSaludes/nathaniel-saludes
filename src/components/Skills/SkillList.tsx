import { fetchSkills } from "@/utils/queries"
import SkillGroup from "./SkillGroup"

const SkillList = async () => {
  const skills = await fetchSkills()
  skills.sort((a, b) => a.category.localeCompare(b.category))

  return (
    <>
      {/* Skill Legend */}
      <div className="legend mb-4 mt-4 flex flex-wrap gap-x-3 font-semibold text-black/30">
        <span className="group/frontend inline-flex items-center gap-2 px-2 py-1 text-sm underline-offset-2">
          <div className="legend-color aspect-square h-3 rounded-full bg-frontend-background"></div>
          Frontend
        </span>
        <span className="group/backend inline-flex items-center gap-2 px-2 py-1 text-sm underline-offset-2">
          <div className="legend-color aspect-square h-3 rounded-full bg-backend-background"></div>
          Backend
        </span>
        <span className="group/tools inline-flex items-center gap-2 px-2 py-1 text-sm underline-offset-2">
          <div className="legend-color aspect-square h-3 rounded-full bg-tool-background"></div>
          Tools
        </span>
        <span className="group/design inline-flex items-center gap-2 px-2 py-1 text-sm underline-offset-2">
          <div className="legend-color aspect-square h-3 rounded-full bg-design-background"></div>
          Design
        </span>
        <span className="group/misc inline-flex items-center gap-2 px-2 py-1 text-sm underline-offset-2">
          <div className="legend-color aspect-square h-3 rounded-full bg-misc-background"></div>
          Others
        </span>
      </div>
      {/* Skill Pills */}
      <div className="group">
        <span className="group cursor-pointer transition-all duration-100 ease-in-out group-hover:opacity-40 group-hover:hover:opacity-100">
          <SkillGroup group="frontend" skills={skills} title="Frontend" />
        </span>
        <span className="group cursor-pointer transition-all duration-100 ease-in-out group-hover:opacity-40 group-hover:hover:opacity-100">
          <SkillGroup group="backend" skills={skills} title="Backend" />
        </span>
        <span className="group cursor-pointer transition-all duration-100 ease-in-out group-hover:opacity-40 group-hover:hover:opacity-100">
          <SkillGroup group="tool" skills={skills} title="Tool" />
        </span>
        <span className="group cursor-pointer transition-all duration-100 ease-in-out group-hover:opacity-40 group-hover:hover:opacity-100">
          <SkillGroup group="design" skills={skills} title="Design" />
        </span>
        <span className="group cursor-pointer transition-all duration-100 ease-in-out group-hover:opacity-40 group-hover:hover:opacity-100">
          <SkillGroup group="misc" skills={skills} title="Others" />
        </span>
      </div>
    </>
  )
}

export default SkillList
