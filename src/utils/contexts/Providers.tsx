import { ObserverProvider } from "./ObserverContext"

type Props = {
  children?: React.ReactNode
}
export const GlobalContextProvider = ({ children }: Props) => {
  return <ObserverProvider>{children}</ObserverProvider>
}
