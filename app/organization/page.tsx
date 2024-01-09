"use client"

import AvatarOrganization from "@/components/organization/avatar"
import BadgeSection from "@/components/organization/badge-section"
import BannerOrganization from "@/components/organization/banner"
import BlogPost from "@/components/organization/blog-post"
import CreateEvent from "@/components/organization/create-event"
import EventName from "@/components/organization/event-name"
import ProfileInfo from "@/components/organization/profile-info"

const eventData = [
  {
    title: "WebX Manila",
    description:
      "Back at it again with another big event at Manila. Are you guys all excited? We are about to drop...",
    location: "Manilla",
    starCount: "20k",
    date: "November 2023",
  },
  {
    title: "WebX Manila",
    description:
      "Back at it again with another big event at Manila. Are you guys all excited? We are about to drop...",
    location: "Manilla",
    starCount: "20k",
    date: "November 2023",
  },
  {
    title: "WebX Manila",
    description:
      "Back at it again with another big event at Manila. Are you guys all excited? We are about to drop...",
    location: "Manilla",
    starCount: "20k",
    date: "November 2023",
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
      title: "Sponsors",
      items: [
        {
          name: "WebXDAO",
          url: "/organization/webxdao.png",
        },
        {
          name: "WebXGuild",
          url: "/organization/webxguild.png",
        },
      ],
    },
  ],
  sponsoring: [
    {
      title: "Sponsoring",
      items: [
        {
          name: "WebX Manila",
          date: "10/24/2023",
        },
        {
          name: "ETHGlobal",
          date: "12/23/2023",
        },
      ],
    },
  ],
}

const eventHostedData = [
  {
    imageSrc: "/organization/team.png",
    tag: "Most popular",
    title: "Many desktop publishing packages and web page",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis eros sed risus sollicitudin fringilla dictum in metus.",
    avatarSrc: "/organization/avatar.png",
    organizationName: "WebXGuild",
  },
  {
    imageSrc: "/organization/team.png",
    tag: "Most popular",
    title: "Many desktop publishing packages and web page",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis eros sed risus sollicitudin fringilla dictum in metus.",
    avatarSrc: "/organization/avatar.png",
    organizationName: "WebXGuild",
  },
]

const OrganizationPage = () => {
  return (
    <div className="container mb-20">
      <BannerOrganization url="/organization/banner.png" />
      <div className="">
        <div className="relative mb-4 flex items-center justify-center xs:mt-[-60px] md:mt-[-100px]">
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
          <div className="flex w-full items-end xs:mt-8 xs:justify-center md:mt-[-30px] md:justify-end">
            <CreateEvent />
          </div>
        </div>
        <div className="border-b-1 mt-6 w-full border" />
        <div className="mt-16 flex justify-start">
          <div className="ml-8 flex-1 flex-col">
            <BadgeSection {...badgeSponsorData.badges[0]} />
            <BadgeSection {...badgeSponsorData.sponsor[0]} />
            <div>
              <h1 className="mb-3 text-xl font-bold">Sponsoring</h1>
              <div className="mb-4 flex flex-col space-y-1">
                {badgeSponsorData.sponsoring[0].items.map((item, index) => (
                  <div key={index}>{`${item.name} (${item.date})`}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-894 mr-4 flex-col">
            <h1 className="pb-4 text-xl font-bold">Upcoming Events</h1>
            {eventData.map((eventInfo, index) => (
              <div key={index} className="bg-image-container mb-8 h-[114px] w-[800px] rounded-lg p-4 text-white">
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
          <div className="mt-8 flex justify-evenly space-x-5">
            {eventHostedData.map((event, index) => (
              <BlogPost
                key={index}
                imageSrc={event.imageSrc}
                tag={event.tag}
                title={event.title}
                description={event.description}
                avatarSrc={event.avatarSrc}
                orgName={event.organizationName}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrganizationPage
