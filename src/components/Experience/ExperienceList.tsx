import Queries from "@/utils/Queries"
import Experience from "./Experience"

interface Props {
  children?: React.ReactNode | undefined
}
const ExperienceList: React.FC<Props> = async () => {
  const experience = await Queries.fetchExperience()
  const skills = await Queries.fetchSkills()

  return (
    <ul className="flex flex-col gap-y-[10px]">
      {Array.isArray(experience) &&
        experience.map((exp) => {
          const skillReferences = exp.skills.map(({ _ref }) => _ref)
          return (
            <Experience
              key={exp._id}
              jobDetails={{
                companyName: exp.company,
                companyLink: exp.company_link,
                jobTitle: exp.job_title,
                jobDescription: exp.job_description,
                startDate: exp.start_date,
                lastDate: exp.end_date,
                skillsUsed: skills.filter(({ _id }) => skillReferences.includes(_id)),
                companyLogoURL: exp.company_logo?.asset.url,
              }}
            />
          )
        })}
    </ul>
  )
}

export default ExperienceList
