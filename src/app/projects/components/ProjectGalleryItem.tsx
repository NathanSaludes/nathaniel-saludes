import Link from "next/link"
import { FC, ReactNode } from "react"

interface Props {
  key: number | string
  children?: ReactNode
}
const ProjectGalleryItem: FC<Props> = ({ key, children }) => {
  return (
    <Link
      href="#"
      key={key}
      className="flex aspect-square bg-secondary-background transition-all duration-150 ease-in-out hover:opacity-75 group-hover:opacity-60 group-hover:hover:opacity-100"
    >
      {children}
    </Link>
  )
}

export default ProjectGalleryItem
