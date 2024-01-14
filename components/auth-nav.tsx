"use client"

import { NavItem } from "@/types"
import { type Session } from "@supabase/auth-helpers-nextjs"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ProfileState } from "@/types/users"


interface AuthNavProps {
  session: Session | null
  items?: NavItem[]
}

export default function AuthNav({ session, items }: AuthNavProps) {
  const pathname = usePathname()

  const router = useRouter()
  const [detail, setDetail] = useState<ProfileState>()

  const handleSignOut = async () => router.refresh()

  return (
    <nav>
      {session ? (
        <>
          <Button variant={"ghost"} size={"sm"}>
            {session.user.email}
          </Button>
          <Button onClick={handleSignOut} variant={"secondary"} size={"sm"}>
            Logout
          </Button>
        </>
      ) : (
        <Link
          href={"/login"}
          className={cn(
            buttonVariants({ variant: "secondary", size: "sm" }),
            "px-4"
          )}
        >
          Login
        </Link>
      )}
    </nav>
  )
}
