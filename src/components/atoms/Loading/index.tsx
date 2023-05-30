import { Box, CircularProgress } from '@mui/material'
export const Loading = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'calc(100vh - 64px)',
                width: '100%',
            }}
        >
            <CircularProgress />
        </Box>
    )
}
