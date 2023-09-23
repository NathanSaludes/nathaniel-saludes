import Link from "next/link"
import { EmailIcon, PhoneIcon } from "./icons"

const Contact = () => {
  return (
    <div className="flex min-w-max max-w-full flex-col gap-2">
      <Link href="mailto:saludesnathaniel@gmail.com" className="flex items-center gap-2">
        <span className="flex aspect-square w-6 items-center justify-center">
          <EmailIcon />
        </span>
        saludesnathaniel@gmail.com
      </Link>
      <Link href="tel:+639760424755" className="flex items-center gap-2">
        <span className="flex aspect-square w-6 items-center justify-center">
          <PhoneIcon />
        </span>
        +63 976 042 4755
      </Link>
    </div>
  )
}

export default Contact
