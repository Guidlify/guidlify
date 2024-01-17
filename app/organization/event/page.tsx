"use client"

import Image from "next/legacy/image"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import AvatarOverLap from "@/components/home-page/avatar-overlap"
import { Icons } from "@/components/icons"
import BannerOrganization from "@/components/organization/banner"
import CustomProgressBar from "@/components/organization/custom-progress-bar"

const FaqData = {
  faq: [
    {
      title: "FAQs",
      items: [
        {
          question: "What is WebX Manila?",
          answer:
            "WebX Manila is the global, annual event for WebX’s customers and the developer community.",
        },
        {
          question: "When is WebX Manila taking place?",
          answer:
            "November 8-9 (Pacific time) live from Manila and streaming online.",
        },
        {
          question: "Where can I find an agenda?",
          answer:
            "We are currently working on a full agenda for WebX Manila. We will let you know when the agenda is available in September.",
        },
      ],
    },
  ],
}

const EventScheduleData = [
  { month: "Sept", day: "25", label: "Registration Start" },
  { month: "Sept", day: "30", label: "Registration Closed" },
  { month: "Oct", day: "2", label: "Start of Event" },
  { month: "Oct", day: "4", label: "Final Day" },
]

const eventSnapshots = [
  "/organization/eventSnapshot1.png",
  "/organization/eventSnapshot2.png",
  "/organization/eventSnapshot3.png",
]

const EventPage = () => {
  return (
    <div className="container mb-20">
      <BannerOrganization url="/organization/banner.png" />

      <div className="flex px-10">
        <div className="mr-6 flex flex-col">
          <h1 className="mt-10 text-2xl font-semibold">WebX Manilla</h1>
          <h3 className="mb-0 text-xl font-medium text-gray-600 dark:text-gray-400">
            WebX Guild
          </h3>
          <div className="flex">
            <div className="mr-4 flex items-center justify-center">
              Philippines, Manila
              <span>
                <Icons.Location className="ml-1 h-[17px] w-[17px] text-[#878787]" />
              </span>
            </div>
            <div className="flex items-center justify-center">
              185d : 14h : 25m : 53s{" "}
              <span>
                <Icons.Clock className="ml-2 h-[17px] w-[17px] text-[#878787]" />
              </span>
            </div>
          </div>
          <div className="mr-6 mt-6">
            <Button className="bg-violet-500 px-10">
              <Icons.plusSquare className="mr-2 h-4 w-4 shrink-0" />
              Register Now
            </Button>
          </div>
          <div className="ml-3 mt-3 flex items-center text-left">
            <div className="mr-3">
              <AvatarOverLap
                size={34}
                url={"/organization/avatar.png"}
                option="black"
              />
            </div>
            <span className="mt-2 text-sm text-black dark:text-white">
              vincent, myrnjad, maxime and others are attending this event!
            </span>
          </div>
          <div className="border-b-1 ml-[-4px] mt-6 w-[calc(100%-20px)] border" />
          <div className="mx-4 text-left">
            <p className="mr-4 py-5">
              Universe brings together the world&apos;s developers, enterprise
              leaders, and security professionals for two days of interactive
              sessions onAI,security, and thedeveloper experience. Come for the
              learning, stay for thefun. We&apos;ll see you there!
            </p>
            <div className="flex">
              {eventSnapshots.map((item, idx) => (
                <div key={idx} className="relative mr-4">
                  <Image
                    src={item}
                    alt={`event snapshot ${idx}"`}
                    width={225}
                    height={225}
                    className="rounded-md object-cover"
                  />
                  <div className="absolute left-0 top-0 h-full w-full rounded-md opacity-50 dark:bg-black"></div>
                </div>
              ))}
            </div>
            <div className="mr-6 mt-20 rounded-lg border-2 border-gray-200 px-8 py-2">
              <h1 className="my-8 ml-12 text-2xl font-bold tracking-wide">
                Featured Speakers
              </h1>
              <div className="mx-16 mb-6 flex justify-between">
                <div className="mr-4 flex flex-col items-center justify-center">
                  <div className="rounded-full border-[0.5px] border-gray-500/20 p-2">
                    <div className="rounded-full border-[0.5px] border-gray-400/40 p-2">
                      <div className="rounded-full border border-gray-300/60 p-3">
                        <Avatar className="h-[155px] w-[165px]">
                          <AvatarImage
                            src={"/organization/avatar.png"}
                            alt="avatar image"
                          />
                          <AvatarFallback>{"GL"}</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 text-xl font-bold">John Doe</div>
                  <div className="mt-1 text-sm">Host</div>
                </div>
                {[1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center"
                  >
                    <Avatar className="h-24 w-24">
                      <AvatarImage
                        src={"/organization/avatar.png"}
                        alt="avatar image"
                      />
                      <AvatarFallback>{"GL"}</AvatarFallback>
                    </Avatar>
                    <div className="mt-6 text-xl font-bold">John Doe</div>
                    <div className="mt-1 text-sm">Co-Host</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[700px] flex-col">
          <div className="mb-8 mt-20 flex flex-col items-center justify-center">
            <CustomProgressBar value={3000} max={5000} />
            <div className="mb-1 mt-2 flex text-2xl font-bold">
              US$ <span className="text-gray-500 dark:text-gray-300">3000</span>
            </div>
            <div className="text-sm">pledge of US$ 5000 goal</div>
            <div className="mt-5 flex">
              <Button className="bg-violet-500">
                <Icons.plusSquare className=" mr-2 h-4 w-4 shrink-0" />
                Sponsor this Event
              </Button>
              <div className="ml-2 flex items-center justify-center">
                <Button className="bg-violet-500">
                  <Icons.gripHorizontal className="h-4 w-4 shrink-0" />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-6">
            {FaqData.faq.map((faq, idx) => (
              <div key={idx}>
                <h1 className="mb-4 text-3xl font-bold tracking-wide">
                  {faq.title}
                </h1>
                <div className="border-1 rounded-md border border-gray-200 py-6">
                  {faq.items.map((item, innerIdx) => (
                    <div className="px-4" key={innerIdx}>
                      <div className="flex items-center">
                        <span className="text-md ml-4 font-medium">
                          {item.question}
                        </span>
                      </div>
                      <p className="mb-2 mt-1 px-4 text-sm text-gray-500/80 dark:text-gray-300/90">
                        {item.answer}
                      </p>
                      {innerIdx !== faq.items.length - 1 && (
                        <div className="mb-6 mt-12 flex items-center justify-center">
                          <Icons.chevronDown className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-16">
        <h1 className="mb-16 ml-4 mt-12 text-3xl font-bold">Event Schedule</h1>

        <div className="flex space-x-6">
          {EventScheduleData.map((event, index) => (
            <>
              <div
                className={`${
                  index === 0 ? "rounded-xl p-[5px]" : "rounded-xl p-0"
                }`}
                style={{
                  ...(index === 0 && {
                    background: `linear-gradient(180deg, #F36169, #F7ADB1, #00000000, #F7ADB1, #F36169)`,
                  }),
                }}
                // bg-gradient-to-r from-[#ff8906] via-[#7f5af0] to-transparent -> another option
              >
                <div
                  key={index}
                  className={`flex h-[150px] w-[150px] flex-col items-center justify-center rounded-xl text-white`}
                  style={{
                    background:
                      "linear-gradient(180deg, #9848FF 14.06%, #49138D 100%)",
                  }}
                >
                  <div className="mb-0 text-sm font-light">{event.month}</div>
                  <div className="mb-6 text-4xl font-light">{event.day}</div>
                  <div className="font-regular text-xs">{event.label}</div>
                </div>
              </div>
              {index !== EventScheduleData.length - 1 && (
                <div className="flex w-[91px] items-center justify-center">
                  <div className="mr-[18px] h-1 w-[17px] rounded-full border-[3px] border-[#ACACB4]"></div>
                  <div className="mr-[18px] h-1 w-[28px] rounded-full border-[3px] border-[#ACACB4]"></div>
                  <div className="h-1 w-[17px] rounded-full border-[3px] border-[#ACACB4]"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventPage
