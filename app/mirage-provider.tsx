"use client"

import { useEffect } from "react"
import { makeServer } from "@/migrate"
import { createServer } from "miragejs"
import { movies } from "@/mock-models/movies"

createServer({
  routes() {
    this.get("/api/movies", () => (movies))
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
