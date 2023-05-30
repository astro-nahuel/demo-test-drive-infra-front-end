import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { FC } from 'react'

interface IProps {
    title: string
    subtitle: string
}
export const TitleAndSubtitle: FC<IProps> = ({ title, subtitle }) => {
    return (
        <Box sx={{ margin: '1.5rem' }}>
            <Typography variant="h2" align="center" gutterBottom>
                {title}
            </Typography>
            <Typography variant="body2" align="center" gutterBottom>
                {subtitle}
            </Typography>
        </Box>
    )
}
