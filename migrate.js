import { Model, createServer } from "miragejs"

export async function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      movie: Model,
    },

    seeds(server) {
      server.create("movie", { name: "Inception", year: 2010 })
      server.create("movie", { name: "Interstellar", year: 2014 })
      server.create("movie", { name: "Dunkirk", year: 2017 })
    },

    routes() {
      this.namespace = "api"

      this.get("/movies", (schema) => {
        return schema.movies.all()
      })
    },
  })

  return server
}
