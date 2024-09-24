import { Suspense } from "react"

const SuspenseComponent = ({children}) => {
  return (
    <Suspense fallback={<p>Loadng...</p>}>
        {children}
    </Suspense>
  )
}

export {SuspenseComponent}