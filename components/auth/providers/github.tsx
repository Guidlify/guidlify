"use client"

import React from "react"

import supabaseClient from "@/lib/supabase-browser"
import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

export default function GithubAuthProvider() {
  const { toast } = useToast()

  async function signInWithGitHub() {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: "github",
    })

    if (data) {
      console.log(data)
      toast({
        variant: "default",
        title: "GitHub login successful! ✅",
        description:
          "You have been logged in with GitHub. Welcome in WebX Guild!",
        action: <ToastAction altText="Try again">Ok!</ToastAction>,
      })
    } else {
      toast({
        variant: "destructive",
        title: "Something went wrong with the GitHub login.",
        description: error?.message,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
  }
  return (
    <div className="mx-auto flex w-4/5 flex-col gap-3">
      <Button className="flex gap-2" onClick={signInWithGitHub}>
        <Icons.github />
        Sign in with Github{" "}
      </Button>
    </div>
  )
}
