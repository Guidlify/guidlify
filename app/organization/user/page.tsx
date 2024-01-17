"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  BadgeSponsorEventsDataProps,
  userEventDataProps,
} from "@/mock-models/user"

import AvatarOrganization from "@/components/organization/avatar"
import BadgeSection from "@/components/organization/badge-section"
import BannerOrganization from "@/components/organization/banner"
import CreateEvent from "@/components/organization/create-event"
import EventList from "@/components/organization/event-list"
import ProfileInfo from "@/components/organization/profile-info"

const UserPage = () => {
  const [userData, setUserData] = useState<{
    userEventData: userEventDataProps[]
    badgeSponsorEventsData: BadgeSponsorEventsDataProps
  }>({
    userEventData: [],
    badgeSponsorEventsData: {
      badges: [],
      sponsor: [],
      events: [],
    },
  })

  const { userEventData, badgeSponsorEventsData } = userData

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/organization/user")
        const data = await response.json()
        setUserData(data)
      } catch (error) {
        console.error("Error fetching user data:", error)
      }
    }
    fetchData()
  }, [])

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
          <BadgeSection {...badgeSponsorEventsData.badges[0]} option="2" />
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
        <div className="mt-16 flex flex-col md:flex-row md:justify-evenly xl:ml-[-80px]">
          <div className="mb-8 md:mb-0 md:mr-4">
            <h1 className="pb-4 text-xl font-bold">Events Interested In</h1>
            {userEventData.map((eventInfo, index) => (
              <div
                key={index}
                className="mb-8 rounded-lg bg-gray-200 p-4 text-black dark:bg-white md:min-h-[84px] md:w-[320px] lg:w-[480px]"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="w-74 flex-col pl-2 lg:pr-12">
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
          <div className="mb-4 md:mb-0">
            {badgeSponsorEventsData.events.map((event, index) => (
              <div key={index} className="mb-4 flex flex-col space-y-1">
                <h1 className="mb-3 text-xl font-bold">{event.title}</h1>
                {event.items.map((item, innerIndex) => (
                  <div key={innerIndex}>{`${item.name} (${item.date})`}</div>
                ))}
              </div>
            ))}
          </div>
          <div className="flex space-x-12 md:flex-col md:space-x-0">
            <BadgeSection {...badgeSponsorEventsData.sponsor[0]} />
            <BadgeSection {...badgeSponsorEventsData.sponsor[1]} />
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
