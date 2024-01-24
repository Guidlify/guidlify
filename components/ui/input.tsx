import * as React from "react"
import { useState } from "react"

import { cn } from "@/lib/utils"

import { Icons } from "../icons"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>("")

    const handleTogglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible)
    }

    const getInputType = () => {
      if (isPasswordVisible) {
        return "text"
      } else if (type === "password") {
        return "password"
      } else {
        return type
      }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value)
    }

    return (
      <div className="relative">
        {type === "search" && (
          <Icons.search className="absolute left-5 top-3 mr-2 h-4 w-4 shrink-0 opacity-50" />
        )}
        <input
          type={type === "password" ? getInputType() : type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          value={inputValue}
          onChange={handleInputChange}
          {...props}
        />
        {type === "password" && inputValue && (
          <button
            type="button"
            className="absolute inset-y-0 right-3 top-2 px-2"
            onClick={handleTogglePasswordVisibility}
          >
            {isPasswordVisible ? <Icons.eyeOff /> : <Icons.eye />}
          </button>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }
