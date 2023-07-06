"use client"

import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  createClientComponentClient,
  type Session,
} from "@supabase/auth-helpers-nextjs"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

export default function AuthNav({ session }: { session: Session | null }) {
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

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
