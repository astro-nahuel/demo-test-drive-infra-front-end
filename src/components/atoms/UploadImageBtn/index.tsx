import { useTranslate } from "@/hooks/useTranslate"
import { truncateText } from "@/utils/style"
import { storage } from "@libs/firebase"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import ImageIcon from "@mui/icons-material/Image"
import { Button, CircularProgress, Grid, IconButton } from "@mui/material"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { useSnackbar } from "notistack"
import { useState } from "react"

export default function UploadImageBtn(props: any) {
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState<{ name: string; url: string } | null>(null)
  const { handleValue } = props
  const { enqueueSnackbar } = useSnackbar()
  const { t } = useTranslate()

  const uploadFiles = (file: any) => {
    //
    if (!file) return
    const sotrageRef = ref(storage, `files/${file.name}`)
    const uploadTask = uploadBytesResumable(sotrageRef, file)
    setLoading(true)
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          if (downloadURL) {
            setImage({ name: file.name, url: downloadURL })
            handleValue({
              target: { name: "image", value: downloadURL },
            })

            setLoading(false)
          }
        })
      }
    )
  }

  const hadleChangeInput = async (file: File) => {
    // not allow files type other than image
    if (file.type.indexOf("image") === -1) {
      enqueueSnackbar(t?.components.imageUpload.errorMessage, {
        variant: "error",
      })
      return
    }
    await uploadFiles(file)
  }
  return (
    <>
      {image && (
        <img
          src={image.url}
          alt={image.name}
          style={{ width: "100%", borderRadius: 4 }}
        />
      )}
      <Grid container spacing={1} justifyContent="space-between">
        <Grid item xs={10}>
          <Button
            startIcon={
              loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                <ImageIcon />
              )
            }
            component="label"
            color="inherit"
            sx={{ mb: 3 }}
          >
            {image
              ? truncateText(image.name, 15)
              : t?.components.imageUpload.labels.upload}
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={async (e) =>
                e.target.files
                  ? await hadleChangeInput(e.target.files[0])
                  : null
              }
            />
          </Button>
        </Grid>
        <Grid item xs={2}>
          {image && (
            <IconButton
              onClick={() => {
                setImage(null)
              }}
              color="error"
              sx={{ mb: 3 }}
            >
              <DeleteForeverIcon />
            </IconButton>
          )}
        </Grid>
      </Grid>
    </>
  )
}
