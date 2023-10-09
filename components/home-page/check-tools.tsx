import Image from "next/legacy/image"
import { ArrowRight, Check } from "lucide-react"

const CheckTools = () => {
  const features = [
    "Launch a crowdfunding campaign to turn your event into reality",
    "Collaborate with the community to make your event successful",
    "Guidlify is dedicated to Open Source and the Community",
    "Everything you need to kickstart your event",
  ]

  return (
    <div className="flex flex-col space-x-6 px-8 py-2 xs:space-x-2 xs:px-2 lg:flex-row">
      <div className="flex flex-col items-center pt-0 lg:w-1/2 lg:pt-2">
        <Image
          alt="tutorial image preview"
          src={"/video-preview.png"}
          width={998 / 2.2}
          height={634 / 2.2}
          priority={true}
          className="transition-all duration-500 hover:opacity-40"
        />
      </div>
      <div className="flex items-center justify-center px-4 lg:w-1/2">
        <div className="flex flex-col space-y-2 xs:justify-start xs:pl-0 xs:pt-12 md:pl-20 lg:pt-0">
          <h1 className="mb-4 text-2xl font-medium">
            An all-in-one Event Hub for event organizers, sponsors, and
            attendees
          </h1>
          {features.map((feature, index) => (
            <div className="flex flex-row" key={index}>
              <span className="mr-3 text-sm">
                <Check />
              </span>
              {feature}
            </div>
          ))}
          <div className="hover-move-icon flex cursor-pointer flex-row pt-4 text-violet-500">
            <span>Check the tools</span>
            <span className="icon pl-2">
              <ArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckTools
