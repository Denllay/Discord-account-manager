import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    fontFamily: 'Rubik, sans-serif',
    allVariants: {
      color: '#212121',
    },

    h1: {
      fontWeight: 700,
      fontSize: 26,
    },

    h2: {
      fontWeight: 400,
      fontSize: 23,
    },

    subtitle1: {
      fontWeight: 300,
      fontSize: 16,
    },

    body1: {
      fontWeight: 400,
      fontSize: 18,
    },

    body2: {
      fontWeight: 300,
      fontSize: 18,
    },

    button: {
      fontWeight: 500,
      fontSize: 15,
    },
  },
  palette: {
    error: {
      main: '#BA1919',
      dark: '#DC3B3B',
    },
    secondary: {
      main: '#2EAC33',
    },
    primary: {
      main: '#FFC700',
    },
  },
});
