const Pill: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <span className="inline-flex select-none items-center rounded-[30px] bg-accent-background px-3 py-1.5 text-[13px] font-bold leading-4 tracking-tight text-accent-foreground transition-all ease-in-out hover:brightness-90">
      {children}
    </span>
  )
}

export default Pill
