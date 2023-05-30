import SentLink from "@/components/molecules/SentLink"
import { useTranslate } from "@/hooks/useTranslate"
import { getCurrentUser, sendEmailToVerifyAccount } from '@/libs/firebase"'
import Container from "@mui/material/Container"
import { useSnackbar } from "notistack"
import { useState } from "react"

const VerifiedAccount = () => {
  const [disabledBtn, setDisabledBtn] = useState(false)
  const { enqueueSnackbar } = useSnackbar()
  const { t, locale } = useTranslate()

  const handleSendEmail = async () => {
    try {
      const currentUser = await getCurrentUser()
      if (currentUser) {
        await sendEmailToVerifyAccount(currentUser, locale ?? "es")
      }
      setDisabledBtn(true)
    } catch (error: any) {
      console.error(error)
      enqueueSnackbar(error.message, { variant: "error" })
    }
  }

  return (
    <Container disableGutters>
      <SentLink
        handleSendEmail={handleSendEmail}
        title={t?.user.verifyAccount.title}
        subtitle={t?.user.verifyAccount.subtitle}
        disabledBtn={disabledBtn}
      />
    </Container>
  )
}

export default VerifiedAccount
