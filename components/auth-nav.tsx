"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { NavItem } from "@/types"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface AuthNavProps {
  items?: NavItem[]
}

export default function AuthNav({ items }: AuthNavProps) {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <nav>
      <Link
        href="/login"
        className={cn(
          buttonVariants({ variant: "default", size: "sm" }),
          "px-4"
        )}
      >
        Login
      </Link>
    </nav>
  )
}
