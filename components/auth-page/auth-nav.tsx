"use client"

import { useContext } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { NavItem } from "@/types"

import { AuthPageContext } from "@/lib/context/AuthPageContext"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface AuthNavProps {
  items?: NavItem[]
}

export default function AuthNav({ items }: AuthNavProps) {
  const pathname = usePathname()
  const router = useRouter()

  const { setFormType } = useContext(AuthPageContext)

  return (
    <nav>
      <Link
        href="/auth"
        className={cn(
          buttonVariants({ variant: "default", size: "sm" }),
          "px-4"
        )}
        onClick={() => setFormType("login")} // we can use this to redirect to signup form on the same login route
      >
        Login
      </Link>
    </nav>
  )
}
