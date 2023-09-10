import Nav from "./Nav"
import SocialLinks from "./SocialLinks"

const Header = () => {
  return (
    <div className="sticky top-0 flex max-h-screen min-w-[300px] basis-[400px] flex-col gap-10 overflow-y-auto py-20">
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
    </div>
  )
}

export default Header
