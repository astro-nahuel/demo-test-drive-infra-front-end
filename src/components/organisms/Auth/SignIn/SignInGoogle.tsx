import LinkBtn from "@/components/atoms/LinkBtn"
import GoogleBtn from "@/components/organisms/Auth/SignIn/GoogleBtn"
import { useTranslate } from "@/hooks/useTranslate"
import { Typography } from "@mui/material"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"

const SignInGoogle = () => {
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
        <GoogleBtn />
        <Box sx={{ margin: "1.5rem", textAlign: "center" }}>
          <Typography
            variant="body1"
            align="center"
            gutterBottom
            component="span"
          >
            {t?.user.signInGoogle.terms[0]}{" "}
          </Typography>
          <a
            style={{ fontWeight: 600 }}
            href={"/terminos-y-condiciones"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t?.user.signInGoogle.terms[1]}
          </a>
        </Box>
        <Box sx={{ margin: "1.5rem", textAlign: "center" }}>
          <LinkBtn href="/signin-wp" color="inherit" locale={locale}>
            <Typography variant="button">
              {t?.components.btnContinueEmail}
            </Typography>
          </LinkBtn>
        </Box>
      </Box>
    </Container>
  )
}

export default SignInGoogle
