import DialogCustom from "@/components/atoms/DialogCustom"
import OptionButtonProfile from "@/components/atoms/OptionButtonProfile"
import PrivateRoute from "@/components/organisms/Auth/PrivateRoute/PrivateRoute"
import { AuthContext } from "@/context/AuthContext"
import { useTranslate } from "@/hooks/useTranslate"
import { logout } from '@/libs/firebase"'
import { stringAvatar } from "@/utils/style"
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined"
import FeedbackIcon from "@mui/icons-material/Feedback"
import LanguageIcon from "@mui/icons-material/Language"
import { Avatar, Box, Container, Divider, Typography } from "@mui/material"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useContext, useState } from "react"

const ProfileUserPage: NextPage = () => {
  const { t } = useTranslate()
  const { currentUser } = useContext(AuthContext)
  const [sessionDialog, setSessionDialog] = useState<boolean>(false)
  const { push, locale } = useRouter()

  const handleSession = async () => logout()

  return (
    <PrivateRoute>
      <Container component="main">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: 4,
          }}
        >
          {currentUser &&
          currentUser.photoURL &&
          currentUser.photoURL?.length > 0 ? (
            <Avatar
              src={currentUser.photoURL}
              sx={{ width: "120px", height: "120px" }}
            />
          ) : (
            <Avatar
              sx={{
                width: "120px",
                height: "120px",
                fontSize: 36,
              }}
            >
              {stringAvatar(currentUser?.displayName)}
            </Avatar>
          )}
          <Typography
            sx={{
              marginTop: "16px",
              marginBottom: "56px",
              fontStyle: "normal",
              fontSize: "20px",
              lineHeight: "30px",
              fontWeight: 600,
              color: "#303030",
            }}
          >
            {currentUser?.displayName}
          </Typography>
          <Divider
            variant="fullWidth"
            sx={{
              backgroundColor: "#e0e0e0",
              width: "100%",
            }}
          />

          <OptionButtonProfile
            title={t?.settings.applicationLanguage}
            Icon={<LanguageIcon />}
            click={() =>
              push("/user/language", "/user/language", {
                locale,
              })
            }
          />
          <Divider
            variant="fullWidth"
            sx={{
              backgroundColor: "#e0e0e0",
              width: "100%",
            }}
          />
          <OptionButtonProfile
            title={t?.settings.giveFeedback}
            Icon={<FeedbackIcon />}
            click={() => console.log("click")}
          />
          <Divider
            variant="fullWidth"
            sx={{
              backgroundColor: "#e0e0e0",
              width: "100%",
            }}
          />
          <OptionButtonProfile
            title={t?.settings.logOut}
            Icon={<ExitToAppOutlinedIcon />}
            click={() => setSessionDialog(!sessionDialog)}
          />
          <Divider
            variant="fullWidth"
            sx={{
              backgroundColor: "#e0e0e0",
              width: "100%",
            }}
          />
        </Box>
        <DialogCustom
          open={sessionDialog}
          labelAcceptBtn={t?.settings.exit}
          labelCancelBtn={t?.settings.cancel}
          handleClose={() => setSessionDialog(false)}
          handleSubmit={() => handleSession()}
          withButtons
        >
          <Typography>{t?.settings.areYouSure}</Typography>
        </DialogCustom>
      </Container>
    </PrivateRoute>
  )
}

export default ProfileUserPage
