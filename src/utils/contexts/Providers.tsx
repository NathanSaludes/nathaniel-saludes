import { ObserverContextProvider } from "./ObserverContext"

type Props = {
  children?: React.ReactNode
}
export const GlobalContextProvider = ({ children }: Props) => {
  return <ObserverContextProvider>{children}</ObserverContextProvider>
}
