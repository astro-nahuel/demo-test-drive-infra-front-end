import LinkBtn from "@/components/atoms/LinkBtn"
import PasswordInput, {
  isPasswordValid,
} from "@/components/organisms/Auth/PasswordInput/PasswordInput"
import { useTranslate } from "@/hooks/useTranslate"
import { registerWithEmailAndPassword } from "@/libs/firebase"
import { isEmail } from "@/utils/regex"
import Button from "@mui/lab/LoadingButton"
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material"
import { useRouter } from "next/router"
import { useState } from "react"

const SignUp = () => {
  const [userToRegister, setUserToRegister] = useState({
    email: "",
    displayName: "",
  })
  const [password, setPassword] = useState({
    text: "",
  })
  const [rePassword, setRePassword] = useState({
    text: "",
  })
  const [terms, setTerms] = useState(false)
  const [passwordMatch, setPasswordMatch] = useState(true)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    rePassword: "",
    displayName: "",
    auth: "",
  })
  const { locale, t } = useTranslate()
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      setLoading(true)
      event.preventDefault()
      const { email, displayName } = userToRegister
      await registerWithEmailAndPassword(
        email.toLowerCase(),
        password.text,
        displayName,
        locale ?? "es"
      )
      setLoading(false)
      localStorage.setItem("terms", `${email}-${terms}-${Date.now()}`)
      router.replace("/verify-account", "/verify-account", {
        locale,
      })
    } catch (error: any) {
      console.log(error)
      setLoading(false)
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
          mt: 4,
        }}
      >
        Brand
        <Box component="form" onSubmit={handleSubmit} sx={{ my: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="displayName"
                label={t?.user.labels.name}
                name="displayName"
                onChange={(event) =>
                  setUserToRegister({
                    ...userToRegister,
                    displayName: event.target.value,
                  })
                }
                onBlur={(event) => {
                  if (event.target.value === "") {
                    setErrors({
                      ...errors,
                      displayName: t?.user.errors.name,
                    })
                  }
                }}
                error={errors.displayName !== ""}
                helperText={errors.displayName}
                onFocus={() =>
                  setErrors({
                    ...errors,
                    displayName: "",
                    auth: "",
                  })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label={t?.user.labels.email}
                name="email"
                autoComplete="off"
                onChange={(event) =>
                  setUserToRegister({
                    ...userToRegister,
                    email: event.target.value,
                  })
                }
                onBlur={() => {
                  if (isEmail(userToRegister.email)) {
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
                password={password.text}
                setPassword={(text: string) =>
                  setPassword((password) => ({
                    ...password,
                    text,
                  }))
                }
                label={t?.user.labels.password}
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
            </Grid>
            <Grid item xs={12}>
              <PasswordInput
                password={rePassword.text}
                setPassword={(text: string) =>
                  setRePassword((password) => ({
                    ...password,
                    text,
                  }))
                }
                label={t?.user.labels.rePassword}
                onBlur={() => {
                  if (!isPasswordValid(password.text))
                    setErrors({
                      ...errors,
                      rePassword: t?.user.errors.password,
                    })
                  else {
                    setErrors({
                      ...errors,
                      rePassword: "",
                    })
                    if (password.text !== rePassword.text) {
                      setPasswordMatch(false)
                    } else {
                      setPasswordMatch(true)
                    }
                  }
                }}
                error={errors.rePassword.length > 0 || errors.auth.length > 0}
                helperText={errors.rePassword || ""}
                onFocus={() =>
                  setErrors({
                    ...errors,
                    rePassword: "",
                    auth: "",
                  })
                }
              />
              <Box sx={{ py: 0.5 }} />
              {!passwordMatch && (
                <>
                  <Typography variant="caption" color="error">
                    {t?.user.errors.matchPasswords}
                  </Typography>
                  <br />
                  <br />
                </>
              )}
              {errors.auth.length > 0 && (
                <Typography variant="caption" color="error">
                  {errors.auth}
                </Typography>
              )}
              <Typography variant="body2">
                {t?.user.labels.formatPassword}
              </Typography>
              <Box />
              <br />
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={terms} />}
                  label={
                    <>
                      <Typography
                        variant="body2"
                        align="center"
                        gutterBottom
                        component="span"
                      >
                        {t?.user.signUp.terms[0]}{" "}
                      </Typography>
                      <a
                        style={{
                          fontWeight: 600,
                          fontSize: 14,
                        }}
                        href={"/terminos-y-condiciones"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t?.user.signUp.terms[1]}
                      </a>
                    </>
                  }
                  onChange={(event, checked) => setTerms(checked)}
                />
              </FormGroup>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            disabled={userToRegister.email === "" || !terms || !passwordMatch}
            size="large"
            loading={loading}
          >
            {t?.user.signUp.createAccount}
          </Button>
        </Box>
        <Typography variant="body1" gutterBottom>
          {t?.user.signUp.haveAccount}
        </Typography>
        <LinkBtn href="/signin-wp" color="inherit" size="large" locale={locale}>
          <Typography variant="button">{t?.user.signUp.signIn}</Typography>
        </LinkBtn>
      </Box>
    </Container>
  )
}

export default SignUp
