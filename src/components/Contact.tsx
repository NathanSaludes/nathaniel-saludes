import { EmailIcon, PhoneIcon } from "./icons"

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-1">
      <p className="flex items-center gap-3">
        <span className="flex aspect-square w-6 items-center justify-center">
          <EmailIcon />
        </span>
        saludesnathaniel@gmail.com
      </p>
      <p className="flex items-center gap-3">
        <span className="flex aspect-square w-6 items-center justify-center">
          <PhoneIcon />
        </span>
        +63 976 042 4755
      </p>
    </div>
  )
}

export default Contact
