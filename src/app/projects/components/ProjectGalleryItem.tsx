import Link from "next/link"
import { FC, ReactNode } from "react"

interface Props {
  url: string
  children?: ReactNode
}
const ProjectGalleryItem: FC<Props> = ({ children, url }) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="flex aspect-square bg-secondary-background brightness-95 transition-all duration-150 ease-in-out hover:brightness-90"
    >
      {children}
    </Link>
  )
}

export default ProjectGalleryItem
