import Layout from "@/components/organisms/layout"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import type { NextPage } from "next"

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h1" gutterBottom>
            MUI v5 + Next.js with TypeScript example
          </Typography>
          <Typography variant="body1" gutterBottom>
            with Firebase Authentication
          </Typography>
          <Typography variant="body2" gutterBottom>
            NOVOLABS
          </Typography>
        </Box>
      </Container>
    </Layout>
  )
}

export default HomePage
