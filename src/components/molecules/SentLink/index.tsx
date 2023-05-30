import Envelop from "@/components/atoms/icons/Envelop"
import { TitleAndSubtitle } from "@/components/atoms/TitleAndSubtitle"
import { useTranslate } from "@/hooks/useTranslate"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { FC } from "react"

interface IProps {
  handleSendEmail: () => void
  title: string
  subtitle: string
  disabledBtn: boolean
}

const SentLink: FC<IProps> = (props) => {
  const { handleSendEmail, title, subtitle, disabledBtn } = props
  const { t } = useTranslate()

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 68px)",
      }}
    >
      <Envelop />
      <TitleAndSubtitle title={title} subtitle={subtitle} />
      <Box sx={{ margin: "1.5rem", textAlign: "center" }}>
        <Typography variant="body1" align="center" gutterBottom>
          {t?.user.verifyAccount.sentLink.label}
        </Typography>
        <Button
          color="inherit"
          onClick={handleSendEmail}
          disabled={disabledBtn}
        >
          {t?.user.verifyAccount.sentLink.button}
        </Button>
      </Box>
      {disabledBtn && (
        <Typography variant="caption" paragraph align="center">
          {t?.user.verifyAccount.sentLink.messageWait}
        </Typography>
      )}
    </Box>
  )
}

export default SentLink
