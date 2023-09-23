"use client"
import { createContext, useCallback, useRef, useState } from "react"

type ObserverFunc = (ref: Element) => void | undefined

interface IObserverContext {
  mountObserver: () => boolean
  register?: ObserverFunc
  unsubscribe?: ObserverFunc
  currentSection: string
}

export const ObserverContext = createContext<IObserverContext>({
  mountObserver: () => false,
  currentSection: "",
})

export const ObserverContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentSection, setCurrentSection] = useState("")

  const observerRef = useRef<IntersectionObserver>()

  const mountObserver = useCallback(() => {
    console.log("mounting IntersectionObserver...")

    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          // debug
          // console.log(`${entry.target.id}: ${entry.intersectionRect.top}`)
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
      console.log(`registering: ${ref.id}`)
      observerRef.current.observe(ref)
    }
  }, [])

  const unsubscribeToObserver = useCallback<ObserverFunc>((ref) => {
    if (ref && observerRef.current) {
      console.log(`unobserving: ${ref.id}`)
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
