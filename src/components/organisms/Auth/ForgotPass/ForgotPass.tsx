import { TitleAndSubtitle } from "@/components/atoms/TitleAndSubtitle"
import SentLink from "@/components/molecules/SentLink"
import { useTranslate } from "@/hooks/useTranslate"
import { isEmail } from "@/utils/regex"
import { sendPasswordReset } from "@libs/firebase"
import Button from "@mui/lab/LoadingButton"
import { Box, Container, TextField, Typography } from "@mui/material"
import { useState } from "react"

const ForgotPass = () => {
  const [email, setEmail] = useState("")
  const [senderBtnPressed, setSenderBtnPressed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [disabledBtn, setDisabledBtn] = useState(false)
  const [errors, setErrors] = useState({
    email: "",
    auth: "",
    sender: "",
  })
  const { t } = useTranslate()
  const handleSendEmail = async () => {
    try {
      await sendPasswordReset(email)
      setDisabledBtn(true)
    } catch (error: any) {
      console.error(error)
      console.error(error)
      setErrors({
        ...errors,
        sender: t?.user.forgotPassword.dontSentEmail,
      })
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      setLoading(true)
      event.preventDefault()
      await sendPasswordReset(email)
      setLoading(false)
      setSenderBtnPressed(true)
    } catch (error: any) {
      console.error(error)
      setLoading(false)
      setErrors({
        ...errors,
        auth: t?.user.errors.auth,
      })
    }
  }

  return (
    <>
      <Container component="main">
        {!senderBtnPressed ? (
          <Box
            sx={{
              marginTop: 18,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            Brand
            <TitleAndSubtitle
              title={t?.user.recoveryPassword.title}
              subtitle={t?.user.recoveryPassword.subtitle}
            />
            <Box component="form" onSubmit={handleSubmit} sx={{ my: 3 }}>
              <TextField
                required
                fullWidth
                id="email"
                label={t?.user.recoveryPassword.labels.email}
                name="email"
                autoComplete="email"
                onChange={(event) => setEmail(event.target.value)}
                onBlur={() => {
                  if (isEmail(email)) {
                    setErrors({ ...errors, email: "" })
                  } else {
                    setErrors({
                      ...errors,
                      email: t?.user.recoveryPassword.errors.email,
                    })
                  }
                }}
                error={errors.email.length > 0}
                helperText={errors.email || ""}
                onFocus={() =>
                  setErrors({
                    ...errors,
                    email: "",
                    auth: "",
                  })
                }
              />
              <Button
                type="submit"
                fullWidth
                disabled={
                  email.length === 0 ||
                  (email.length > 0 && !isEmail(email)) ||
                  loading
                }
                size="large"
                loading={loading}
              >
                {t?.user.recoveryPassword.buttons.send}
              </Button>
              {errors.auth.length > 0 && (
                <Typography variant="caption" color="error">
                  {errors.auth}
                </Typography>
              )}
              {errors.sender.length > 0 && (
                <Typography variant="caption" color="error">
                  {errors.sender}
                </Typography>
              )}
            </Box>
          </Box>
        ) : (
          <SentLink
            handleSendEmail={handleSendEmail}
            title={t?.user.recoveryPassword.sentEmail.title}
            subtitle={t?.user.recoveryPassword.sentEmail.subtitle}
            disabledBtn={disabledBtn}
          />
        )}
      </Container>
    </>
  )
}

export default ForgotPass
