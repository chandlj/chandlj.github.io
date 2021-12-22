import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

/*
  Using the MUI theme color geneartor:
    https://material.io/resources/color
*/

const baseTheme = {
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    secondary: {
      main: '#c62828',
      light: '#ff5f52',
      dark: '#8e0000',
      contrastText: '#fff',
    },
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      contrastText: '#fff',
    },
  },
  sizes: {
    card: {
      width: 250,
      height: 250,
    },
  },
  typography: {
    fontFamily: 'Roboto Condensed',
    mono: 'AndaleMono, monospace',
  },
  background: {
    paper: '#484848',
    default: '#000',
  },
};

export const light = createTheme({
  ...baseTheme,
  palette: {
    type: 'light',
    ...baseTheme.palette,
    background: {
      paper: '#FFF7C5',
      default: '#FFFCE9',
      text: '#000',
    },
  },
});

export const dark = createTheme({
  ...baseTheme,
  palette: {
    type: 'dark',
    ...baseTheme.palette,
    lightText: {
      main: '#e7e7e7',
      dark: '#cecece',
    },
    background: {
      paper: '#e4c5a7',
      default: '#37474f',
      text: '#6b724e',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.54)',
      disabled: 'rgba(255, 255, 255, 0.38)',
      hint: 'rgba(255, 255, 255, 0.38)',
    },
    action: {
      active: 'rgba(255, 255, 255, 0.54)',
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.14)',
      disabled: 'rgba(255, 255, 255, 0.26)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
    },
  },
});

export default responsiveFontSizes(createTheme(baseTheme));
