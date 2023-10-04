import * as React from "react"

import { cn } from "@/lib/utils"

import { buttonVariants } from "./ui/button"
import { ToastAction } from "./ui/toast"
import { useToast } from "./ui/use-toast"

export function TryApp({ className }: React.HTMLAttributes<HTMLElement>) {
  const { toast } = useToast()

  const displayTempToast = React.useCallback(
    async (e: any) => {
      e.preventDefault()
      toast({
        variant: "default",
        title: "The app is not connected!",
        description: <TryAppDescription />,
        action: <ToastAction altText="I'll wait.">Ok!</ToastAction>,
      })
    },
    [toast]
  )

  const TryAppDescription = () => {
    return (
      <p>
        We are working hard to make Guidlify app online, it&apos;s not currently
        available.. Wanna help us? Feel free to contribute on{" "}
        <a
          className="font-semibold underline"
          href="https://github.com/WebXGuild/guidlify.com"
        >
          GitHub
        </a>
      </p>
    )
  }

  return (
    <div
      onClick={displayTempToast}
      className={cn(buttonVariants({ size: "lg" }))}
    >
      Try Guidlify
    </div>
  )
}
