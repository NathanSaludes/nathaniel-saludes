import { FacebookIcon, GithubIcon, LinkedInIcon } from "@/components/icons"

export const skillCategoryStyles = {
  frontend: {
    background: "bg-frontend-background",
    foreground: "text-frontend-foreground",
  },
  backend: {
    background: "bg-backend-background",
    foreground: "text-backend-foreground",
  },
  tool: {
    background: "bg-tool-background",
    foreground: "text-tool-foreground",
  },
  design: {
    background: "bg-design-background",
    foreground: "text-design-foreground",
  },
  misc: {
    background: "bg-misc-background",
    foreground: "text-misc-foreground",
  },
}

export const socialIcons = {
  linkedin: <LinkedInIcon />,
  facebook: <FacebookIcon />,
  github: <GithubIcon />,
}
