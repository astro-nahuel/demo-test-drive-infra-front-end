import { RouteContext } from "@/context/RouteContext"
import { useTranslate } from "@/hooks/useTranslate"
import { isEmail } from "@/utils/regex"
import { Box, Container, Grid, TextField } from "@mui/material"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import MagicLinkBtn from "./MagicLinkBtn"

const SignInWithPass = () => {
  const [userToLogin, setUserToLogin] = useState({
    email: "",
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
    // try {
    //    setLoading(true)
    //    event.preventDefault()
    //    const { email } = userToLogin
    //    await logInWithEmailAndPassword(email, password.text)
    //    setLoading(false)
    //    router.push(previousRoute, previousRoute, { locale })
    // } catch (error: any) {
    //    setLoading(false)
    //    console.error(error)
    //    setErrors({
    //       ...errors,
    //       auth: t?.user.errors.auth,
    //    })
    // }
  }
  useEffect(() => {
    console.log(userToLogin)
  }, [userToLogin])

  return (
    <Container component="main">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box component="form" onSubmit={handleSubmit} sx={{ my: 3 }}>
          <Grid container spacing={2} style={{ width: "100%" }}>
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
          </Grid>
          <MagicLinkBtn email={userToLogin.email} />
        </Box>
      </Box>
    </Container>
  )
}

export default SignInWithPass
