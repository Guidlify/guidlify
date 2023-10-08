import Image from "next/legacy/image"

const Footer = () => {
  const footerData = [
    {
      title: "About",
      items: ["Company", "Store", "Open Source", "Research"],
    },
    {
      title: "Resources",
      items: ["Tools", "Blog", "Tutorials", "FAQs"],
    },
    {
      title: "Support",
      items: ["Contact Us", "Developers", "Documentation", "Integrations"],
    },
    {
      title: "Legal",
      items: ["Policy", "Terms", "Privacy", "Cookies"],
    },
  ]

  return (
    <>
      <div>
        <div className="flex flex-col justify-evenly lg:flex-row">
          <div className="col-span-5 lg:col-span-1">
            <Image
              src={"/guildify-brand-logo.svg"}
              alt=""
              width={100}
              height={40}
            />
          </div>
          {footerData.map((column, index) => (
            <div key={index} className="col-span-5 space-y-2 lg:col-span-1">
              <p className="mb-4 font-semibold">{column.title}</p>
              {column.items.map((item, itemIndex) => (
                <p
                  key={itemIndex}
                  className="cursor-pointer transition duration-200 hover:underline"
                >
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="mx-28 mt-10 flex justify-between border-t border-white py-4">
          <h1 className="flex px-6">
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
          </h1>
          <h1 className="px-6">Copyright © 2023 Guidlify</h1>
        </div>
      </div>
    </>
  )
}

export default Footer
