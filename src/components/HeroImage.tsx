import Image from "next/image"
import Link from "next/link"

const HeroImage = () => {
  return (
    <div className="container">
      <div className="relative mx-auto block aspect-square max-w-xl">
        <Image src="/web-development.svg" fill alt="web development" className="object-center" />
      </div>
      <p className="w-full text-center text-xs text-black/50">
        <Link
          target="_blank"
          href="https://www.freepik.com/free-vector/programming-concept-illustration_7118756.htm#query=web%20development&position=2&from_view=keyword&track=ais"
        >
          Image by <strong>storyset</strong>
        </Link>
        &nbsp;on Freepik
      </p>
    </div>
  )
}

export default HeroImage
