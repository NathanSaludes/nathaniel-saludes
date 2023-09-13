import Link from "next/link"
import MenuIcon from "./Icons/MenuIcon"

const BackButton = () => {
  return (
    <svg
      className="fill-default-foreground"
      width="15"
      height="14"
      viewBox="0 0 15 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.01993 12L4.72693 7.707H14.3129V5.707H4.72693L9.01993 1.414L7.60593 0L0.898926 6.707L7.60593 13.414L9.01993 12Z" />
    </svg>
  )
}

const Header = () => {
  return (
    <header className="sticky flex items-center justify-between px-[30px] py-[10px] sm:px-4">
      <div className="left-slot">
        <Link href="/" className="block rounded-md p-[10px] hover:bg-secondary-background">
          <BackButton />
        </Link>
      </div>
      <div className="center-slot">
        <Link href="/">
          <h1 className="mx-auto max-w-max select-none text-center font-semibold uppercase tracking-[5.6px]">
            PROJECTS
          </h1>
        </Link>
      </div>
      <div className="right-slot flex items-center">
        <button className="rounded-md p-[10px] hover:bg-secondary-background">
          <MenuIcon />
        </button>
      </div>
    </header>
  )
}

export default Header
