"use client"

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"


import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { ToastAction } from "../ui/toast"
import { useToast } from "../ui/use-toast"

export default function LoginWithUsernameAndPasswordForm() {
  const { toast } = useToast()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault()
    const login = false

    if (login) {
      setEmail("")
      setPassword("")
      router.refresh()
      router.push("/")
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Failed credential login.",
        description:
          "There was a problem with your email or password is not correct!.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
  }

  return (
    <form
      className={`mx-auto mt-24 flex w-4/5 flex-col gap-3 transition-opacity duration-500`}
      onSubmit={handleSignIn}
      autoComplete="off"
    >
      <h2 className="text-center text-lg font-bold">Login to WebXGuild 🎩</h2>
      <Input
        name="email"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <Input
        type="password"
        name="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Button type="submit">Sign in</Button>
    </form>
  )
}
