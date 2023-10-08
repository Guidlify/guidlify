import Image from "next/legacy/image"

const ContactUs = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-white">
        <h1 className="mb-3 text-4xl">Join the conversation</h1>
        <h3 className="text-lg">
          Come and Connect, Chat with the Guidlify Community
        </h3>
        <div className="v mt-4 flex">
          <div className="mr-2">
            <Image
              alt="dicord logo icon"
              src={"/home-page/contact/discord.svg"}
              width={25}
              height={25}
            />
          </div>
          <div className="mr-2">
            <Image
              alt="twitter logo icon"
              src={"/home-page/contact/twitter.svg"}
              width={25}
              height={25}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
