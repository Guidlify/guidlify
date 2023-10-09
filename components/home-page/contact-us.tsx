import Image from "next/legacy/image"

const ContactUs = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-0 text-center text-white xs:px-6">
        <h1 className="mb-3 xs:text-3xl md:text-4xl">Join the conversation</h1>
        <h3 className="xs:text-sm md:text-lg">
          Come and Connect, Chat with the Guidlify Community
        </h3>
        <div className="v mt-4 flex">
          <div className="mr-2">
            <Image
              alt="dicord logo icon"
              src={"/home-page/contact/discord.svg"}
              width={32}
              height={32}
            />
          </div>
          <div className="mr-2">
            <Image
              alt="twitter logo icon"
              src={"/home-page/contact/twitter.svg"}
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
