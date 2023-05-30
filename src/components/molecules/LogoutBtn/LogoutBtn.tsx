import { logout } from "@/libs/firebase"
import Button from "@mui/material/Button"

const LogOutBtn = () => {
  return <Button onClick={logout}>LogOut</Button>
}

export default LogOutBtn
