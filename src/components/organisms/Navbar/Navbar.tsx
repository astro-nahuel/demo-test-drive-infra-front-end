import LogOutBtn from "@/components/molecules/LogoutBtn/LogoutBtn"
import { AuthContext } from "@/context/AuthContext"
import { AppBar, Button } from "@mui/material"
import Link from "next/link"
import { useContext } from "react"

const Navbar = () => {
  const { currentUser } = useContext(AuthContext)

  return (
    <AppBar
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        padding: "0 1.5rem",
        alignItems: "center",
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
      }}
      position="relative"
      color="default"
    >
      <p>TEMPLATE</p>

      <div>
        <Link href="/">
          <Button component="a">Home</Button>
        </Link>

        <Link href="/signin">
          <Button component="a">sign in</Button>
        </Link>

        <Link href="/signup">
          <Button component="a">sign up</Button>
        </Link>
      </div>

      {currentUser && (
        <>
          <Link href="/user/profile">
            <Button component="a">profile</Button>
          </Link>
          <strong>{currentUser.email}</strong>
          <LogOutBtn />
        </>
      )}
    </AppBar>
  )
}

export default Navbar
