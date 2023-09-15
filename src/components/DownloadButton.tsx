import { DownloadIcon } from "./icons"

const DownloadButton = () => {
  return (
    <a
      href="#"
      className="flex w-[257px] items-center justify-between rounded-md bg-black px-5 py-3 text-lg font-semibold leading-none text-white transition-all duration-100 ease-in-out hover:opacity-80 active:scale-[0.95]"
    >
      <span>Download Resume</span>
      <DownloadIcon />
    </a>
  )
}

export default DownloadButton
