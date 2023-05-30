import { RouteContext } from "@/context/RouteContext"
import { useTranslate } from "@/hooks/useTranslate"
import { Button, Typography } from "@mui/material"
import { getAuth, OAuthProvider, signInWithPopup } from "firebase/auth"
import { useRouter } from "next/router"
import { useSnackbar } from "notistack"
import { useContext } from "react"

const MicrosoftBtn = () => {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const { previousRoute } = useContext(RouteContext)
  const { locale, t } = useTranslate()

  const loginHandler = async () => {
    try {
      const provider = new OAuthProvider("microsoft.com")
      const auth = getAuth()
      const response = await signInWithPopup(auth, provider)
      console.log(response)
    } catch (error: any) {
      console.log(error)
      enqueueSnackbar(t?.component.errorMessageGlobal, {
        variant: "error",
      })
    }
  }

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
        SIGN IN WITH MICROSOFT
      </Typography>
    </Button>
  )
}

export default MicrosoftBtn
