import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { colors } from './colors'
import { fonts } from './fonts'

// Create a theme instance.
let theme = createTheme({
    palette: {
        primary: {
            main: colors.primaryMainColor,
        },
    },

    typography: {
        h1: { fontFamily: fonts.titleFont, fontWeight: 800, fontSize: '34px' },
        h2: { fontFamily: fonts.titleFont, fontWeight: 700, fontSize: '30px' },
        h3: { fontFamily: fonts.titleFont, fontWeight: 700, fontSize: '26px' },
        h4: { fontFamily: fonts.titleFont, fontWeight: 700, fontSize: '22px' },
        h5: { fontFamily: fonts.titleFont, fontWeight: 700, fontSize: '20px' },
        h6: { fontFamily: fonts.titleFont, fontWeight: 700, fontSize: '16px' },
        subtitle1: {
            fontFamily: fonts.titleFont,
            fontWeight: 600,
            fontSize: '18px',
        },
        subtitle2: {
            fontFamily: fonts.titleFont,
            fontWeight: 600,
            fontSize: '16px',
        },
        body1: {
            fontFamily: fonts.paragraphFont,
            fontWeight: 400,
            fontSize: '16px',
        },
        body2: {
            fontFamily: fonts.paragraphFont,
            fontWeight: 400,
            fontSize: '15px',
        },
        button: {
            fontFamily: fonts.titleFont,
            fontWeight: 800,
            fontSize: '14px',
        },
    },

    // overrides: {
    //     Put overrides here...
    // },
})

theme = responsiveFontSizes(theme)

export default theme
