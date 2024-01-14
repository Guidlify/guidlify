"use client"

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { ToastAction } from "../ui/toast"
import { useToast } from "../ui/use-toast"

export default function SignUpWithEmail() {
  const { toast } = useToast()
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault()
    const signUp = true
    if (signUp) {
      toast({
        variant: "destructive",
        title: "Whoops! You are already here.",
        description: `Your email ${email} is already registered!`,
        action: (
          <ToastAction
            altText="Try Login"
            onClick={() => router.push("/login")}
          >
            Try Login
          </ToastAction>
        ),
      })
    }
  }

  return (
    <form
      className={`mx-auto mt-24 flex w-4/5 flex-col gap-3 transition-opacity duration-500`}
      onSubmit={(e: FormEvent) => handleSignUp(e)}
      autoComplete="off"
    >
      <h2 className="text-center text-lg font-bold">Sign Up to WebXGuild 🎩</h2>
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
      <Button type="submit">Sign Up</Button>
    </form>
  )
}
