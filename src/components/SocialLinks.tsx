import { FacebookIcon, GithubIcon, LinkedInIcon } from "./icons"

interface SocialLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: React.ReactNode
}
const SocialLink = ({ icon, target = "_blank", ...props }: SocialLinkProps) => (
  <a {...props} target={target}>
    {icon}
  </a>
)

const SocialLinks: React.FC = () => {
  return (
    <ul className="group flex max-w-max items-end gap-3">
      <li className="rounded-md transition duration-100 ease-in-out group-hover:opacity-20 group-hover:hover:scale-110 group-hover:hover:opacity-100 group-hover:active:scale-90">
        <SocialLink href="https://www.linkedin.com/in/nathanielsaludes/" icon={<LinkedInIcon />} />
      </li>
      <li className="rounded-md transition duration-100 ease-in-out group-hover:opacity-20 group-hover:hover:scale-110 group-hover:hover:opacity-100 group-hover:active:scale-90">
        <SocialLink href="https://github.com/NathanSaludes?tab=repositories" icon={<GithubIcon />} />
      </li>
      <li className="rounded-md transition duration-100 ease-in-out group-hover:opacity-20 group-hover:hover:scale-110 group-hover:hover:opacity-100 group-hover:active:scale-90">
        <SocialLink href="https://www.facebook.com/saludesnathaniel/" icon={<FacebookIcon />} />
      </li>
    </ul>
  )
}

export default SocialLinks
