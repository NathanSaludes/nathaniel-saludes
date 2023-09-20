import Link from "next/link"

interface SocialLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: React.ReactNode
}
export const SocialLink = ({ icon, target = "_blank", href = "", ...props }: SocialLinkProps) => (
  <li className="rounded-md transition duration-100 ease-in-out group-hover:opacity-20 group-hover:hover:scale-110 group-hover:hover:opacity-100 group-hover:active:scale-90">
    <Link href={href} {...props} target={target}>
      {icon}
    </Link>
  </li>
)
