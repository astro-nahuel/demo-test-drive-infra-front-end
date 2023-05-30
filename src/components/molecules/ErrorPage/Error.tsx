import { ArrowBack } from '@mui/icons-material'
import { Box, Button, Grid } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import ErrorLogo from './error-page.png'

const ErrorPage = () => {
    const router = useRouter()
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: '100vh' }}
            direction="column"
        >
            <Image src={ErrorLogo} alt="error page" width={100} height={100} />

            <Grid item>
                <strong>Ups! No encontramos lo que buscabas</strong>
                <Box paddingTop={2} paddingBottom={1}>
                    <Button
                        onClick={() => router.replace('/')}
                        variant="contained"
                        color="primary"
                        startIcon={<ArrowBack />}
                        size="small"
                    >
                        ir al inicio
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default ErrorPage
