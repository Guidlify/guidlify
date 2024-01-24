import * as React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { useToast } from "../../components/ui/use-toast"
import { Icons } from "../icons"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  formType: "login" | "signup"
  onValidationStatusChange: (hasErrors: boolean) => void
  onSuccessfulAuth: (
    userId: string,
    email: string | null,
    username?: string,
    avatarUrl?: string
  ) => void
}

const authFormSchema = z.object({
  Name: z
    .string({
      required_error: "First name is required",
      invalid_type_error: "First name must be a string",
    })
    .min(3, {
      message: "At least 3 characters.",
    })
    .max(20, {
      message: "At most 20 characters.",
    }),
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Invalid Type",
    })
    .email({
      message: "Invalid email address",
    })
    .min(3, {
      message: "At least 3 characters.",
    }),
  password: z.string({
    required_error: "Password is required",
  }),
  confirmPassword: z.string({
    required_error: "Password is required",
  }),
})

type AuthFormValues = z.infer<typeof authFormSchema>

const defaultValues: Partial<AuthFormValues> = {
  Name: "",
  email: "",
  password: "",
  confirmPassword: "",
}

export function UserAuthForm({
  className,
  formType,
  onSuccessfulAuth,
  onValidationStatusChange,
  ...props
}: UserAuthFormProps) {
  const form = useForm<AuthFormValues>({
    resolver: zodResolver(authFormSchema),
    defaultValues,
    mode: "onChange",
  })

  const { handleSubmit, formState, setValue } = form

  useEffect(() => {
    const calculateValidationStatus = () => {
      const requiredFields =
        formType === "login"
          ? ["email", "password"]
          : ["email", "Name", "password", "confirmPassword"]

      const emptyFields = requiredFields.some(
        (fieldName) =>
          form.getValues(
            fieldName as "Name" | "email" | "password" | "confirmPassword"
          ) === ""
      )
      const hasErrors =
        Object.keys(form.formState.errors).length > 0 || emptyFields === true
      onValidationStatusChange(hasErrors)

      // console.log({ hasErrors })
    }

    calculateValidationStatus()
  }, [form, form.formState, formType, onValidationStatusChange])

  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const { toast } = useToast()
  const handleForgotPassword = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (form.getValues("email") === "") {
      toast({
        title: "Email missing!",
        description: (
          <div className="mt-2 w-[340px] rounded-md bg-foreground p-4 text-background">
            Enter an email to recieve password reset link.
          </div>
        ),
      })
    } else if (formState.errors.email) {
      toast({
        title: "Email incorrect!",
        description: (
          <div className="mt-2 w-[340px] rounded-md bg-foreground p-4 text-background">
            Enter correct email to recieve password reset link.
          </div>
        ),
      })
    } else {
      try {
        //   await resetPassword(email)
        toast({
          title: "Reset Link Sent",
          description: (
            <div className="mt-2 w-[340px] rounded-md bg-foreground p-4 text-background">
              A password reset link has been sent to your email address.
            </div>
          ),
        })
        setIsLoading(false)
      } catch (error) {
        console.error(error)

        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: (
            <div className="mt-2 w-[340px] rounded-md bg-foreground p-4 text-background">
              There was a problem with your request.
            </div>
          ),
        })
        setIsLoading(false)
      }
    }
  }

  async function onSubmit(data: AuthFormValues) {
    try {
      const response = await fetch(``, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: data.Name,
          // ..... other data
        }),
      })

      if (response.ok) {
        toast({
          title: "Account updated successfully",
          description: (
            <div className="mt-2 w-[340px] rounded-md bg-foreground p-4 text-background">
              Your profile details have been updated.
            </div>
          ),
        })
      } else {
        console.error("Error updating profile:", response.status)

        toast({
          // variant: 'destructive',
          title: "Uh Oh! Something went wrong",
          description: (
            <div className="mt-2 w-[340px] rounded-md bg-foreground p-4 text-background">
              There was a problem updating your details.
            </div>
          ),
        })
      }
    } catch (error) {
      console.error("Error updating profile:", error)
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            {formType === "signup" && (
              <div className="grid gap-1">
                <FormField
                  control={form.control}
                  name="Name"
                  render={({ field }) => (
                    <FormItem>
                      <Label
                        className="text-md ml-1 font-medium"
                        htmlFor="Name"
                      >
                        Name
                      </Label>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          autoCapitalize="none"
                          autoComplete="given-name"
                          autoCorrect="off"
                          placeholder="Name"
                          disabled={isLoading}
                          className="mt-2 border-gray-300 py-6"
                        />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <Label className="text-md ml-1 font-medium" htmlFor="email">
                      Email
                    </Label>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        placeholder="Email"
                        disabled={isLoading}
                        className="mt-2 border-gray-300 py-6"
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <Label
                      className="text-md ml-1 font-medium"
                      htmlFor="password"
                    >
                      Password
                    </Label>
                    <FormControl>
                      <Input
                        {...field}
                        id="password"
                        placeholder="Password"
                        type="password"
                        autoComplete="new-password"
                        autoCorrect="off"
                        disabled={isLoading}
                        className="mt-2 border-gray-300 py-6"
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {formType === "signup" && (
              <div className="mt-2 grid gap-1">
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <Label
                        className="text-md ml-1 font-medium"
                        htmlFor="confirmPassword"
                      >
                        Password
                      </Label>
                      <FormControl>
                        <Input
                          {...field}
                          id="confirmPassword"
                          placeholder="Confirm Password"
                          name="confirmPassword"
                          type="password"
                          autoComplete="new-password"
                          autoCorrect="off"
                          disabled={isLoading}
                          className="mt-2 border-gray-300 py-6"
                        />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
            {formType === "login" && (
              <div className="text-right">
                <Link
                  href={""}
                  className="text-primary-500 pr-1 text-sm text-muted-foreground underline-offset-4 transition duration-300 hover:text-primary hover:underline"
                  onClick={handleForgotPassword}
                >
                  Forgot password?
                </Link>
              </div>
            )}
            {formType === "signup" && (
              <>
                <div className="mt-4 px-2 text-sm text-muted-foreground">
                  <Checkbox id="terms" className="mr-2" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept terms and conditions
                  </label>
                  <div className="ml-6 mr-[-50px] text-xs">
                    You agree to our{" "}
                    <Link
                      href="/terms"
                      className="underline underline-offset-4 hover:text-primary"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="underline underline-offset-4 hover:text-primary"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </div>
                </div>
                <div className="relative mt-8">
                  <div className="relative flex justify-start bg-background px-2 text-sm text-muted-foreground">
                    Or Sign Up with
                  </div>
                </div>
                <Button
                  variant="outline"
                  type="button"
                  disabled={isLoading}
                  className="tracking flex items-center justify-center border border-black bg-slate-200 py-6 text-black"
                >
                  {isLoading ? (
                    <Icons.gitHub className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Icons.google className="mr-2 h-4 w-4" />
                  )}{" "}
                  <span className="text-center md:ml-auto md:mr-12 md:pr-24">
                    Sign Up With Google
                  </span>
                </Button>
                <Button
                  variant="outline"
                  type="button"
                  // disabled={gitHubLoading}
                  // onClick={handleSubmitWithGitHub}
                  className="tracking flex items-center justify-center border border-black bg-slate-800 py-6 text-white"
                >
                  {isLoading ? (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Icons.gitHub className="mr-2 h-4 w-4" />
                  )}{" "}
                  <span className="text-center md:ml-auto md:mr-12 md:pr-24">
                    Sign Up With GitHub
                  </span>
                </Button>
              </>
            )}
          </div>
        </form>
      </Form>
    </div>
  )
}
