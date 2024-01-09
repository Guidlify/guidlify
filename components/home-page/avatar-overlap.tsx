import Image from "next/legacy/image"

import { cn } from "@/lib/utils"

type Option = "normal" | "black"
interface AvatarOverLapProps {
  size?: number
  url?: string
  option?: Option | "normal"
}

const AvatarOverLap = ({
  size = 36,
  url,
  option = "normal",
}: AvatarOverLapProps) => {
  const avatarImages = [
    "/home-page/avatars/photo-1.avif",
    "/home-page/avatars/photo-3.avif",
    "/home-page/avatars/photo-4.avif",
  ]

  return (
    <div className="mt-2 flex flex-col items-center justify-center">
      <div className="flex">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className={cn(
              `z-${index + 2}`,
              "relative flex h-11 w-11 items-center justify-center rounded-full bg-slate-500 dark:bg-violet-400",
              {
                "ml-[-10px]": index > 0,
                "ml-[-16px] bg-white dark:bg-black": option === "black",
                "h-[52px] w-[52px]": size === 44,
                "h-[40px] w-[40px]": size === 34,
              }
            )}
          >
            <Image
              src={url || avatarImages[index - 1]}
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
