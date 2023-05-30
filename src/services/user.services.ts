import { getCurrentUser } from "@/libs/firebase"
import axios from "axios"
import { IAuthUser, IProfile } from "interfaces/user"

export const createUserLocally = async (
  user: Partial<IAuthUser>,
  profile: Partial<IProfile>
) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/users`,
      { user, profile }
    )
    return data
  } catch (error: any) {
    console.error(error)
    throw new Error("Can't create user locally")
  }
}

export const getUserLocally = async (): Promise<Partial<IAuthUser> | null> => {
  try {
    const currentUser = await getCurrentUser()
    if (!currentUser) {
      return null
    }
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/users/me`,
      { email: currentUser?.email }
    )
    return data
  } catch (error: any) {
    console.error(error)
    throw new Error("Can't get user locally")
  }
}
