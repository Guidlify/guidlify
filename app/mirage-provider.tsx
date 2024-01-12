"use client"

import { useEffect } from "react"
import { makeServer } from "@/migrate"
import { movies } from "@/mock-models/movies"
import { badgeSponsorData, eventData } from "@/mock-models/organization"
import { SponsoringOrganizationsData } from "@/mock-models/sponsor"
import { badgeSponsorEventsData, userEventData } from "@/mock-models/user"
import { createServer } from "miragejs"

createServer({
  routes() {
    this.get("/api/movies", () => movies)
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
    // COMMENT: Remove this examples
    fetch("/api/movies")
      .then((res) => res.json())
      .then((json) => console.log(json.movies))
  }, [])
  return <></>
}
