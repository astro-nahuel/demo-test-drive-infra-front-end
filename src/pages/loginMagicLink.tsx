import React from 'react'
import { CircularProgress, Typography } from '@mui/material'
import {
    getAuth,
    isSignInWithEmailLink,
    signInWithEmailLink,
} from 'firebase/auth'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'

const LoginMagicLink: NextPage = () => {
    const [loading, setLoading] = useState(true)
    const [loginResponse, setLoginResponse] = useState<any>(null)

    useEffect(() => {
        verifyUser()
    }, [])

    const verifyUser = async () => {
        try {
            const auth = getAuth()
            if (isSignInWithEmailLink(auth, window.location.href)) {
                // Additional state parameters can also be passed via URL.
                // This can be used to continue the user's intended action before triggering
                // the sign-in operation.
                // Get the email if available. This should be available if the user completes
                // the flow on the same device where they started it.
                let email = window.localStorage.getItem('emailForSignIn')
                if (!email) {
                    // User opened the link on a different device. To prevent session fixation
                    // attacks, ask the user to provide the associated email again. For example:

                    email = window.prompt(
                        'Please provide your email for confirmation'
                    )
                }
                const response = await signInWithEmailLink(
                    auth,
                    email || '',
                    window.location.href
                )
                console.log(response)
                setLoginResponse(response)
            }
        } catch (error: any) {
            console.log(error)
        }
        setLoading(false)
    }
    if (loading) {
        return <CircularProgress />
    }
    return (
        <div>
            <h1>Logged in</h1>
            <Typography> {JSON.stringify(loginResponse)} </Typography>
        </div>
    )
}

export default LoginMagicLink
