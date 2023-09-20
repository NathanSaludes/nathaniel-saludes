import Image from "next/image"
import Link from "next/link"

const HeroImage = () => {
  return (
    <div className="mx-auto max-w-max">
      <Image src="/web-development.svg" height={800} width={600} alt="web development" />
      <div className="w-full text-center text-xs text-black/50">
        <Link
          target="_blank"
          href="https://www.freepik.com/free-vector/programming-concept-illustration_7118756.htm#query=web%20development&position=2&from_view=keyword&track=ais"
        >
          Image by <strong>storyset</strong>
        </Link>
        &nbsp;on Freepik
      </div>
    </div>
  )
}

export default HeroImage
