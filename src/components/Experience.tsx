"use client"
import moment from "moment"
import Skills from "./Skills"
import React from "react"
import { PortableText } from "@portabletext/react"
import { Experience } from "@/types/experience-type"

interface ExperienceProps {
  data: Experience[]
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <ul className="flex flex-col gap-y-[10px]">
      {data &&
        data.map((expDetails) => (
          <li key={expDetails._id}>
            <Term data={expDetails} />
          </li>
        ))}
    </ul>
  )
}

const Term: React.FC<{ data: Experience }> = ({ data }) => {
  // dates
  const start_date = moment(data.start_date)
  const end_date = data.end_date ? moment(data.end_date) : moment()
  const difference = end_date.diff(start_date, "month")

  return (
    <div className="grid grid-cols-[122px,1fr] gap-x-[30px]">
      <div className="date-column text-right text-xs font-semibold text-[#B6B6B6]">
        <p>{start_date.format("YYYY MMM") + " — " + (data.end_date ? end_date.format("YYYY MMM") : "Present")}</p>
        <p>
          {difference - 12 > 0 ? (
            <span>({Math.floor(difference / 12)} Year/s)</span>
          ) : (
            <span>({difference} Months)</span>
          )}
        </p>
      </div>
      <div className="details flex flex-col gap-y-[10px]">
        <div className="term-details">
          <a href="#" className="text-base font-bold leading-[180%]">
            <span>{data.job_title}</span>
            <span className="text-[#EF9E00]"> — {data.company}</span>
            <svg
              className="ml-1 inline-block"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.58333 1.75L9.50425 3.67092L5.42092 7.75425L6.24575 8.57908L10.3291 4.49575L12.25 6.41667V1.75H7.58333Z"
                fill="#C0C0C0"
              />
              <path
                d="M11.0833 11.0833H2.91667V2.91667H7L5.83333 1.75H2.91667C2.27325 1.75 1.75 2.27325 1.75 2.91667V11.0833C1.75 11.7268 2.27325 12.25 2.91667 12.25H11.0833C11.7268 12.25 12.25 11.7268 12.25 11.0833V8.16667L11.0833 7V11.0833Z"
                fill="#C0C0C0"
              />
            </svg>
          </a>
          <PortableText value={data.job_description} />
        </div>
        <div className="skills-used">
          <Skills data={data.skills} />
        </div>
        <div className="company-logo"></div>
      </div>
    </div>
  )
}

export default Experience
