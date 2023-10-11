import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { TryApp } from "@/components/try-app"

import AvatarOverLap from "./avatar-overlap"

const HeroPage = () => {
  return (
    <div className="container flex max-w-[64rem] flex-col items-center justify-center gap-4 text-center">
      <Link
        href={siteConfig.links.twitter}
        className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
        target="_blank"
      >
        alpha preview
      </Link>
      <h1 className="font-heading text-3xl tracking-wide sm:text-5xl md:text-6xl lg:text-7xl">
        Begin your event <br /> Journey with Guildify
      </h1>

      <p className="text-balance max-w-[45rem] flex-wrap leading-normal text-muted-foreground sm:text-lg sm:leading-8">
        Where developers guild meet. Find or create your events, launch
        crowdfunding campaign or request sponsorship for your event, and more.
      </p>
      <div className="mx-auto cursor-pointer space-x-4 space-y-6">
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
        <div>
          <div className="mx-auto flex w-full max-w-sm space-y-2 pt-2 text-sm tracking-wide text-slate-600 dark:text-violet-300 xs:flex-col md:flex-row">
            <AvatarOverLap size={36} />
            <span className="text-md flex items-center justify-center pl-4 text-muted-foreground">
              {" "}
              ...1k and others love it here!
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroPage
