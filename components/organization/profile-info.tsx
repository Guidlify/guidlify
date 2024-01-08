import Image from "next/legacy/image"

import { Icons } from "@/components/icons"

interface ProfileInfoProps {
  name: string
  url: string
  username: string
  description: string
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  name,
  url,
  username,
  description,
}) => {
  return (
    <>
      <div className="ml-4 flex justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="text-xl font-bold">{name}</div>
          <div>{`@${username}`}</div>
        </div>
        <div className="ml-2 mt-1">
          <Image
            alt="verified badge for organization"
            src={`${url}`}
            width={20}
            height={20}
          />
        </div>
      </div>
      <p className="max-w-[600px] pt-6 text-center">{description}</p>
      <div className="mt-12 flex items-center">
        <Icons.youtube className="mr-3 h-4 w-4 shrink-0" />
        <Icons.twitch className="mr-3 h-4 w-4 shrink-0" />
        <Icons.X className="mr-3 h-4 w-4 shrink-0" />
        <Icons.globe className="mr-3 h-4 w-4 shrink-0" />
      </div>
    </>
  )
}

export default ProfileInfo
