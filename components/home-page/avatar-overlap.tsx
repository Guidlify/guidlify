import Image from "next/legacy/image"

interface AvatarOverLapProps {
  size?: number
}

const AvatarOverLap = ({ size = 36 }: AvatarOverLapProps) => {
  const avatarImages = [
    "/home-page/avatars/photo-1.avif",
    "/home-page/avatars/photo-3.avif",
    "/home-page/avatars/photo-4.avif",
  ]

  return (
    <div className="mt-2 flex flex-col items-center justify-center">
      <div className="flex">
        {avatarImages.map((src, index) => (
          <div
            key={index}
            className={`z-${
              index + 2
            } relative flex h-11 w-11 items-center justify-center rounded-full bg-violet-500 ${
              index > 0 ? `ml-[-10px]` : ""
            }`}
          >
            <Image
              src={src}
              alt=""
              width={size}
              height={size}
              className="rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AvatarOverLap
