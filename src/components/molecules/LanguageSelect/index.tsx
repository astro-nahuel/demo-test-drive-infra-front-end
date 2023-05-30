import { AuthContext } from "@/context/AuthContext"
import { useTranslate } from "@/hooks/useTranslate"
import {
  Box,
  CircularProgress,
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  RadioProps,
  Typography,
} from "@mui/material"
import { useRouter } from "next/router"
import React, { useContext } from "react"

function StyledRadio(props: RadioProps) {
  return <Radio disableRipple color="primary" {...props} />
}

const LanguageSelect = () => {
  const { t, locale } = useTranslate()
  const { currentUser: user } = useContext(AuthContext)
  const router = useRouter()

  if (!user) {
    return <>if you read this line, somthing went wrong and we are f assholes</>
  }

  if (!locale) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    )
  }

  const handleRadioChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const lang = (event.target as HTMLInputElement).value
    if (lang === "es" || lang === "en") {
      localStorage.setItem("locale", lang)
    }
    router.push(router.asPath, router.asPath, { locale: lang })
  }

  return (
    <Container style={{ width: "100%" }}>
      <Box style={{ width: "100%" }}>
        <FormControl style={{ width: "100%" }} component="fieldset">
          <RadioGroup
            aria-label="gender"
            value={locale || "es"}
            onChange={handleRadioChange}
            name="customized-radios"
          >
            <FormControlLabel
              value="es"
              control={<StyledRadio />}
              label={
                <Typography style={{ fontWeight: 600 }}>
                  {t?.settings.spanish}
                </Typography>
              }
            />
            <div
              style={{
                marginTop: "16px",
                marginBottom: "16px",
                borderBottom: "solid 1px #e0e0e0",
              }}
            ></div>
            <FormControlLabel
              value="en"
              control={<StyledRadio />}
              label={
                <Typography style={{ fontWeight: 600 }}>
                  {t?.settings.english}
                </Typography>
              }
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </Container>
  )
}

export default LanguageSelect
