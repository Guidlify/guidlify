import Image from "next/legacy/image"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface BlogPostProps {
  imageSrc: string
  tag: string
  title: string
  description: string
  avatarSrc: string
  orgName: string
}

const BlogPost: React.FC<BlogPostProps> = ({
  imageSrc,
  tag,
  title,
  description,
  avatarSrc,
  orgName,
}) => {
  return (
    <div className="flex">
      <div className="ml-4 mr-10 mt-4 w-[235px]">
        <Image
          alt="event hosted"
          src={`${imageSrc}`}
          width={300}
          height={300}
          className="rounded-sm"
        />
      </div>
      <div className="flex w-[236px] flex-col space-y-1 pt-5">
        <div
          className={cn("mb-1 w-24 rounded-sm bg-violet-600 p-2 pl-3 text-xs", {
            "w-16": tag === "Popular",
          })}
        >
          {tag}
        </div>
        <div className="line-clamp-2 pb-3 text-lg font-bold">{title}</div>
        <p className="pb-2 text-sm">{description}</p>
        <div className="flex">
          <Avatar className="mr-2 h-8 w-8">
            <AvatarImage src={"" || `${avatarSrc}`} alt="avatar image" />
            <AvatarFallback>{"GL"}</AvatarFallback>
          </Avatar>
          {orgName}
        </div>
      </div>
    </div>
  )
}

export default BlogPost
