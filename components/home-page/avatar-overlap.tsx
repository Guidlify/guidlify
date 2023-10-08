import Image from "next/legacy/image"

const AvatarOverLap = () => {
  return (
    <div className="mt-2 flex flex-col items-center justify-center">
      <div className="flex">
        <div className="z-2 relative flex h-11 w-11 items-center justify-center rounded-full bg-violet-500">
          <Image
            src={"/avatars/photo-1.avif"}
            alt=""
            width={36}
            height={36}
            className="rounded-full"
          />
        </div>
        <div className="z-3 relative ml-[-16px] flex h-11 w-11 items-center justify-center rounded-full bg-violet-500">
          <Image
            src={"/avatars/photo-3.avif"}
            alt=""
            width={36}
            height={36}
            className="rounded-full"
          />
        </div>
        <div className="z-4 relative ml-[-16px] flex h-11 w-11 items-center justify-center rounded-full bg-violet-500">
          <Image
            src={"/avatars/photo-4.avif"}
            alt=""
            width={36}
            height={36}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default AvatarOverLap
