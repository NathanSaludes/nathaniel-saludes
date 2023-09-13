import { DownloadIcon } from "./Icons"

const DownloadButton = () => {
  return (
    <a
      href="#"
      className="flex w-[257px] items-center justify-between rounded-md bg-black px-5 py-3 text-lg font-semibold leading-none text-white"
    >
      <span>Download Resume</span>
      <DownloadIcon />
    </a>
  )
}

export default DownloadButton
