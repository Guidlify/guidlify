import Image from "next/legacy/image"

interface AvatarOverLapProps {
  size?: number
}

const AvatarOverLap = ({ size = 36 }: AvatarOverLapProps) => {
  const containerSize = size / 4 + 2

  return (
    <div className="mt-2 flex flex-col items-center justify-center">
      <div className="flex">
        <div
          className={`z-2 h-${containerSize} w-${containerSize} relative flex items-center justify-center rounded-full bg-violet-500`}
        >
          <Image
            src={"/avatars/photo-1.avif"}
            alt=""
            width={size}
            height={size}
            className="rounded-full"
          />
        </div>
        <div
          className={`z-3 h-${containerSize} w-${containerSize} relative ml-[-10px] flex items-center justify-center rounded-full bg-violet-500`}
        >
          <Image
            src={"/avatars/photo-3.avif"}
            alt=""
            width={size}
            height={size}
            className="rounded-full"
          />
        </div>
        <div
          className={`z-4 h-${containerSize} w-${containerSize} relative ml-[-10px] flex items-center justify-center rounded-full bg-violet-500`}
        >
          <Image
            src={"/avatars/photo-4.avif"}
            alt=""
            width={size}
            height={size}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default AvatarOverLap
