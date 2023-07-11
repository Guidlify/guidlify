import Link from "next/link"

import { siteConfig } from "@/config/site"
import { supabaseServer } from "@/lib/supabase-server"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default async function IndexPage() {
  const supabase = supabaseServer()
  const {
    data: { session },
  } = await supabase.auth.getSession()

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
            WebXGuild 🎩
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Where developers guild meet. Create your events, request
            sponsorship, and more.
          </p>
          <div className="space-x-4">
            {!session ? (
              <Link
                href="/login"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Login
              </Link>
            ) : null}
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
