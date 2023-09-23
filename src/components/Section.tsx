"use client"
import { ObserverContext } from "@/utils/contexts/ObserverContext"
import { useContext, useEffect, useRef } from "react"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
}

const Section = ({ title, children, id, ...props }: Props) => {
  const ref = useRef(null)

  const { register, unsubscribe } = useContext(ObserverContext)

  useEffect(() => {
    if (ref.current) {
      const current = ref.current

      if (register) {
        register(current)
      }
      return () => {
        if (unsubscribe) {
          unsubscribe(current)
        }
      }
    }
  }, [ref, register, unsubscribe])

  return (
    <section {...props}>
      {title && (
        <h3
          ref={ref}
          id={id}
          className="mb-3 border-b-[3px] text-2xl font-bold leading-normal tracking-tighter sm:text-[34px]"
        >
          {title}
        </h3>
      )}
      {children}
    </section>
  )
}

export default Section
