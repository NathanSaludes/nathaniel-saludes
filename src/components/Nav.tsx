type NavLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

const NavLink: React.FC<NavLinkProps> = ({ children, ...props }) => {
  return (
    <a className="hover:text-[rgba(0,0,0,100%)]" {...props}>
      {children}
    </a>
  )
}

const Nav = () => {
  return (
    <nav className="flex max-w-max flex-col gap-2 pl-[34px] font-semibold text-[rgba(0,0,0,40%)]">
      <NavLink href="#skills">Skills</NavLink>
      <NavLink href="#experience">Experience</NavLink>
      <NavLink href="#projects">Projects</NavLink>
      <NavLink href="#achievements">Achievements</NavLink>
      <NavLink href="#education">Education</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </nav>
  )
}

export default Nav