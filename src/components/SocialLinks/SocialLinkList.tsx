import { PropsWithChildren } from "react"

export const SocialLinks: React.FC<PropsWithChildren> = ({ children }) => {
  return <ul className="group flex max-w-max items-end gap-3">{children}</ul>
}
