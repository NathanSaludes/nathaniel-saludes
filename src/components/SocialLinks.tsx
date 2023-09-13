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
    <ul className="flex flex-grow items-end gap-3">
      <li>
        <SocialLink href="https://www.linkedin.com/in/nathanielsaludes/" icon={<LinkedInIcon />} />
      </li>
      <li>
        <SocialLink href="https://github.com/NathanSaludes?tab=repositories" icon={<GithubIcon />} />
      </li>
      <li>
        <SocialLink href="https://www.facebook.com/saludesnathaniel/" icon={<FacebookIcon />} />
      </li>
    </ul>
  )
}

export default SocialLinks
