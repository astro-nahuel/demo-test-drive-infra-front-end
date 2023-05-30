import { useTranslate } from "@/hooks/useTranslate"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import MicrosoftBtn from "./MicrosoftBtn"

const SignInMicrosoft = () => {
  const { locale, t } = useTranslate()

  return (
    <Container disableGutters>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MicrosoftBtn />
      </Box>
    </Container>
  )
}

export default SignInMicrosoft
