"use client"

import { useEffect, useState } from "react"
import {
  BadgeSponsorDataProps,
  eventDataProps,
} from "@/mock-models/organization"

import AvatarOrganization from "@/components/organization/avatar"
import BadgeSection from "@/components/organization/badge-section"
import BannerOrganization from "@/components/organization/banner"
import CreateEvent from "@/components/organization/create-event"
import EventList from "@/components/organization/event-list"
import EventName from "@/components/organization/event-name"
import ProfileInfo from "@/components/organization/profile-info"

const OrganizationPage = () => {
  const [organizationData, setOrganizationData] = useState<{
    eventData: eventDataProps[]
    badgeSponsorData: BadgeSponsorDataProps
  }>({
    eventData: [],
    badgeSponsorData: {
      badges: [],
      sponsor: [],
      sponsoring: [],
    },
  })

  const { eventData, badgeSponsorData } = organizationData

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/organization")
        const data = await response.json()
        setOrganizationData(data)
      } catch (error) {
        console.error("Error fetching organization data:", error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="container mb-20">
      <BannerOrganization url="/organization/banner.png" />
      <div className="">
        <div className="relative mb-4 mt-[-60px] flex items-center justify-center md:mt-[-100px]">
          <AvatarOrganization url="/organization/banner.png" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <ProfileInfo
            name="WebX Guild"
            url="/organization/verified.png"
            username="webxguild"
            description="At WebX DAO, we're dedicated to staying at the forefront of the
            ever-evolving web. From web3 and web5 to the metaverse and DeFi!"
          />
          <CreateEvent />
        </div>
        <div className="border-b-1 mt-6 w-full border" />
        <div className="mt-16 flex flex-col lg:flex-row">
          <div className="mb-6 flex-1 flex-col md:ml-8">
            <div className="flex space-x-12 sm:flex-col sm:space-x-0">
              <BadgeSection {...badgeSponsorData.badges[0]} />
              <BadgeSection {...badgeSponsorData.sponsor[0]} />
            </div>
            <div>
              <h1 className="mb-3 text-xl font-bold">Sponsoring</h1>
              <div className="mb-4 flex flex-col space-y-1">
                {badgeSponsorData.sponsoring?.[0]?.items.map((item, index) => (
                  <div key={index}>{`${item.name} (${item.date})`}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="mb-8 w-full flex-col justify-start md:mx-8 md:w-full lg:w-2/3">
            <h1 className="pb-4 text-xl font-bold">Upcoming Events</h1>
            {eventData.map((eventInfo, index) => (
              <div
                key={index}
                className="bg-image-container mb-8 min-h-[114px] w-full max-w-[680px] rounded-lg p-4 text-white lg:max-w-[800px]"
              >
                <EventName
                  title={eventInfo.title}
                  description={eventInfo.description}
                  location={eventInfo.location}
                  starCount={eventInfo.starCount}
                  date={eventInfo.date}
                />
              </div>
            ))}
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

export default OrganizationPage
