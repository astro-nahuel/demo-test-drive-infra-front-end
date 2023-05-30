import SignInGoogle from "@/components/organisms/Auth/SignIn/SignInGoogle"
import SignInMagicLink from "@/components/organisms/Auth/SignIn/SignInMagicLink"
import SignInMicrosoft from "@/components/organisms/Auth/SignIn/SignInMicrosoft"
import { NextPage } from "next"

const SignInPage: NextPage = () => {
  return (
    <>
      <SignInMagicLink />
      <SignInMicrosoft />
      <SignInGoogle />
    </>
  )
}

export default SignInPage
