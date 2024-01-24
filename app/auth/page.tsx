"use client"

import { useContext, useState } from "react"
import Image from "next/legacy/image"
import Link from "next/link"

import { AuthPageContext } from "@/lib/context/AuthPageContext"
import { UserAuthForm } from "@/components/auth-page/user-auth-form"

import { Button } from "../../components/ui/button"

export default function AuthenticationPage() {
  const { formType, setFormType } = useContext(AuthPageContext)
  const [hasBasicValidationErrors, setHasBasicValidationErrors] =
    useState<boolean>(false)

  const handleValidationStatusChange = (hasErrors: boolean) => {
    setHasBasicValidationErrors(hasErrors)
  }

  const handleSignup = () => {
    setFormType("signup")
  }

  return (
    <>
      <div className="container relative flex h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="bg-bg-100 absolute inset-0">
            <Image
              alt="auth banner"
              src={"/auth-page/auth-banner.jpeg"}
              layout="fill"
            />
          </div>
        </div>
        <div className="xs:mt-20 md:mt-0 lg:p-8">
          {/* border border-white  mx-36 my-6 */}
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                {formType === "signup" ? "Hey! What's up? 👋" : "Hello! 👋"}
              </h1>
              {formType === "signup" ? (
                <div className="text-sm text-muted-foreground">
                  <p>Its time for you to create an account.</p>
                  <p>Lets get started!</p>
                </div>
              ) : (
                <div className="text-sm text-muted-foreground">
                  <p>Welcome back to WebX Guild!</p>
                  <p>We are excited to see you again.</p>
                </div>
              )}
            </div>
            <UserAuthForm
              formType={formType}
              onSuccessfulAuth={() => {}}
              onValidationStatusChange={handleValidationStatusChange}
            />
            <div className="mr-2 mt-16 flex items-end justify-end space-x-2 pt-10">
              {formType === "login" && (
                <Button
                  disabled={hasBasicValidationErrors}
                  className="w-24 border-slate-400 hover:border hover:bg-transparent hover:text-black dark:hover:text-white"
                  type="submit"
                >
                  Sign In
                </Button>
              )}
              <Button
                disabled={
                  formType === "login" ? false : hasBasicValidationErrors
                }
                className="w-24 border border-slate-400 bg-transparent text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black"
                onClick={handleSignup}
                type="submit"
              >
                Sign Up
              </Button>
            </div>
            {formType === "signup" && (
              <p className="px-2 pt-8 text-center text-sm text-muted-foreground">
                <Link
                  href=""
                  className="underline underline-offset-4 hover:text-primary"
                  onClick={() => setFormType("login")}
                >
                  Already have an account?
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
