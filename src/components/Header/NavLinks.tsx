import { cn } from "@/utils"
import Link from "next/link"

type NavLinkProps = {
  visible: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

const NavLink = ({ visible, href = "#", children, ...props }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={cn("relative flex items-center text-default-accent", { "text-default-foreground": visible })}
      {...props}
    >
      <div className={cn("absolute -left-16 transition-all duration-300 ease-in-out", { "-left-8": visible })}>
        <svg width="24" height="25" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.536 22.386C5.69777 22.4701 5.87939 22.5086 6.06138 22.4974C6.24337 22.4861 6.41886 22.4255 6.569 22.322L19.569 13.322C19.7018 13.23 19.8104 13.1071 19.8854 12.964C19.9603 12.8208 19.9995 12.6616 19.9995 12.5C19.9995 12.3384 19.9603 12.1792 19.8854 12.036C19.8104 11.8929 19.7018 11.77 19.569 11.678L6.569 2.678C6.41897 2.57419 6.24341 2.5134 6.06131 2.50222C5.87922 2.49103 5.69753 2.52987 5.53593 2.61454C5.37433 2.6992 5.23896 2.82646 5.1445 2.98254C5.05003 3.13861 5.00006 3.31756 5 3.5V21.5C4.99997 21.6825 5.0499 21.8616 5.14439 22.0178C5.23887 22.174 5.3743 22.3013 5.536 22.386Z"
            className="fill-default-foreground"
          />
        </svg>
      </div>
      {children}
    </Link>
  )
}

export default NavLink
