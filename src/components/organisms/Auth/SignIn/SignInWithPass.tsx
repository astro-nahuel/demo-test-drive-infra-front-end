import LinkBtn from "@/components/atoms/LinkBtn"
import PasswordInput, {
  isPasswordValid,
} from "@/components/organisms/Auth/PasswordInput/PasswordInput"
import { RouteContext } from "@/context/RouteContext"
import { useTranslate } from "@/hooks/useTranslate"
import { logInWithEmailAndPassword } from '@/libs/firebase"'
import { isEmail } from "@/utils/regex"
import Button from "@mui/lab/LoadingButton"
import { Box, Container, Grid, TextField, Typography } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
import { useContext, useState } from "react"

const SignInWithPass = () => {
  const [userToLogin, setUserToLogin] = useState({
    email: "",
  })
  const [password, setPassword] = useState({
    text: "",
  })
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    auth: "",
  })
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const { previousRoute } = useContext(RouteContext)
  const { locale, t } = useTranslate()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      setLoading(true)
      event.preventDefault()
      const { email } = userToLogin
      await logInWithEmailAndPassword(email, password.text)
      setLoading(false)

      router.push(previousRoute, previousRoute, { locale })
    } catch (error: any) {
      setLoading(false)
      console.error(error)
      setErrors({
        ...errors,
        auth: t?.user.errors.auth,
      })
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
        }}
      >
        <Box component="form" onSubmit={handleSubmit} sx={{ my: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label={t?.user.labels.email}
                name="email"
                autoComplete="off"
                onChange={(event) =>
                  setUserToLogin({
                    ...userToLogin,
                    email: event.target.value,
                  })
                }
                onBlur={() => {
                  if (isEmail(userToLogin.email)) {
                    setErrors({ ...errors, email: "" })
                  } else {
                    setErrors({
                      ...errors,
                      email: t?.user.errors.email,
                    })
                  }
                }}
                error={errors.email.length > 0 || errors.auth.length > 0}
                helperText={errors.email || ""}
                onFocus={() =>
                  setErrors({
                    ...errors,
                    email: "",
                    auth: "",
                  })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <PasswordInput
                label={t?.user.labels.password}
                password={password.text}
                setPassword={(text: string) =>
                  setPassword((password) => ({
                    ...password,
                    text,
                  }))
                }
                onBlur={() => {
                  if (!isPasswordValid(password.text))
                    setErrors({
                      ...errors,
                      password: t?.user.errors.password,
                    })
                  else
                    setErrors({
                      ...errors,
                      password: "",
                    })
                }}
                error={errors.password.length > 0 || errors.auth.length > 0}
                helperText={errors.password || ""}
                onFocus={() =>
                  setErrors({
                    ...errors,
                    password: "",
                    auth: "",
                  })
                }
              />

              {errors.auth.length > 0 && (
                <Typography variant="caption" color="error">
                  {errors.auth}
                </Typography>
              )}
              <br />
              <br />

              <Link href="/forgot-pass" locale={locale}>
                <a>{t?.user.forgotPassword.title}</a>
              </Link>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            disabled={
              !isEmail(userToLogin.email) || !isPasswordValid(password.text)
            }
            size="large"
            loading={loading}
          >
            {t?.components.btnEnter}
          </Button>
        </Box>
        <Typography variant="body1" gutterBottom>
          {t?.user.signIn.firstTimeHere}
        </Typography>
        <LinkBtn href="/signup" color="inherit" size="large" locale={locale}>
          <Typography variant="button">
            {t?.user.signUp.createAccount}
          </Typography>
        </LinkBtn>
      </Box>
    </Container>
  )
}

export default SignInWithPass
