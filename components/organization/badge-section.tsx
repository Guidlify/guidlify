import Image from "next/legacy/image"

import { cn } from "@/lib/utils"

type Choice = "1" | "2"

interface BadgeSectionProps {
  title: string
  items: { name: string; url: string }[]
  option?: Choice | "1"
}

const BadgeSection: React.FC<BadgeSectionProps> = ({
  title,
  items,
  option = "1",
}) => {
  const choice: Choice = option

  return (
    <div
      className={cn({
        "ml-[-20px]": choice === "2",
      })}
    >
      <h1
        className={cn("mb-2 text-xl font-bold", {
          "mb-0 pt-8 text-sm": choice === "2",
        })}
      >
        {title}
      </h1>
      <div
        className={cn("mb-4 flex space-x-2 pl-4", {
          "pl-0": choice === "2",
        })}
      >
        {items.map((item) => (
          <div key={item.name} className="mr-1 mt-1">
            <Image
              alt={item.name}
              src={item.url}
              width={choice === "2" ? 24 : 44}
              height={choice === "2" ? 24 : 44}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BadgeSection
