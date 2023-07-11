"use client"

import React from "react"
import Link from "next/link"
import { Loader2Icon } from "lucide-react"

import ToastContribute from "../toast-contribute"
import { ToastAction } from "../ui/toast"
import { useToast } from "../ui/use-toast"

interface LoginFooterProps {
  isHidden: boolean
  loadingOTP: boolean
  hideElement: () => void
  setIsHidden: (isHidden: boolean) => void
}

export default function LoginFooter({
  isHidden,
  loadingOTP,
  hideElement,
  setIsHidden,
}: LoginFooterProps) {
  const { toast } = useToast()
  return (
    <>
      {!isHidden ? (
        <div className="mx-auto mt-5 flex w-4/5 flex-col gap-1 text-center text-sm">
          <Link href="#magic-link" onClick={hideElement}>
            <p className="hover:cursor underline">Send me a magic link ✨</p>
          </Link>
          <Link href="#forgot-password">
            <p
              className="hover:cursor underline"
              onClick={() =>
                toast({
                  variant: "default",
                  title: "👀 This feature need to be implemented.",
                  description: <ToastContribute></ToastContribute>,
                  action: <ToastAction altText="Try again">Ok!</ToastAction>,
                })
              }
            >
              I forgot my password
            </p>
          </Link>
          <Link href="/signup">
            <p className="hover:cursor underline">
              Don&apos;t have an account?{" "}
              <span className="font-bold">Sign up</span>
            </p>
          </Link>
        </div>
      ) : (
        <div className="mx-auto mt-5 flex w-4/5 flex-col gap-1 text-center text-sm">
          <Link href="/login">
            <p
              onClick={() => setIsHidden(false)}
              className="hover:cursor underline"
            >
              Return to signin
            </p>
          </Link>
          {loadingOTP && (
            <p className="flex items-center justify-center gap-2">
              <Loader2Icon className="animate-spin"></Loader2Icon>Sending magic
              link to your mailbox...
            </p>
          )}
        </div>
      )}
    </>
  )
}
