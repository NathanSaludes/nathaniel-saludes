import { fetchGeneral } from "@/utils/queries"
import DownloadButton from "./DownloadButton"
import { PortableText } from "@portabletext/react"

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
      <DownloadButton />
    </div>
  )
}

export default AboutMeSection
