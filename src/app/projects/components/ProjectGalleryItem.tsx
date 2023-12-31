import Link from "next/link"
import { FC, ReactNode } from "react"

interface Props {
  url: string
  title: string
  children?: ReactNode
}
const ProjectGalleryItem: FC<Props> = ({ children, url, title }) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="group/item relative flex aspect-square bg-secondary-background brightness-95"
    >
      <div className="absolute flex min-h-full min-w-full items-center justify-center bg-white text-center text-lg font-semibold text-default-foreground opacity-0 transition-all duration-300 ease-in-out group-hover/item:bg-white/40 group-hover/item:opacity-100 group-hover/item:backdrop-blur-md dark:bg-black dark:group-hover/item:bg-black/80">
        {title}
      </div>
      {children}
    </Link>
  )
}

export default ProjectGalleryItem
