import React, { useEffect, useState } from "react"
import Image from "next/legacy/image"
import { ChevronsRight } from "lucide-react"

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
  const [shuffledData, setShuffledData] = useState<
    Array<Array<eventLocationsDataProps>>
  >([])

  const numRows = 2

  useEffect(() => {
    shuffleArray()
  }, [])

  const shuffleArray = () => {
    const shuffledRows = Array.from({ length: numRows }, () => {
      const shuffledVal = [...eventLocationsData]
      for (let i = shuffledVal.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[shuffledVal[i], shuffledVal[j]] = [shuffledVal[j], shuffledVal[i]]
      }
      return shuffledVal
    })
    setShuffledData(shuffledRows)
  }

  return (
    <div className="event-locations-container">
      {Array.from({ length: numRows }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className={`row row-${rowIndex} flex flex-row space-x-5 pb-10`}
        >
          {shuffledData[rowIndex]?.map((item, index) => (
            <div
              className="card relative shrink-0 hover:cursor-pointer"
              key={index}
            >
              <Image
                alt={item.alt}
                src={`/home-page/event-locations/${item.src}`}
                height={303}
                width={463}
                className="opacity-60"
                priority={true}
              />
              <div className="card-content absolute inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-white px-6 pb-12 text-black dark:to-[#030711]">
                {item.heading === undefined ? (
                  <div className="flex pb-2 text-lg font-semibold tracking-wide">
                    <span className="pr-2">
                      <ChevronsRight />
                    </span>{" "}
                    {item.subtext}
                  </div>
                ) : (
                  <div className="pb-6 pl-4 pr-16 text-lg font-semibold">
                    <div className="pb-4 text-4xl font-bold">
                      {item.heading}
                    </div>{" "}
                    <div>{item.subtext}</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default EventLocations
