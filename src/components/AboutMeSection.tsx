import { fetchGeneral } from "@/utils/queries"
import DownloadButton from "./DownloadButton"
import { PortableText } from "@portabletext/react"

const AboutMeSection = async () => {
  const general = await fetchGeneral()
  return (
    <div className="flex flex-col gap-6">
      <div className="intro">
        <PortableText value={general.about_me} />
      </div>
      <DownloadButton />
    </div>
  )
}

export default AboutMeSection
