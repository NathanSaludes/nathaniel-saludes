import { client } from "@/utils/Sanity"
import { TAchievements } from "@/utils/types"
import Image from "next/image"
import Link from "next/link"

const Certifications: React.FC = async () => {
  const certificates = await client.fetch<TAchievements[]>(
    `*[_type == "achievements"]{
		...,
		thumbnail_preview {
			asset->{
				url
			}
		}
	}`,
    undefined,
    {
      cache: "force-cache",
    },
  )

  return (
    <div className="group flex flex-col sm:grid sm:grid-cols-3">
      {certificates.map(({ thumbnail_preview, _id, label, link }) => (
        <Link
          href={link}
          key={_id}
          className="flex items-center justify-center overflow-hidden transition duration-100 ease-in-out group-hover:opacity-30 group-hover:hover:scale-105 group-hover:hover:opacity-100 group-hover:hover:shadow-lg"
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
