import { TitleAndSubtitle } from "@/components/atoms/TitleAndSubtitle"
import { useTranslate } from "@/hooks/useTranslate"
import { destroyCookie } from "@/utils/cookies"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import Button from "@mui/lab/LoadingButton"
import { Box, Container } from "@mui/material"
import { useRouter } from "next/router"

const EmailVerified = () => {
  const router = useRouter()
  const { t, locale } = useTranslate()

  const handleRoute = () => {
    const prevRoute = router.query.prevRoute as string
    if (!prevRoute || prevRoute === "undefined") {
      router.push("/", "/", { locale })
      destroyCookie("prevRoute")
    } else {
      router.push(prevRoute, prevRoute, { locale })
    }
  }

  return (
    <Container component="main">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: 2,
          py: 4,
          mt: 16,
        }}
      >
        <CheckCircleOutlineIcon color="success" sx={{ mb: 1, fontSize: 74 }} />
        <TitleAndSubtitle title={t?.user.emailVerified.title} subtitle="" />
        <Button fullWidth onClick={handleRoute}>
          {t?.components.btnContinueFree}
        </Button>
      </Box>
    </Container>
  )
}
export default EmailVerified
