export interface userEventDataProps {
  title: string
  description: string
  emoji: string
  eventUrl: string
}

export const userEventData: userEventDataProps[] = [
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

interface BadgeItem {
  name: string
  url: string
}

interface BadgeSection {
  title: string
  items: BadgeItem[]
}

interface SponsorItem {
  name: string
  url: string
}

interface SponsorSection {
  title: string
  items: SponsorItem[]
}

interface EventItem {
  name: string
  date: string
}

interface EventSection {
  title: string
  items: EventItem[]
}

export interface BadgeSponsorEventsDataProps {
  badges: BadgeSection[]
  sponsor: SponsorSection[]
  events: EventSection[]
}

export const badgeSponsorEventsData: BadgeSponsorEventsDataProps = {
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
  events: [
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
