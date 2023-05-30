import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { useEffect, useState } from 'react'

interface PasswordInputProps {
    label: string
    errorMessage?: string
    hasError?: boolean
    // eslint-disable-next-line no-unused-vars
    setHasError?: (hasError: boolean) => void
    // eslint-disable-next-line no-unused-vars
    setPassword: (password: string) => void
    password: string
    checksEnabled?: boolean
    onBlur: () => void
    error?: boolean
    helperText?: string
    onFocus: () => void
}

const has8CharactersOrMore = (password: string) => password.length >= 8
const hasUpperCase = (password: string): boolean =>
    password !== password.toLowerCase()
const hasNumber = (password: string) => /\d/.test(password)

export const isPasswordValid = (password: string) =>
    has8CharactersOrMore(password) &&
    hasUpperCase(password) &&
    hasNumber(password)

const PasswordInput = ({
    label,
    hasError,
    setHasError,
    password,
    setPassword,
    checksEnabled = true,
    onBlur,
    error,
    helperText,
    onFocus,
}: PasswordInputProps) => {
    const [showpw, setShowpw] = useState<boolean>(false)

    useEffect(() => {
        if (checksEnabled && setHasError) {
            if (hasError && isPasswordValid(password)) setHasError(false)
            else if (!hasError && !isPasswordValid(password)) setHasError(true)
        }
    }, [password])

    return (
        <>
            <TextField
                variant="outlined"
                required
                fullWidth
                label={label}
                type={showpw ? 'text' : 'password'}
                autoComplete="new-password"
                onChange={(event) => setPassword(event.target.value)}
                onBlur={onBlur}
                error={error}
                helperText={helperText}
                onFocus={onFocus}
                InputProps={{
                    // <-- This is where the toggle button is added.
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => {
                                    setShowpw(!showpw)
                                }}
                                onMouseDown={() => {}}
                            >
                                {!showpw ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </>
    )
}

export default PasswordInput
