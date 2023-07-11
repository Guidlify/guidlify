import { FormEvent, useState } from "react"

import supabaseClient from "@/lib/supabase-browser"

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { ToastAction } from "../ui/toast"
import { useToast } from "../ui/use-toast"

interface LoginWithEmailProps {
  setLoadingOTP: (loadingOTP: boolean) => void
}

export default function LoginWithEmail({ setLoadingOTP }: LoginWithEmailProps) {
  const { toast } = useToast()
  const [email, setEmail] = useState("")

  const handleSignInWithEmail = async (e: FormEvent) => {
    e.preventDefault()
    setLoadingOTP(true)
    await supabaseClient.auth
      .signInWithOtp({
        email: email,
        options: {
          emailRedirectTo: `${location.origin}/`,
        },
      })
      .then(({ data, error }) => {
        setLoadingOTP(false)

        if (error) {
          toast({
            variant: "destructive",
            title: "Too many request!",
            description: error?.message,
            action: <ToastAction altText="Try again">Understood.</ToastAction>,
          })
        } else {
          toast({
            variant: "default",
            title: "Magic link sent. ✅",
            description:
              "A magic link has been sent to your email. Please check your inbox.",
            action: <ToastAction altText="Try again">Ok!</ToastAction>,
          })
        }
      })
      .catch((error) => {
        setLoadingOTP(false)
        toast({
          variant: "destructive",
          title: "Uh oh! Failed credential login.",
          description: error?.message,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
      })
  }

  return (
    <>
      <form
        id="magic-link"
        className="mx-auto mt-24 flex w-4/5 flex-col gap-3"
        onSubmit={handleSignInWithEmail}
        autoComplete="off"
      >
        <h2 className="text-center text-lg font-bold">Login to WebXGuild 🎩</h2>
        <Input
          name="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Button type="submit">Sign in</Button>
      </form>
    </>
  )
}
