interface Props {}

const ProjectGallery: React.FC<Props> = () => {
  return (
    <div className="grid grid-cols-3 gap-[10px]">
      {Array.from({ length: 9 }).map((_, i) => (
        <Project key={i} />
      ))}
    </div>
  )
}

const Project: React.FC = () => {
  return (
    <div className="flex h-[130px] items-center justify-center bg-gray-100 text-gray-300 outline-1">Coming soon...</div>
  )
}

export default ProjectGallery
