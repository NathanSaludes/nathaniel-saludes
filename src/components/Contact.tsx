import Link from "next/link"
import { EmailIcon, PhoneIcon } from "./icons"
import { fetchGeneral } from "@/utils/queries"

const Contact = async () => {
  const { email, mobile_number } = await fetchGeneral()

  return (
    <div className="flex min-w-max max-w-full flex-col gap-2">
      {email ? (
        <Link href="mailto:saludesnathaniel@gmail.com" className="flex items-center gap-2">
          <span className="flex aspect-square w-6 items-center justify-center">
            <EmailIcon />
          </span>
          saludesnathaniel@gmail.com
        </Link>
      ) : null}
      {mobile_number ? (
        <Link href="tel:+639760424755" className="flex items-center gap-2">
          <span className="flex aspect-square w-6 items-center justify-center">
            <PhoneIcon />
          </span>
          {mobile_number}
        </Link>
      ) : null}
    </div>
  )
}

export default Contact
