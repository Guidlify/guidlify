import { useState } from "react"
import Image from "next/legacy/image"

import { cn } from "@/lib/utils"

type Color = "blue" | "red" | "green" | "yellow"

const AvatarOrganization: React.FC<{
  url: string
  stateColor?: Color | "red"
}> = ({ url, stateColor = "red" }) => {
  const color: Color = stateColor

  return (
    <div className="boder-2 relative rounded-full border-[4px] border-white dark:border-black xs:w-28 md:w-48">
      <Image
        alt="pic"
        src={"/organization/avatar.png"}
        width={200}
        height={200}
        className="rounded-full"
      />
      <div
        className={cn(
          "absolute rounded-full xs:bottom-5 xs:right-0 xs:h-[20px] xs:w-[20px] md:bottom-10 md:right-0 md:h-[30px] md:w-[30px]",
          {
            "bg-blue-500": color === "blue",
            "bg-yellow-500": color === "yellow",
            "bg-green-500": color === "green",
            "bg-red-500": color === "red",
          }
        )}
      ></div>
    </div>
  )
}

export default AvatarOrganization
