import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeightBold: 700,
      fontSize: 25,
    },
    h2: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeightBold: 700,
      fontSize: 18,
    },
    subtitle1: {
      fontFamily: 'PT Sans Caption, sans-serif',
      fontWeight: 400,
      fontSize: 16,
    },
  },
});
