import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    fontFamily: 'Rubik, sans-serif',
    allVariants: {
      color: '#212121',
    },
    h1: {
      fontWeight: 700,
      fontSize: 25,
    },
    h2: {
      fontWeight: 500,
      fontSize: 21,
    },
    h3: {
      fontWeight: 400,
      fontSize: 16,
    },
    subtitle1: {
      fontWeight: 300,
      fontSize: 16,
    },
    body1: {
      fontWeight: 400,
      fontSize: 19,
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
