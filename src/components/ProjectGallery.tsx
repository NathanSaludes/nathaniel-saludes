import { client } from "@/utils/Sanity"
import { TProject } from "@/utils/types"
import Image from "next/image"
import Link from "next/link"

export async function fetchProjects(): Promise<TProject[]> {
  return await client.fetch<TProject[]>(
    `*[_type == "projects"]{
      ...,
      thumbnail {
        asset->{
          url
        }
      }
    }`,
    undefined,
    {
      cache: "force-cache",
    },
  )
}

const ProjectGallery = async () => {
  const projects = await fetchProjects()

  return (
    <Link prefetch href="/projects" className="group grid grid-cols-3 gap-1 hover:opacity-75">
      {projects && projects.map((props) => <Project key={props._id} {...props} />)}
    </Link>
  )
}

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

export default ProjectGallery
