import { useTranslate } from "@/hooks/useTranslate"
import { shareContent } from "@/utils/share"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import ShareIcon from "@mui/icons-material/Share"
import { Box, Button, Grid, Switch, Typography } from "@mui/material"
import { useSnackbar } from "notistack"
import { useState } from "react"

interface IProps {
  url: string
}
export default function Share(props: IProps) {
  const { url } = props
  const allowShare = "share" in (window as any).navigator
  const [checked, setChecked] = useState(false)
  const { enqueueSnackbar } = useSnackbar()
  const { t } = useTranslate()

  const handleShare = async () => {
    const content: any = {
      url,
      text: t?.components.share.content.text,
    }

    await shareContent(
      content,
      () => {},
      (error: string) => {
        console.log(error)
        enqueueSnackbar(t?.components.share.errorMessage, {
          variant: "error",
        })
      }
    )
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(url)
    enqueueSnackbar(t?.components.share.linkCopied, {
      variant: "success",
      autoHideDuration: 2000,
    })
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Typography variant="caption" color="text.secondary">
            {t?.components.share.title}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
            sx={{
              //not checked color
              "&$checked": {
                color: "error.main",
                "& + $track": {
                  backgroundColor: "error.main",
                },
              },
            }}
          />
        </Grid>
      </Grid>
      <Box sx={{ pt: 2, display: "flex", justifyContent: "space-between" }}>
        <Button
          startIcon={<ContentCopyIcon />}
          color="inherit"
          disabled={!checked}
          onClick={handleCopyUrl}
        >
          {t?.components.share.actions[0]}
        </Button>
        {allowShare && (
          <Button
            startIcon={<ShareIcon />}
            color="inherit"
            disabled={!checked}
            onClick={handleShare}
          >
            {t?.components.share.actions[1]}
          </Button>
        )}
      </Box>
    </>
  )
}
