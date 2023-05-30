import { IAuthUser } from "@/interfaces/user"
import { auth } from "@/libs/firebase"
import { setCookie } from "@/utils/cookies"
import { Backdrop, CircularProgress } from "@mui/material"
import { onAuthStateChanged } from "firebase/auth"
import React, { ReactNode, useEffect, useState } from "react"

export const AuthContext = React.createContext({
  currentUser: {} as IAuthUser | undefined,
  loading: true,
  error: null,
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<IAuthUser | undefined>(
    undefined
  )
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(loading)

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.emailVerified) {
        const formattedUser = {
          id: user.uid,
          providerId: user.providerData[0].providerId,
          displayName: user.displayName || "",
          email: user.email || "",
          photoURL: user.photoURL || "",
        }
        setCookie("userInSession", user.email ?? "")
        setCurrentUser(formattedUser)
      } else {
        setCurrentUser(undefined)
      }
      setLoading(false)
    })

    return unsuscribe
  }, [])

  if (loading) {
    return (
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme: any) => theme.zIndex.drawer + 1,
        }}
        open={open}
        onClick={() => setOpen(false)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    )
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        loading,
        error: null,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
