import { Button as MUIButton } from '@mui/material'
import { LocalesTypes } from 'interfaces/locales'
import NextLink from 'next/link'
import { FC } from 'react'

interface IProps {
    href: string
    as?: string
    children: React.ReactNode
    variant?: 'contained' | 'outlined' | 'text'
    color?: 'primary' | 'secondary' | 'inherit'
    size?: 'small' | 'medium' | 'large'
    disabled?: boolean
    fullWidth?: boolean
    endIcon?: React.ReactNode
    startIcon?: React.ReactNode
    onClick?: () => void
    locale: LocalesTypes | string
}

const LinkBtn: FC<IProps> = (props) => {
    const { children, href, locale, ...rest } = props
    return (
        <NextLink href={href} passHref locale={locale}>
            <MUIButton {...rest}>{children}</MUIButton>
        </NextLink>
    )
}

export default LinkBtn
