import React from "react"
import Link from "next/link"

export default function SignUpFooter() {
  return (
    <div className="mx-auto mt-2 flex w-4/5 flex-col gap-1 text-center text-sm">
      <Link href="/login">
        <p className="hover:cursor underline">
          I Already have an account.{" "}
          <span className="font-bold">Let me sign in</span>
        </p>
      </Link>
    </div>
  )
}
