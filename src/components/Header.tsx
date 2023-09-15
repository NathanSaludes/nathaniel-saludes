import Nav from "./Nav"
import SocialLinks from "./SocialLinks"

const Header = () => {
  return (
    <header className="flex basis-[400px] flex-col gap-8 overflow-y-auto pb-20 pt-20 lg:sticky lg:top-0 lg:max-h-screen lg:min-w-[300px] lg:gap-10 lg:py-20">
      {/* my details */}
      <div className="profile-details">
        <a href="#about_me" className="text-[64px] font-extrabold leading-[90%] tracking-tighter">
          Nathaniel
          <br />
          Saludes
        </a>
        <h2 className=" text-2xl leading-[250%] tracking-tighter">Web Developer</h2>
        <p>I design / develop accessible websites with seamless user experience.</p>
      </div>
      <Nav />
      <SocialLinks />
    </header>
  )
}

export default Header
