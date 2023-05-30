import LanguageSelect from "@/components/molecules/LanguageSelect"
import PrivateRoute from "@/components/organisms/Auth/PrivateRoute/PrivateRoute"
import { Box, Container } from "@mui/material"
import { NextPage } from "next"

const LanguagePage: NextPage = () => {
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
          <LanguageSelect />
        </Box>
      </Container>
    </PrivateRoute>
  )
}

export default LanguagePage
