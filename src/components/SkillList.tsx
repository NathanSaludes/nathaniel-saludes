"use client"
import { client } from "@/utils/Sanity"
import { TSkill } from "@/utils/types"
import { useCallback, useEffect, useState } from "react"
import Pill from "./Pill"

const SkillList: React.FC = () => {
  const [skills, setSkills] = useState<TSkill[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const fetchSkills = useCallback(async () => {
    const skills = await client.fetch<TSkill[]>(`*[_type == "skills"]`)
    setSkills(skills)
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchSkills()
  }, [fetchSkills])

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-wrap gap-1 gap-y-2">
          {skills.length > 0 && skills.map((skill) => <Pill key={skill._id}>{skill.title}</Pill>)}
        </div>
      )}
    </>
  )
}

export default SkillList
