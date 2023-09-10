interface Props extends React.HTMLAttributes<HTMLDivElement> {
  headingTitle?: string
}

const Section = ({ headingTitle, children, ...props }: Props) => {
  return (
    <section {...props}>
      {headingTitle && (
        <h3 className="mb-3 border-b-[3px] text-[34px] font-bold leading-normal tracking-tighter">{headingTitle}</h3>
      )}
      <div className="section-content leading-[180%]">{children}</div>
    </section>
  )
}

export default Section
