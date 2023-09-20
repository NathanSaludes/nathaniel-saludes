import { TProject } from "@/utils/types"
import Image from "next/image"

const Project: React.FC<TProject> = ({ thumbnail, title }) => {
  return (
    <div className="flex items-stretch justify-stretch bg-gray-100 text-gray-300">
      <Image
        className="w-full object-cover object-center"
        src={thumbnail.asset.url}
        alt={title}
        width={500}
        height={500}
      />
    </div>
  )
}

export default Project
