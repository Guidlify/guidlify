interface BadgeItem {
  name: string
  url: string
}

interface BadgeSection {
  title: string
  items: BadgeItem[]
}

interface SponsoringItem {
  name: string
  date: string
}

interface SponsoringSection {
  title: string
  items: SponsoringItem[]
}

export interface BadgeSponsorDataProps {
  badges: BadgeSection[]
  sponsor: BadgeSection[]
  sponsoring: SponsoringSection[]
}
