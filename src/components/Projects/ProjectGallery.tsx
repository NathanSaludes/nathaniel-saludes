import Link from "next/link"
import Project from "./Project"
import { fetchProjects } from "@/utils/queries"

const ProjectGallery = async () => {
  const projects = await fetchProjects()

  return (
    <Link prefetch href="/projects" className="group relative grid grid-cols-2 gap-1 hover:opacity-75 sm:grid-cols-3">
      <div className="overlay absolute flex h-full w-full items-center justify-center bg-white/70 text-lg text-black/50 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
        View all projects
      </div>
      {projects && projects.map((props) => <Project key={props._id} {...props} />)}
    </Link>
  )
}

export default ProjectGallery
