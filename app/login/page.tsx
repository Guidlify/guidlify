"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

import { Icons } from "@/components/icons"
import ToastContribute from "@/components/toast-contribute"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { Database } from "@/types/supabase"
import { Loader2Icon } from "lucide-react"
import Link from "next/link"

export default function Login() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()
  const [isHidden, setIsHidden] = useState(false);
  const [loadingOTP, setLoadingOTP] = useState(false);

  const hideElement = () => {
    setIsHidden(true);
    setPassword("");
  };

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })
    router.refresh()
  }

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault()

    if (!password) {
      setLoadingOTP(true);
      await supabase.auth.signInWithOtp({
        email: email,
        options: {
          emailRedirectTo: `${location.origin}/`,
        },
      }).then(({ data, error }) => {
        // (then): Handle the response from the API call
        setLoadingOTP(false);

        // If error is triggered, it's because the user has already tried the magic link too many times
        if (error) {
          toast({
            variant: "destructive",
            title: "Too many request!",
            description: error?.message,
            action: <ToastAction altText="Try again">Understood.</ToastAction>,
          })
        }
        // Else, the magic link has been sent!
        else {
          toast({
            variant: "default",
            title: "Magic link sent. ✅",
            description: "A magic link has been sent to your email. Please check your inbox.",
            action: <ToastAction altText="Try again">Ok!</ToastAction>,
          })
        }

      }).catch((error) => {
          setLoadingOTP(false);
          // (catch): Handle the error appropriately
          toast({
            variant: "destructive",
            title: "Uh oh! Failed credential login.",
            description: error?.message,
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          })
        });
    } else {
      const login = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (login.data.user !== null) {
        setEmail("")
        setPassword("")
        // router.refresh()
        // router.push("/")
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
  }

  async function signInWithGitHub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    });

    if (data) {
      console.log(data);
      toast({
        variant: "default",
        title: "GitHub login successful! ✅",
        description: "You have been logged in with GitHub. Welcome in WebX Guild!",
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
    <div className="flex flex-col gap-1 mx-auto sm:w-1/2 md:w-1/2 lg:w-2/5 xl:w-1/3">
      {/* Mail signin */}
      {!isHidden ? (
        <form
          id="toHide"
          className={`transition-opacity duration-500 ${isHidden ? 'opacity-0' : 'opacity-100'} flex flex-col gap-3 mx-auto mt-24 w-4/5`}
          onSubmit={(e: FormEvent) => handleSignIn(e)}
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

      ) : (
        <form
          id="magic-link"
          className="flex flex-col gap-3 mx-auto mt-24 w-4/5"
          onSubmit={(e: FormEvent) => handleSignIn(e)}
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
      )}



      <div className="flex flex-col gap-3 mx-auto w-4/5 text-center">or</div>

      {/* Github signin */}
      <div className="flex flex-col gap-3 mx-auto w-4/5">
        <Button className="flex gap-2" onClick={signInWithGitHub}><Icons.github />Sign in with Github </Button>
      </div>

      {/* Footer section */}
      {!isHidden ? (
        <div className="flex flex-col gap-1 mx-auto w-4/5 text-center mt-5 text-sm">
          <Link href="#magic-link" onClick={hideElement}>
            <p className="underline hover:cursor">Send me a magic link ✨</p>
          </Link>
          <Link href="#forgot-password">
            <p
              className="underline hover:cursor"
              onClick={() => toast({
                variant: "default",
                title: "👀 This feature need to be implemented.",
                description: <ToastContribute></ToastContribute>,
                action: <ToastAction altText="Try again">Ok!</ToastAction>,
              })}>I forgot my password</p>
          </Link>
          <Link href="#forgot-password">
            <p
              className="underline hover:cursor"
              onClick={() => toast({
                variant: "default",
                title: "👀 This feature need to be implemented.",
                description: <ToastContribute></ToastContribute>,
                action: <ToastAction altText="Try again">Ok!</ToastAction>,
              })}>Don't have an account? Sign up</p>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-1 mx-auto w-4/5 text-center mt-5 text-sm">
          <Link href="/login">
            <p onClick={() => setIsHidden(false)} className="underline hover:cursor">Return to signin</p>
          </Link>
          {loadingOTP && (
            <p className="flex justify-center items-center gap-2"><Loader2Icon className="animate-spin"></Loader2Icon>Sending magic link to your mailbox...</p>
          )}
        </div>
      )}
    </div>
  )
}
