"use client"

import { useEffect } from "react"
import { makeServer } from "@/migrate"
import { createServer } from "miragejs"
import { users } from "@/mock-models/users"

createServer({
  routes() {
    this.get("/api/users", () => (users))
  },
})

export default function MirageProvider() {
  useEffect(() => {
    ;async () => makeServer()
    // COMMENT: Remove this examples
    fetch("/api/users")
      .then((res) => res.json())
      .then((json) => console.log(json.users))
  }, [])
  return <></>
}
