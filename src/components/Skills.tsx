import Pill from "./Pill"

interface Props {
  data: string[]
}
const Skills: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-1 gap-y-2">{data && data.map((skill) => <Pill key={skill}>{skill}</Pill>)}</div>
  )
}

export default Skills
