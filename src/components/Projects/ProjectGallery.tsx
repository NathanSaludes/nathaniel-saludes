import Link from "next/link"
import Project from "./Project"
import { fetchProjects } from "@/utils/queries"

const ProjectGallery = async () => {
  const projects = await fetchProjects()

  return (
    <Link prefetch href="/projects" className="group relative grid grid-cols-2 gap-2 hover:opacity-75 sm:grid-cols-3">
      {/* overlay */}
      <div className="absolute flex min-h-full min-w-full items-center justify-center bg-default-background text-lg text-default-foreground opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-80 dark:bg-default-background dark:group-hover:opacity-80">
        View all projects
      </div>
      {projects && projects.map((props) => <Project key={props._id} {...props} />)}
    </Link>
  )
}

export default ProjectGallery
