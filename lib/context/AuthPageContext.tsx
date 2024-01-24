"use client"

import React, { createContext, useContext, useState } from "react"

type AuthPageFormType = "login" | "signup"

type AuthPageContextType = {
  formType: AuthPageFormType
  setFormType: (type: AuthPageFormType) => void // React.Dispatch<React.SetStateAction<FormType>>
}

const AuthPageContext = createContext<AuthPageContextType>({
  formType: "login",
  setFormType: () => {
    //
  },
})

interface AuthPageProviderProps {
  children: React.ReactNode
}

export const AuthPageProvider: React.FC<AuthPageProviderProps> = ({
  children,
}) => {
  const [formType, setFormType] = useState<AuthPageFormType>("login")

  return (
    <AuthPageContext.Provider value={{ formType, setFormType }}>
      {children}
    </AuthPageContext.Provider>
  )
}

export { AuthPageContext }
