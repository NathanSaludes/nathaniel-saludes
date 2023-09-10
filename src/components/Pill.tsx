interface Props {
  backgroundColor?: string
  foregroundColor?: string
  children?: React.ReactNode | undefined
}

const Pill: React.FC<Props> = ({
  backgroundColor = "bg-accent-background",
  foregroundColor = "text-accent-foreground",
  children,
}) => {
  return (
    <span
      className={`inline-flex select-none items-center rounded-[30px] px-3 py-1.5 text-[13px] font-bold leading-4 tracking-tight transition-all ease-in-out hover:brightness-90 ${backgroundColor} ${foregroundColor}`}
    >
      {children}
    </span>
  )
}

export default Pill
