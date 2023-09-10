"use client"
import { Skill } from "@/types/skill-type"
import { PortableText } from "@portabletext/react"
import moment from "moment"
import React from "react"
import { PortableTextBlock } from "sanity"
import Pill from "../Pill"
import Image from "next/image"

export type JobDetails = {
  startDate: string
  lastDate?: string
  jobTitle: string
  jobDescription: PortableTextBlock[]
  companyName: string
  companyLink: string
  companyLogoURL?: string
  skillsUsed?: Skill[]
}

interface Props {
  key?: React.Key
  jobDetails: JobDetails
}

const Experience: React.FC<Props> = ({ jobDetails }) => {
  const startDate = moment(jobDetails.startDate)
  const lastDate = moment(jobDetails.lastDate)
  const tenureInMonths = lastDate.diff(startDate, "months")
  const tenureInYears = Math.floor(tenureInMonths / 12)

  return (
    <>
      <div className="grid grid-cols-[122px,1fr] gap-x-[30px]">
        {/* Tenure Column */}
        <div className="text-right text-xs font-semibold text-[#B6B6B6]">
          <p>{`${startDate.format("YYYY MMM")} — ${jobDetails.lastDate ? lastDate.format("YYYY MMM") : "Present"}`}</p>
          <p>
            {tenureInYears > 0 ? (
              <span>
                {tenureInYears} {tenureInYears > 1 ? "Years" : "Year"}
              </span>
            ) : (
              <span>
                {tenureInMonths} {tenureInMonths > 1 ? "Months" : "Month"}
              </span>
            )}
          </p>
        </div>
        {/* Job Details Container */}
        <div className="flex flex-col gap-y-[10px]">
          {/* Job Details */}
          <div>
            {/* Job Title & Company Name */}
            <a href="#" className="text-base font-bold leading-[180%]">
              <span>{jobDetails.jobTitle}</span>
              <span className="text-[#EF9E00]"> — {jobDetails.companyName}</span>
              {jobDetails.companyLink && (
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
              )}
            </a>
            <PortableText
              value={jobDetails.jobDescription}
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
          <div className="flex flex-wrap gap-1 gap-y-2">
            {jobDetails.skillsUsed && jobDetails.skillsUsed.map(({ _id, title }) => <Pill key={_id}>{title}</Pill>)}
          </div>
          {/* Company Logo */}
          <div className="">
            {jobDetails.companyLogoURL && (
              <Image src={jobDetails.companyLogoURL} alt={jobDetails.companyName} width={195.33} height={94} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience