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
    <div className={cn({ "ml-[-20px] md:ml-0": choice === "2" })}>
      <h1
        className={cn("mb-2 text-xl font-bold", {
          "mb-0 pt-8 text-sm md:pt-0 md:text-xl": choice === "2",
        })}
      >
        {title}
      </h1>
      <div
        className={cn("mb-4 flex space-x-2 pl-4", {
          "pl-0 md:pl-4": choice === "2",
        })}
      >
        {items.map((item) => (
          <div key={item.name} className="mr-1 mt-1 block">
            <Image alt={item.name} src={item.url} width={32} height={32} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BadgeSection
