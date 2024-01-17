import { Icons } from "@/components/icons"

interface EventNameProps {
  title: string
  description: string
  location: string
  starCount: string
  date: string
}

const EventName: React.FC<EventNameProps> = ({
  title,
  description,
  location,
  starCount,
  date,
}) => {
  return (
    <div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 flex justify-between pt-2">
        <div className="pl-2 pr-6">
          <div className="pb-1 text-sm font-bold">{title}</div>
          <p className="pb-4 text-xs">{description}</p>
        </div>
        <div className="mr-4 flex h-10 items-center rounded-lg bg-white px-4 text-sm tracking-wide text-black">
          <Icons.star className="mr-2 h-4 w-4" /> Star
          <hr className="mx-2 w-[20px] translate-y-[1px] rotate-90 border border-gray-900 opacity-30" />
          <Icons.chevronDown className="h-4 w-4" />
        </div>
      </div>
      <div className="relative z-10 flex space-x-5 pb-1 pl-2 text-xs">
        <div className="flex items-center justify-center">
          <div className="mr-2 h-[10px] w-[10px] rounded-full border border-blue-600"></div>
          {location}
        </div>
        <div className="flex items-center justify-center">
          <Icons.star className="mr-1 h-3 w-3 shrink-0" />
          {starCount}
        </div>
        <div className="">When: {date}</div>
      </div>
    </div>
  )
}

export default EventName
