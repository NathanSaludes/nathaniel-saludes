import { fetchCertificates } from "@/utils/queries"
import Image from "next/image"
import Link from "next/link"

const Certifications: React.FC = async () => {
  const certificates = await fetchCertificates()

  return (
    <div className="group grid grid-cols-2 sm:grid-cols-3">
      {certificates.map(({ thumbnail_preview, _id, label, link }) => (
        <Link
          href={link}
          key={_id}
          className="flex items-center justify-center overflow-hidden transition duration-100 ease-in-out group-hover:hover:scale-105"
          target="_blank"
        >
          <Image
            width={500}
            height={500}
            src={thumbnail_preview.asset.url}
            alt={label}
            className="w-full object-cover object-center"
          />
        </Link>
      ))}
    </div>
  )
}

export default Certifications
