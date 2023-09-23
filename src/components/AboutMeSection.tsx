import { fetchGeneral } from "@/utils/queries"
import { PortableText } from "@portabletext/react"
import Link from "next/link"

const AboutMeSection = async () => {
  const { about_me } = await fetchGeneral()

  if (!about_me) {
    return "Unable to load about me section"
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="intro">
        <PortableText value={about_me} />
      </div>
      {/* Download Button */}
      <Link
        target="_blank"
        href="https://drive.google.com/file/d/1K3jOUMCBo3OjzyxPtgUmPWpaj1NfOUwr/view?usp=sharing"
        className="flex w-full max-w-[257px] items-center justify-between gap-4 rounded-md bg-default-foreground px-5 py-3 text-lg font-semibold leading-snug text-default-background transition-all duration-100 ease-in-out hover:opacity-80 active:scale-[0.95] dark:bg-white"
      >
        <span>Download Resume</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-default-background"
        >
          <path d="m12 16 4-5h-3V4h-2v7H8z"></path>
          <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
        </svg>
      </Link>
    </div>
  )
}

export default AboutMeSection
