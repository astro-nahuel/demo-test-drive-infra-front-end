import { SxProps } from '@mui/material'
import Box from '@mui/material/Box'
import { ReactNode } from 'react'

export default function Flex(props: {
    children: ReactNode
    justifyContent?:
        | 'space-between'
        | 'space-around'
        | 'space-evenly'
        | 'center'
        | 'flex-start'
        | 'flex-end'
        | 'stretch'
        | 'baseline'
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
    gap?: number
    sx?: SxProps
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
}) {
    const { children, justifyContent, alignItems, gap, flexDirection, sx } =
        props
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: justifyContent ?? 'space-between',
                alignItems: alignItems ?? 'center',
                gap: gap ?? 2,
                flexDirection: flexDirection ?? 'row',
                ...sx,
            }}
        >
            {children}
        </Box>
    )
}
