"use client"
import { createContext, useCallback, useContext, useRef, useState } from "react"

type ObserverFunc = (ref: Element) => void

interface IObserverContext {
  mountObserver: () => boolean
  register: ObserverFunc
  unsubscribe: ObserverFunc
  currentSection: string
}

// initialize context
export const ObserverContext = createContext<IObserverContext>({
  mountObserver: () => false,
  register: () => {},
  unsubscribe: () => {},
  currentSection: "",
})

// create observer provider wrapper
export const ObserverProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentSection, setCurrentSection] = useState("")

  const observerRef = useRef<IntersectionObserver>()

  const mountObserver = useCallback(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id)
          }
        },
        {
          rootMargin: "0px -200px -200px 0px", // trigger if element is visible within the viewport plus a 200px margin
          threshold: 0.5, // trigger if 50% of the element is visible within the (viewport + 200px margin) range
        },
      )

      return true
    }

    return false
  }, [observerRef])

  const registerToObserver = useCallback<ObserverFunc>((ref) => {
    if (ref && observerRef.current) {
      observerRef.current.observe(ref)
    }
  }, [])

  const unsubscribeToObserver = useCallback<ObserverFunc>((ref) => {
    if (ref && observerRef.current) {
      observerRef.current.unobserve(ref)
      setCurrentSection("")
    }
  }, [])

  return (
    <ObserverContext.Provider
      value={{ mountObserver, register: registerToObserver, unsubscribe: unsubscribeToObserver, currentSection }}
    >
      {children}
    </ObserverContext.Provider>
  )
}

// create observer hook
export const useObserver = () => {
  const observerContext = useContext(ObserverContext)

  if (!observerContext) {
    throw new Error(
      `'useObserver' hook should only be used in components that are wrapped inside the 'ObserverProvider'`,
    )
  }

  return observerContext
}
