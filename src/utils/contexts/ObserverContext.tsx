"use client"
import { createContext, useCallback, useMemo, useState } from "react"

export const ObserverContext = createContext({
  registerToObserver: (ref: Element | null) => {
    ref
  },
  unsubscribeToObserver: (ref: Element | null) => {
    ref
  },
  currentSection: "",
})

export const ObserverContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentSection, setCurrentSection] = useState("")

  const observer = useMemo(
    () =>
      new IntersectionObserver(
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
      ),
    [],
  )

  const registerToObserver = useCallback(
    (ref: Element | null) => {
      if (ref) {
        observer.observe(ref)
      }
    },
    [observer],
  )

  const unsubscribeToObserver = useCallback(
    (ref: Element | null) => {
      if (ref) {
        observer.unobserve(ref)
        setCurrentSection("")
      }
    },
    [observer],
  )

  return (
    <ObserverContext.Provider value={{ registerToObserver, unsubscribeToObserver, currentSection }}>
      {children}
    </ObserverContext.Provider>
  )
}
