import Image from "next/legacy/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/mode-toggle"

import { UserNav } from "./user-nav"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn(
        "mx-4 flex items-center justify-between p-6 lg:px-6",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center">
        <div className="mr-4">
          <Image
            src={"/guidlify-brand-logo-notext.svg"}
            alt="brand logo of guidlify"
            width={50}
            height={30}
          />
        </div>
      </div>
      <div className="boder-black flex items-center justify-center rounded-lg border-2 px-6 py-3 dark:border-gray-200">
        <div className="hidden space-x-8 lg:flex">
          <Link
            href="/examples/dashboard"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Find Events
          </Link>
          <Link
            href="/examples/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Event Packs
          </Link>
          <Link
            href="/examples/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Community
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <span className="mr-1">
          <ModeToggle />
        </span>
        <UserNav />
      </div>
    </nav>
  )
}
