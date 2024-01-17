import Image from "next/legacy/image"

import { Icons } from "../icons"

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
        <div className="flex flex-col xs:items-center xs:justify-center sm:space-x-12 lg:flex-row lg:items-start lg:space-x-16 xl:space-x-24">
          <div className="xs:col-span-5 xs:pb-8 lg:col-span-1 lg:pb-0">
            <Image
              src={"/guildify-brand-logo.svg"}
              alt=""
              width={120}
              height={50}
            />
          </div>
          <div className="xs:flex xs:flex-col sm:flex-row sm:space-x-12 md:flex-none lg:space-x-16 xl:space-x-24">
            {footerData.map((column, index) => (
              <div
                key={index}
                className="space-y-2 xs:col-span-5 xs:pb-12 xs:text-center sm:col-span-2 sm:pb-0 sm:text-left lg:col-span-1"
              >
                <p className="mb-5 font-semibold">{column.title}</p>
                <div className="">
                  {column.items.map((item, itemIndex) => (
                    <p
                      key={itemIndex}
                      className="cursor-pointer pb-2 transition duration-200 hover:underline"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex border-t border-muted-foreground py-4 xs:mx-10 xs:flex-col-reverse xs:items-center xs:justify-center sm:flex-row sm:justify-between md:mx-28">
          <h1 className="flex px-6 xs:pt-4 sm:pt-2">
            <div className="mr-2">
              <Icons.Discord className="h-6 w-6 text-[#5865F2]" />
            </div>
            <div className="mr-2">
              <Icons.X className="h-5 w-5" />
            </div>
          </h1>
          <h1 className="xs:text-md px-6 sm:text-sm">
            Copyright © 2023 Guidlify
          </h1>
        </div>
      </div>
    </>
  )
}

export default Footer
