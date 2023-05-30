import { RouteContext } from "@/context/RouteContext"
import { useTranslate } from "@/hooks/useTranslate"
import { signInWithGoogle } from "@/libs/firebase"
import { Button, Typography } from "@mui/material"
import { useRouter } from "next/router"
import { useSnackbar } from "notistack"
import { useContext } from "react"
import { GoogleIcon } from "./GoogleIcon"

const GoogleBtn = () => {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const { previousRoute } = useContext(RouteContext)
  const { locale, t } = useTranslate()

  const loginHandler = async () => {
    try {
      const result = await signInWithGoogle()
      if (result.user) {
        console.log(result.user)
        router.push(previousRoute, previousRoute, { locale })
      }
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
      startIcon={<GoogleIcon />}
    >
      <Typography
        variant="subtitle2"
        sx={{ color: "#fff", fontSize: 14, fontWeight: 600 }}
      >
        {t?.components.btnContinueGoogle}
      </Typography>
    </Button>
  )
}

export default GoogleBtn
