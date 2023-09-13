import Link from "next/link"
import { FC, ReactNode } from "react"

interface Props {
  key: number | string
  children?: ReactNode
}
const ProjectGalleryItem: FC<Props> = ({ key, children }) => {
  return (
    <Link href="#" key={key} className="flex aspect-square bg-secondary-background hover:opacity-75">
      {children}
    </Link>
  )
}

export default ProjectGalleryItem
