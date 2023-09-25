"use client"
import { useObserver } from "@/utils/contexts/ObserverContext"
import { useEffect, useRef } from "react"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
}

const Section = ({ title, children, id, ...props }: Props) => {
  const ref = useRef(null)

  const { register, unsubscribe } = useObserver()

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
          className="mb-3 border-b-[3px] border-b-black/10 text-2xl font-bold leading-normal tracking-tighter dark:border-b-white/10 sm:text-[34px]"
        >
          {title}
        </h3>
      )}
      {children}
    </section>
  )
}

export default Section
