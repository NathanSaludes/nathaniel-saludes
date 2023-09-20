import Link from "next/link"
import { ExternalLinkIcon } from "./icons"
import Image from "next/image"

const Education = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <Link
          href="https://iacademy.edu.ph/"
          target="_blank"
          className="flex max-w-max items-center font-bold leading-none text-frontend-foreground hover:underline"
        >
          iACADEMY <ExternalLinkIcon />
        </Link>
        <p className="text-[15px] leading-snug text-[#5C5C5C]">
          Bachelor of Computer Science with specialization in Software Engineering
        </p>
        <p className="mb-5 text-xs text-[#B6B6B6]">2015 Oct — 2020 Aug</p>
      </div>
      <Image src="/iACADEMY.png" width={153} height={153} alt="iACADEMY Logo" />
    </>
  )
}

export default Education
