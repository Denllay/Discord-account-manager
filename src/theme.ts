import { createMuiTheme, ThemeOptions } from '@material-ui/core';

const commonThemeSettings: ThemeOptions = {
  typography: {
    fontFamily: 'Rubik, sans-serif',

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
      dark: '#FF4545',
    },
    secondary: {
      main: '#47fd47',
      dark: '#27D22E',
    },
    primary: {
      main: '#FFC700',
    },
  },
};
const lightThemeSettings: ThemeOptions = {
  palette: {
    type: 'light',

    background: {
      paper: '#f5f5f5',
      default: '#ffffff',
    },

    info: {
      main: '#ffffff',
    },

    text: {
      primary: '#212121',
    },
  },
};

const darkThemeSettings: ThemeOptions = {
  palette: {
    type: 'dark',

    background: {
      paper: '#393939',
      default: '#0D0D0D',
    },

    info: {
      main: '#212121',
    },

    text: {
      primary: '#ffffff',
    },
  },
};

export const lightTheme = createMuiTheme(commonThemeSettings, lightThemeSettings);

export const darkTheme = createMuiTheme(commonThemeSettings, darkThemeSettings);
