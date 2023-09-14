import Image from "next/image"
import ProjectGalleryItem from "./components/ProjectGalleryItem"
import { fetchProjects } from "@/components/ProjectGallery"

export default async function ProjectGalleryPage() {
  const projects = await fetchProjects()

  return (
    <div className="group grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4">
      {projects &&
        projects.map(({ thumbnail, title, _id }) => (
          <ProjectGalleryItem key={_id}>
            <Image className="w-full object-cover" src={thumbnail.asset.url} alt={title} width={500} height={500} />
          </ProjectGalleryItem>
        ))}
    </div>
  )
}
