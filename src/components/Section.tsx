"use client"
import { ObserverContext } from "@/utils/contexts/ObserverContext"
import { useContext, useEffect, useRef } from "react"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
}

const Section = ({ title, children, id, ...props }: Props) => {
  const ref = useRef(null)

  const { registerToObserver, unsubscribeToObserver } = useContext(ObserverContext)

  useEffect(() => {
    const current = ref.current
    registerToObserver(current)

    return () => {
      unsubscribeToObserver(current)
    }
  }, [ref, registerToObserver, unsubscribeToObserver])

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
      <div className="section-content leading-[180%]">{children}</div>
    </section>
  )
}

export default Section
