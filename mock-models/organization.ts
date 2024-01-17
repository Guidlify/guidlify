import { BadgeSponsorDataProps } from "./interfaces/BadgeSponsorDataProps"
import { eventDataProps } from "./interfaces/eventDataProps"

export const eventData: eventDataProps[] = [
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

export const badgeSponsorData: BadgeSponsorDataProps = {
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
