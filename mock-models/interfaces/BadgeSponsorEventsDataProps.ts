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
