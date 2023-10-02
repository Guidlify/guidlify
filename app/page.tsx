"use client"

import Link from "next/link"

import { TryApp } from "@/components/try-app"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export default async function IndexPage() {
  return (
    <>
      <section className="grow space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center justify-center gap-4 text-center">
          <Link
            href={siteConfig.links.twitter}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            alpha preview
          </Link>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Guidlify
          </h1>

          <p className="text-balance max-w-[45rem] flex-wrap leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Where developers guild meet. Create your events, request
            sponsorship, and more.
          </p>
          <div className="cursor-pointer space-x-4">
            {/* <Link href="/app" className={cn(buttonVariants({ size: "lg" }))}>
              Try Guidlify
            </Link> */}
            <TryApp />
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
