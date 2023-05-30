import { useTranslate } from "@/hooks/useTranslate"
import { AuthContext } from "@context/AuthContext"
import { Container } from "@mui/material"
import { useRouter } from "next/router"
import { FC, useContext } from "react"

interface IProps {
  children: React.ReactNode
}
const GuestRoute: FC<IProps> = (props) => {
  const { children } = props
  const { currentUser } = useContext(AuthContext)
  const router = useRouter()
  const { locale } = useTranslate()

  if (currentUser) {
    router.replace("/", "/", { locale })
    return <></>
  } else {
    return (
      <Container disableGutters sx={{ py: 8 }}>
        {children}
      </Container>
    )
  }
}

export default GuestRoute
