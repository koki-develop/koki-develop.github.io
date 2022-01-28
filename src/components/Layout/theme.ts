import { createTheme, PaletteColorOptions } from '@mui/material/styles';

const fontFamily = ['"Open Sans"', 'sans-serif'].join(',');

const primary: PaletteColorOptions = {
  main: '#FAFAFA',
  light: '#FFFFFF',
  dark: '#E0E0E0',
  contrastText: '#000000',
};

const secondary: PaletteColorOptions = {
  main: '#191919',
  light: '#303030',
  dark: '#000000',
  contrastText: '#FFFFFF',
};

export const theme = createTheme({
  palette: {
    primary,
    secondary,
  },
  typography: {
    fontFamily,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: primary.main,
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
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
      defaultProps: {
        color: 'primary',
        variant: 'contained',
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: primary.contrastText,
        },
      },
      defaultProps: {
        underline: 'none',
      },
    },
  },
});
