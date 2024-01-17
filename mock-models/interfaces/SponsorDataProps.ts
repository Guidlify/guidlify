interface SponsoringOrganizationItem {
  name: string
  url: string
  description: string
}

export interface SponsoringOrganizationSection {
  title: string
  items: SponsoringOrganizationItem[]
}

export interface SponsorTierDataItem {
  tier: string
  price: string
  about: { description: string }[]
}

export interface BasicInfo {
  eventName: string
  orgName: string
  numberOfSponsors: string
  title: string
  description: string
  peopleInterested: string
}

export interface SponsorDataProps {
  organizations: SponsoringOrganizationSection[]
  sponsorTierData: SponsorTierDataItem[]
  basicInfo: BasicInfo
}
