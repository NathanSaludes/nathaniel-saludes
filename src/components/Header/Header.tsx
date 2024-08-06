import { socialIcons } from "@/utils/constants"
import { SocialLink, SocialLinks } from "../SocialLinks"
import Nav from "./Nav"
import { fetchGeneral } from "@/utils/queries"

const Header = async () => {
  const { first_name, intro, last_name, social_links, job_title } = await fetchGeneral()

  return (
    <header className="flex basis-[400px] flex-col gap-8 overflow-y-auto pb-20 pt-20 lg:sticky lg:top-0 lg:max-h-screen lg:min-w-[300px] lg:gap-10 lg:py-20">
      {/* my details */}
      <div className="profile-details">
        <a href="#about_me" className="text-[64px] font-extrabold leading-[90%] tracking-tighter">
          {first_name}
          <br />
          {last_name}
        </a>
        <h2 className="text-2xl leading-[250%] tracking-tight">{job_title}</h2>
        <p>{intro}</p>
      </div>
      <Nav />
      {social_links ? (
        <SocialLinks>
          {social_links.map(({ site_link, site, icon }) => {
            return <SocialLink key={site} href={site_link} icon={socialIcons[icon]} />
          })}
        </SocialLinks>
      ) : null}
    </header>
  )
}

export default Header
