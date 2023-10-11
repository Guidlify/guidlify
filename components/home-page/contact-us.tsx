import Image from "next/legacy/image"

import { Icons } from "../icons"

const ContactUs = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-0 text-center xs:px-6">
        <h1 className="mb-3 text-black dark:text-white xs:text-3xl md:text-4xl">
          Join the conversation
        </h1>
        <h3 className="text-muted-foreground xs:text-sm md:text-lg">
          Come and Connect, Chat with the Guidlify Community
        </h3>
        <div className="v mt-4 flex">
          <div className="mr-4">
            <Icons.Discord className="h-8 w-8 text-[#5865F2]" />
          </div>
          <div className="mr-2">
            <Icons.X className="h-7 w-7" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
