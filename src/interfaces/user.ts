export interface IAuthUser {
    id: string
    providerId?: string
    displayName?: string
    email: string
    photoURL?: string
    emailVerified?: boolean
    phoneNumber?: string
}

export interface IProfile {
    id: string
    userId: string
    displayName: string
    photoURL: string
}
