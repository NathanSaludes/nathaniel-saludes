import { EmailIcon, PhoneIcon } from "./icons"

const Contact = () => {
  return (
    <div className="flex min-w-max max-w-full flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="flex aspect-square w-6 items-center justify-center">
          <EmailIcon />
        </span>
        saludesnathaniel@gmail.com
      </div>
      <div className="flex items-center gap-2">
        <span className="flex aspect-square w-6 items-center justify-center">
          <PhoneIcon />
        </span>
        +63 976 042 4755
      </div>
    </div>
  )
}

export default Contact
