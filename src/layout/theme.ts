import {
  createMuiTheme,
  PaletteColorOptions,
} from '@material-ui/core';

const fontFamily = ['"Open Sans"', 'sans-serif'].join(',');

const primary: PaletteColorOptions = {
  main: '#ffffff',
  dark: '#fafafa',
  contrastText: '#000000',
};

export const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {
      color: 'primary',
      variant: 'contained',
    },
  },
  typography: {
    fontFamily,
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
    MuiCssBaseline: {
      '@global': {
        body: {
          fontFamily,
          letterSpacing: 1,
        },
        a: {
          color: primary.contrastText,
          cursor: 'pointer',
          textDecoration: 'none',
          transition: '0.2s',
          '&:hover': {
            opacity: 0.5,
          },
        },
        ul: {
          listStyleType: 'none',
          padding: 0,
        },
      },
    },
  },
  palette: {
    primary,
  },
});

