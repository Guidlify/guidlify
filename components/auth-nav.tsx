"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { type Session } from "@supabase/auth-helpers-nextjs"

import { ProfileState } from "@/types/users"
import supabaseClient from "@/lib/supabase-browser"
import { cn, getCountryFlag } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

import { Skeleton } from "./ui/skeleton"

export default function AuthNav({ session }: { session: Session | null }) {
  const router = useRouter()
  const [detail, setDetail] = useState<ProfileState>()

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
