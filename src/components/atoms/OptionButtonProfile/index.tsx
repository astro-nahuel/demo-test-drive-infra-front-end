import { FC } from 'react'
import { Grid, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

interface IProps {
    Icon: any
    click: () => void
    title: string
}

const OptionButtonProfile: FC<IProps> = ({ Icon, click, title }) => {
    const clickHandler = () => {
        click()
    }

    return (
        <Grid
            onClick={clickHandler}
            style={{ minHeight: '56px' }}
            item
            container
            justifyContent="center"
            alignItems="center"
        >
            <Grid item container justifyContent="center" xs={1}>
                {Icon}
            </Grid>
            <Grid item xs={10}>
                <Typography style={{ paddingLeft: 8 }}>{title}</Typography>
            </Grid>
            <Grid item container justifyContent="flex-end" xs={1}>
                <NavigateNextIcon />
            </Grid>
        </Grid>
    )
}

export default OptionButtonProfile
