import { Box, Typography } from '@mui/material'
interface IProps {
    icon: React.ReactNode
    text?: string
    textComponent?: React.ReactNode
    textVariant?:
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'subtitle1'
        | 'subtitle2'
        | 'body1'
        | 'body2'
        | 'caption'
        | 'button'
        | 'overline'
}
export default function TextWithIcon(props: IProps) {
    const { icon, text, textVariant, textComponent } = props
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                mr: 2,
            }}
        >
            <Box sx={{ pr: 2, display: 'grid', placecontent: 'center' }}>
                {icon}
            </Box>
            {text ? (
                <Typography component="span" variant={textVariant ?? 'caption'}>
                    {text}
                </Typography>
            ) : (
                <>{textComponent}</>
            )}
        </Box>
    )
}
