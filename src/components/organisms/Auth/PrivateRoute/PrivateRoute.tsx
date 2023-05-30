import { useTranslate } from "@/hooks/useTranslate"
import { AuthContext } from "@context/AuthContext"
import { Container } from "@mui/material"
import { useRouter } from "next/router"
import { FC, useContext } from "react"

interface IProps {
  children: React.ReactNode
  redirectTo?: string
}
const PrivateRoute: FC<IProps> = (props) => {
  const { children, redirectTo } = props
  const { currentUser } = useContext(AuthContext)
  const router = useRouter()
  const { previous } = router.query
  const { locale } = useTranslate()

  if (currentUser) {
    return (
      <Container disableGutters sx={{ py: 8 }}>
        {children}
      </Container>
    )
  } else {
    router.push(
      redirectTo ?? `/signin${previous ? "?previous=landing" : ""}`,
      redirectTo ?? `/signin${previous ? "?previous=landing" : ""}`,
      {
        locale,
      }
    )
    return <></>
  }
}

export default PrivateRoute
