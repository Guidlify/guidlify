"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { NavItem } from "@/types"

import { ProfileState } from "@/types/users"
import supabaseClient from "@/lib/supabase-browser"
import { cn, getCountryFlag } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

import { Skeleton } from "./ui/skeleton"

interface AuthNavProps {
  items: NavItem[]
}

export default async function AuthNav({ items }: AuthNavProps) {
  const pathname = usePathname()

  const router = useRouter()
  const [detail, setDetail] = useState<ProfileState>()
  const {
    data: { session },
  } = await supabaseClient.auth.getSession()

  const handleSignOut = useCallback(async () => {
    await supabaseClient.auth.signOut()
    setDetail(undefined)
    router.refresh()
  }, [router])

  useEffect(() => {
    const loadProfile = async (id: string | undefined) => {
      try {
        const userProfile = await fetch(`/api/user/profile?id=${id}`)
        const { data: profile } = await userProfile.json()
        setDetail(profile)
      } catch (error) {
        console.error("Error loading profile:", error)
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (detail === undefined && session !== null) {
      loadProfile(session?.user.id)
    }
  })

  return (
    <nav>
      {session ? (
        <div className="flex flex-row items-center gap-3">
          {items?.length ? (
            <nav>
              {items?.map(
                (item, index) =>
                  item.href && (
                    <Link
                      key={index}
                      href={item.href}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "sm" }),
                        "flex items-center text-lg font-semibold text-muted-foreground sm:text-sm",
                        item.disabled && "cursor-not-allowed opacity-80",
                        !item.disabled &&
                          pathname == item.href &&
                          "text-primary"
                      )}
                      {...(!item.disabled && { pathname: item.href })}
                    >
                      {item.title}
                    </Link>
                  )
              )}
            </nav>
          ) : null}
          {detail === undefined ? (
            <Skeleton className="h-9 w-[150px]" />
          ) : (
            <Button variant="ghost" size="sm">
              {detail?.first_name}{" "}
              <span className="mx-1 font-bold">{detail?.last_name}</span>{" "}
              {getCountryFlag(detail.countries.iso2)}
            </Button>
          )}
          <Button onClick={handleSignOut} size="sm">
            Logout
          </Button>
        </div>
      ) : (
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: "default", size: "sm" }),
            "px-4"
          )}
        >
          Login
        </Link>
      )}
    </nav>
  )
}
