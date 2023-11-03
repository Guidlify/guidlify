import React from "react"
import Image from "next/legacy/image"
import { ChevronsRight } from "lucide-react"

// import ImageCarousel from "./image-carousel"

interface eventLocationsDataProps {
  src: string
  alt: string
  heading?: string
  subtext: string
}

const eventLocationsData: eventLocationsDataProps[] = [
  {
    src: "location-1.png",
    alt: "Location 1",
    heading: "Experience it all around the world.",
    subtext: "An event to remember.",
  },
  {
    src: "location-2.png",
    alt: "Location 2",
    subtext: "Toronto, Canada.",
  },
  {
    src: "location-3.png",
    alt: "Location 3",
    subtext: "Toronto, Canada.",
  },
  {
    src: "location-4.png",
    alt: "Location 4",
    subtext: "Toronto, Canada.",
  },
  {
    src: "location-5.png",
    alt: "Location 5",
    subtext: "Toronto, Canada.",
  },
  {
    src: "location-6.png",
    alt: "Location 6",
    subtext: "Toronto, Canada.",
  },
]

const EventLocations = () => {
  return (
    <div className="flex flex-row space-x-5 overflow-hidden">
      {eventLocationsData.map((item, index) => (
        <div className="relative shrink-0" key={index}>
          <Image
            alt={item.alt}
            src={`/home-page/event-locations/${item.src}`}
            height={303}
            width={463}
            className="opacity-60"
          />
          {/* <ImageCarousel
            images={[
              {
                src: `/home-page/event-locations/${item.src}`,
                alt: item.alt,
                legend: item.subtext,
              },
            ]}
          /> */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-white px-6 pb-12 text-black dark:to-[#030711]">
            {/* bg-gradient-to-b from-transparent to-white p-6 */}
            {item.heading === undefined ? (
              <div className="flex pb-2 text-lg font-semibold tracking-wide">
                <span className="pr-2">
                  <ChevronsRight />
                </span>{" "}
                {item.subtext}
              </div>
            ) : (
              <div className="pb-6 pl-4 pr-16 text-lg font-semibold">
                <div className="pb-4 text-4xl font-bold">{item.heading}</div>{" "}
                <div>{item.subtext}</div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default EventLocations
