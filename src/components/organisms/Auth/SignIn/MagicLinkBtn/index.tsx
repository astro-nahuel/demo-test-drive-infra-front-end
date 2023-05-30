import { RouteContext } from "@/context/RouteContext"
import { useTranslate } from "@/hooks/useTranslate"
import { Button, Typography } from "@mui/material"
import { getAuth, sendSignInLinkToEmail, signOut } from "firebase/auth"
import { useRouter } from "next/router"
import { useSnackbar } from "notistack"
import { useContext } from "react"

const MagicLinkBtn = (props: { email: string }) => {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const { previousRoute } = useContext(RouteContext)
  const { locale, t } = useTranslate()

  const loginHandler = async () => {
    try {
      const auth = getAuth()
      await signOut(auth)
      const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: "http://localhost:3001/loginMagicLink",
        // This must be true.
        handleCodeInApp: true,
      }
      console.log(props.email)
      window.localStorage.setItem("emailForSignIn", props.email)
      const response = await sendSignInLinkToEmail(
        auth,
        props.email,
        actionCodeSettings
      )
      console.log(response)
    } catch (error: any) {
      console.log(error)
      enqueueSnackbar(t?.component.errorMessageGlobal, {
        variant: "error",
      })
    }
  }
  console.log(props.email)
  return (
    <Button
      onClick={loginHandler}
      sx={{
        backgroundColor: "#000",
        width: "90%",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        borderRadius: 2,
        "&:active": {
          backgroundColor: "#000fff",
        },
        "&:hover": {
          backgroundColor: "#000",
        },
      }}
      size="large"
    >
      <Typography
        variant="subtitle2"
        sx={{ color: "#fff", fontSize: 14, fontWeight: 600 }}
      >
        SIGN IN WITH MAGIC LINK
      </Typography>
    </Button>
  )
}

export default MagicLinkBtn
