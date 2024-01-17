"use client"

import { useEffect } from "react"
import { makeServer } from "@/migrate"
import { badgeSponsorData, eventData } from "@/mock-models/organization"
import { SponsoringOrganizationsData } from "@/mock-models/sponsor"
import { badgeSponsorEventsData, userEventData } from "@/mock-models/user"
import { createServer } from "miragejs"

createServer({
  routes() {
    this.get("/api/organization", () => ({
      eventData,
      badgeSponsorData,
    }))
    this.get("/api/organization/user", () => ({
      badgeSponsorEventsData,
      userEventData,
    }))
    this.get("/api/organization/sponsor", () => ({
      SponsoringOrganizationsData,
    }))
  },
})

export default function MirageProvider() {
  useEffect(() => {
    ;async () => makeServer()
  }, [])
  return <></>
}
