import CheckIcon from "@/components/atoms/icons/Check"
import { TitleAndSubtitle } from "@/components/atoms/TitleAndSubtitle"
import { useTranslate } from "@/hooks/useTranslate"
import { Box, Button, Container } from "@mui/material"
import { useRouter } from "next/router"

const PassRefreshed = () => {
  const { locale, t } = useTranslate()
  const router = useRouter()
  return (
    <>
      <Container component="main">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 68px)",
            p: 2,
          }}
        >
          <CheckIcon />
          <TitleAndSubtitle
            title={t?.user.passRefreshed.title}
            subtitle={t?.user.passRefreshed.subtitle}
          />
          <Button
            fullWidth
            onClick={() => router.push("/signin", "/signin", { locale })}
          >
            {t?.components.btnEnter}
          </Button>
        </Box>
      </Container>
    </>
  )
}
export default PassRefreshed
