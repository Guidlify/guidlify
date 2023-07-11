"use client"

import React from "react"

import SignUpFooter from "@/components/auth/signup-footer"
import SignUpWithEmail from "@/components/auth/signup-with-email"

export default function SignUp() {
  return (
    <div className="mx-auto flex flex-col gap-1 sm:w-1/2 md:w-1/2 lg:w-2/5 xl:w-1/3">
      <SignUpWithEmail />
      <div className="mx-auto mt-2 flex w-4/5 flex-col gap-3 text-center">
        or
      </div>
      <SignUpFooter />
    </div>
  )
}
