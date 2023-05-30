import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/lab/LoadingButton'
import { Dialog, Grid, IconButton } from '@mui/material'
import { Container } from '@mui/system'
import { ReactNode } from 'react'
import { colors } from 'styles/theme/colors'

interface IDialogCustomProps {
    children: ReactNode
    open: boolean
    handleClose: () => void
    withButtons?: boolean
    labelCancelBtn?: string
    labelAcceptBtn?: string
    handleSubmit?: () => void
    loading?: boolean
}

export default function DialogCustom(props: IDialogCustomProps) {
    const {
        children,
        open,
        handleClose,
        withButtons = false,
        labelAcceptBtn,
        labelCancelBtn,
        handleSubmit,
        loading,
    } = props
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: '#000',
                }}
            >
                <CloseIcon />
            </IconButton>
            <Container sx={{ px: 3, pt: 8, pb: 2 }}>{children}</Container>
            {withButtons && (
                <Container sx={{ px: 6, pb: 2 }}>
                    <Grid
                        container
                        spacing={2}
                        alignItems="bottom"
                        justifyContent="space-between"
                    >
                        <Grid item xs={6}>
                            <Button
                                variant="outlined"
                                sx={{
                                    borderRadius: 2,
                                    mt: 3,
                                    mb: 2,
                                    py: 1.5,
                                    px: 2.5,
                                    color: colors.primaryMainColor,
                                    textTransform: 'none',
                                    fontSize: 14,
                                }}
                                fullWidth
                                onClick={handleClose}
                            >
                                {labelCancelBtn}
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                onClick={handleSubmit}
                                fullWidth
                                loading={loading}
                            >
                                {labelAcceptBtn}
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            )}
        </Dialog>
    )
}
