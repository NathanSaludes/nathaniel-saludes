import Link from "next/link"
import { DownloadIcon } from "./icons"

const DownloadButton = () => {
  return (
    <Link
      target="_blank"
      href="https://drive.google.com/file/d/1K3jOUMCBo3OjzyxPtgUmPWpaj1NfOUwr/view?usp=sharing"
      className="flex w-full max-w-[257px] items-center justify-between gap-4 rounded-md bg-black px-5 py-3 text-lg font-semibold leading-snug text-white transition-all duration-100 ease-in-out hover:opacity-80 active:scale-[0.95]"
    >
      <span>Download Resume</span>
      <DownloadIcon />
    </Link>
  )
}

export default DownloadButton
