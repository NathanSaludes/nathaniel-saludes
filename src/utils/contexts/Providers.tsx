"use client"
import { PropsWithChildren } from "react"
import { LoadingContextProvider } from "./PageLoaderContext"

export const GlobalContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <LoadingContextProvider>{children}</LoadingContextProvider>
}
