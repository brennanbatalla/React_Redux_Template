import {createMuiTheme} from '@material-ui/core/styles';

export const Custom_Theme = createMuiTheme(
    {
        palette: {
            primary: {
                // light: will be calculated from palette.primary.main,
                main: '#2484C6',
                // dark: will be calculated from palette.primary.main,
                // contrastText: will be calculated to contrast with palette.primary.main
            },
            secondary: {
                // light: will be calculated from palette.secondary.main,
                main: '#7587A2',
                contrastText: '#ffcc00',
            }
        },
        typography: {
            // Use the system font instead of the default Roboto font.
            fontFamily: [
                'filson-soft'
            ].join(','),
            fontSize: 14
        }
    }
);

