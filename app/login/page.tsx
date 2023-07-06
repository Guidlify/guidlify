"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

import { Database } from "@/types/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export default function Login() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()

  // const handleSignUp = async () => {
  //   await supabase.auth.signUp({
  //     email,
  //     password,
  //     options: {
  //       emailRedirectTo: `${location.origin}/auth/callback`,
  //     },
  //   })
  //   router.refresh()
  // }

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault()
    const login = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (login.data.user !== null) {
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
      className="mx-auto mt-24 flex w-[80%] flex-col gap-3 sm:w-[50%] md:w-[50%] lg:w-[40%] xl:w-[30%]"
      onSubmit={(e: FormEvent) => handleSignIn(e)}
      autoComplete="off"
    >
      <h2 className="text-center text-lg font-bold">Login to WebXGuild</h2>
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
      {/* <Button onClick={handleSignUp}>Sign up</Button> */}
      <Button type="submit">Sign in</Button>
    </form>
  )
}
