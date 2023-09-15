import { TExperience } from "@/utils/types"
import { skillStyles } from "@/utils/constants"
import { PortableText } from "@portabletext/react"
import moment from "moment"
import Image from "next/image"
import React from "react"
import Pill from "../Pill"
import { ExternalLinkIcon } from "../icons"
import Link from "next/link"

interface Props extends TExperience {
  key?: React.Key
}
const Experience = ({
  start_date,
  end_date,
  company,
  company_link,
  job_description,
  job_title,
  skills,
  company_logo,
}: Props) => {
  const startDate = moment(start_date)
  const lastDate = moment(end_date)
  const tenureInMonths = lastDate.diff(startDate, "months")
  const tenureInYears = Math.floor(tenureInMonths / 12)

  /* functions
  ------------------------------------------------------------------------------------------ */
  const getTenureLocalString = () =>
    tenureInYears > 0
      ? `(${tenureInYears} ${tenureInYears > 1 ? "Years" : "Year"})`
      : `(${tenureInMonths} ${tenureInMonths > 1 ? "Months" : "Month"})`

  const getTenure = (): string =>
    `${startDate.format("YYYY MMM")} — ${end_date ? lastDate.format("YYYY MMM") : "Present"}`

  /* -------------------------------------------------------------------------------------- */

  return (
    <div className="experience-block rounded-lg p-4 outline-1 outline-[rgba(0,0,0,0.03)] duration-300 ease-in-out hover:cursor-pointer hover:bg-white hover:shadow-xl hover:shadow-[rgba(0,0,0,0.05)] hover:outline">
      <div className="block sm:grid sm:grid-cols-[122px,1fr] sm:gap-x-[30px]">
        {/* Tenure Column */}
        <div className="flex gap-1 pb-2 pt-5 text-left text-xs font-semibold text-[#B6B6B6] sm:mt-1 sm:flex-col sm:p-0 sm:text-right">
          <span>{getTenure()}</span>
          <span>{getTenureLocalString()}</span>
        </div>
        {/* Job Details Container */}
        <div className="flex flex-col gap-y-[10px]">
          {/* Job Details */}
          <div>
            {/* Job Title & Company Name */}
            <p className="text-md font-bold leading-[180%]">
              <span>{job_title} — </span>
              <Link href={company_link} target="_blank" className="text-[#ef9e00] hover:text-[#db9200] hover:underline">
                {company}
              </Link>
              {company_link && <ExternalLinkIcon />}
            </p>
            <PortableText
              value={job_description}
              components={{
                list: {
                  bullet: ({ children }) => (
                    <ul className="text-stone ml-6 list-disc font-normal text-[#5C5C5C]">{children}</ul>
                  ),
                },
              }}
            />
          </div>
          {/* Skills Used */}
          <div className="block">
            {skills &&
              skills.map(({ _id, title, category }) => (
                <Pill
                  foregroundColor={skillStyles[category].foreground}
                  backgroundColor={skillStyles[category].background}
                  key={_id}
                >
                  {title}
                </Pill>
              ))}
          </div>
          {/* Company Logo */}
          <div className="">
            {company_logo && <Image src={company_logo.asset.url} alt={company} width={195.33} height={94} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
