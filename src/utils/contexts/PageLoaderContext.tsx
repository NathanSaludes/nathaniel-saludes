"use client"
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from "react"

export type TLoader = {
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
}

export const LoaderContext = createContext<TLoader>({ loading: false, setLoading: () => false })

export const LoadingContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState(false)
  return <LoaderContext.Provider value={{ loading, setLoading }}>{children}</LoaderContext.Provider>
}
