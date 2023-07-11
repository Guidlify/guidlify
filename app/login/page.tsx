"use client"

import { useState } from "react"

import LoginFooter from "@/components/auth/login-footer"
import LoginWithEmail from "@/components/auth/login-with-email"
import LoginWithUsernameAndPasswordForm from "@/components/auth/login-with-password"
import GithubAuthProvider from "@/components/auth/providers/github"

export default function Login() {
  const [_, setPassword] = useState("")
  const [isHidden, setIsHidden] = useState(false)
  const [loadingOTP, setLoadingOTP] = useState(false)

  const hideElement = () => {
    setIsHidden(true)
    setPassword("")
  }

  return (
    <div className="mx-auto flex flex-col gap-1 sm:w-1/2 md:w-1/2 lg:w-2/5 xl:w-1/3">
      {!isHidden ? (
        <LoginWithUsernameAndPasswordForm />
      ) : (
        <LoginWithEmail setLoadingOTP={setLoadingOTP} />
      )}
      <div className="mx-auto flex w-4/5 flex-col gap-3 text-center">or</div>
      <GithubAuthProvider />
      <LoginFooter
        hideElement={hideElement}
        setIsHidden={setIsHidden}
        isHidden={isHidden}
        loadingOTP={loadingOTP}
      />
    </div>
  )
}
