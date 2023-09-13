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
    <>
      <div className="grid grid-cols-3 gap-1">
        {projects && projects.map((props) => <Project key={props._id} {...props} />)}
      </div>
      <div className="flex">
        <Link
          prefetch={true}
          href="/projects"
          className="flex-grow p-4 text-center leading-4 underline-offset-4 transition-all duration-100 hover:bg-slate-50"
        >
          See All
        </Link>
      </div>
    </>
  )
}

const Project: React.FC<TProject> = ({ project_url, thumbnail, title }) => {
  return (
    <Link
      href={project_url}
      target="_blank"
      className="flex items-stretch justify-stretch bg-gray-100 text-gray-300 hover:opacity-75"
    >
      <Image
        className="w-full object-cover object-center"
        src={thumbnail.asset.url}
        alt={title}
        width={500}
        height={500}
      />
    </Link>
  )
}

export default ProjectGallery
