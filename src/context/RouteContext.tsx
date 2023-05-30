import usePreviousRoute from "@/hooks/usePreviousRoute"
import React, { FC } from "react"

export const RouteContext = React.createContext({
  previousRoute: "",
})

export const RouteProvider: FC = ({ children }) => {
  const previousRoute = usePreviousRoute()

  return (
    <RouteContext.Provider
      value={{
        previousRoute,
      }}
    >
      {children}
    </RouteContext.Provider>
  )
}
