"use client"

import Link from "next/link"

import AvatarOrganization from "@/components/organization/avatar"
import BadgeSection from "@/components/organization/badge-section"
import BannerOrganization from "@/components/organization/banner"
import CreateEvent from "@/components/organization/create-event"
import EventList from "@/components/organization/event-list"
import ProfileInfo from "@/components/organization/profile-info"

const eventData = [
  {
    title: "Guidlify Summit 2023",
    description:
      "Discover the latest innovations in technology, from Iot to robotics...",
    emoji: "🚀",
    eventUrl: "nowhere",
  },
  {
    title: "Guidlify Summit 2023",
    description:
      "Discover the latest innovations in technology, from Iot to robotics...",
    emoji: "🚀",
    eventUrl: "nowhere",
  },
  {
    title: "Guidlify Summit 2023",
    description:
      "Discover the latest innovations in technology, from Iot to robotics...",
    emoji: "🚀",
    eventUrl: "nowhere",
  },
]

const badgeSponsorData = {
  badges: [
    {
      title: "Badges",
      items: [
        {
          name: "Beta Tester Badge",
          url: "/organization/beta-tester-badge.png",
        },
        {
          name: "Month Event Badge",
          url: "/organization/month-event.png",
        },
      ],
    },
  ],
  sponsor: [
    {
      title: "Sponsoring",
      items: [
        {
          name: "WebXGuild",
          url: "/organization/webxguild.png",
        },
        {
          name: "WebXDAO",
          url: "/organization/webxdao.png",
        },
      ],
    },
    {
      title: "Organizations",
      items: [
        {
          name: "WebXGuild",
          url: "/organization/codepen.png",
        },
        {
          name: "WebXDAO",
          url: "/organization/ghost.png",
        },
      ],
    },
  ],
  sponsoring: [
    {
      title: "Attending",
      items: [
        {
          name: "WebX Manila",
          date: "10/24/2023",
        },
        {
          name: "ETHGlobal",
          date: "12/23/2023",
        },
        {
          name: "Hackcon",
          date: "03/13/2023",
        },
      ],
    },
    {
      title: "Past Events Attended",
      items: [
        {
          name: "WebX Manila",
          date: "10/24/2023",
        },
        {
          name: "Polygon Hacks",
          date: "12/23/2023",
        },
        {
          name: "Chicken neck eater",
          date: "12/23/2023",
        },
        {
          name: "MLH Manila",
          date: "12/23/2023",
        },
      ],
    },
  ],
}

const UserPage = () => {
  return (
    <div className="container mb-20">
      <BannerOrganization url="/organization/banner.png" />
      <div className="">
        <div className="relative mb-0 mt-[-60px] flex items-center justify-center md:mt-[-100px]">
          <AvatarOrganization
            url="/organization/banner.png"
            stateColor="yellow"
          />
        </div>
        <div className="ml-8 mt-[-80px]">
          <BadgeSection {...badgeSponsorData.badges[0]} option="2" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <ProfileInfo
            name="Cool Guy"
            url="/organization/verified-user.png"
            username="coolguy"
            description="I like attending events! I might sponsor one too if I'm very much interested. Just hit me up, let's talk!"
          />
          <CreateEvent />
        </div>
        <div className="border-b-1 mt-6 w-full border" />
        <div className="ml-[-80px] mt-16 flex justify-evenly">
          <div className="flex flex-col">
            <h1 className="pb-4 text-xl font-bold">Events Interested In</h1>
            {eventData.map((eventInfo, index) => (
              <div
                key={index}
                className="mb-8 h-[84px] w-[480px] rounded-lg bg-gray-200 p-4 text-black dark:bg-white"
              >
                <div className="flex">
                  <div className="w-74 flex-col pl-2 pr-12">
                    <div className="pb-1 text-sm font-bold">
                      {eventInfo.title} <span>{eventInfo.emoji}</span>
                    </div>
                    <p className="pb-4 text-xs">{eventInfo.description}</p>
                  </div>
                  <div className="mr-4 mt-1 flex h-10 w-36 items-center rounded-lg bg-violet-500 px-4 text-sm tracking-wide text-white">
                    <Link href={eventInfo.eventUrl}>View Event</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            {badgeSponsorData.sponsoring.map((event, index) => (
              <div key={index} className="mb-4 flex flex-col space-y-1">
                <h1 className="mb-3 text-xl font-bold">{event.title}</h1>
                {event.items.map((item, innerIndex) => (
                  <div key={innerIndex}>{`${item.name} (${item.date})`}</div>
                ))}
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <BadgeSection {...badgeSponsorData.sponsor[0]} />
            <BadgeSection {...badgeSponsorData.sponsor[1]} />
          </div>
        </div>
        <div className="border-b-1 mt-16 w-full border" />
        <div>
          <h1 className="mt-12 text-2xl">Events Hosted</h1>
          <EventList />
        </div>
      </div>
    </div>
  )
}

export default UserPage
