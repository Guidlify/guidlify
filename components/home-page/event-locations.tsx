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
  const numRows = 2
  const queueSize = 6 // Number of images in the queue
  const [imageQueues, setImageQueues] = useState<
    Array<Array<eventLocationsDataProps>>
  >(Array.from({ length: numRows }, () => eventLocationsData))

  useEffect(() => {
    startImageQueues()
  }, [])

  const startImageQueues = () => {
    setInterval(() => {
      setImageQueues((prevImageQueues) => {
        const updatedImageQueues = prevImageQueues.map((queue) => {
          const [firstImage, ...restImages] = queue
          return [...restImages, firstImage]
        })

        return updatedImageQueues
      })
    }, 15000) // Adjust the interval delay as per your preference
  }

  return (
    <div className="event-locations-container">
      {imageQueues.map((queue, rowIndex) => (
        <div
          key={rowIndex}
          className={`row row-${rowIndex} flex flex-row space-x-5 pb-10`}
        >
          {queue.map((item, index) => (
            <div
              className="card relative shrink-0 transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-slate-800"
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
