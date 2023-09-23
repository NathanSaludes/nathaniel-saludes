type Props = {
  children?: React.ReactNode
}

const Main = ({ children }: Props) => {
  return <main className="flex min-h-[3000px] flex-col gap-[60px] pb-10 lg:pb-[582px] lg:pt-20">{children}</main>
}

export default Main
