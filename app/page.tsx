"use client"

import Benefits from "@/components/home-page/benefits"
import CheckTools from "@/components/home-page/check-tools"
import ContactUs from "@/components/home-page/contact-us"
import EventLocations from "@/components/home-page/event-locations"
import HeroPage from "@/components/home-page/hero-page"

const IndexPage = () => {
  return (
    <div className="container">
      <section className="grow space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-28">
        <HeroPage />
      </section>
      <section className="grow space-y-6 pb-14 pt-6 md:pb-12 md:pt-10 lg:py-16">
        <EventLocations />
      </section>
      <section className="grow space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-28">
        <CheckTools />
      </section>
      <section className="grow space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-28">
        <Benefits />
      </section>
      <section className="grow pb-24">
        <ContactUs />
      </section>
    </div>
  )
}

export default IndexPage
