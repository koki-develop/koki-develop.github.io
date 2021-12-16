import { createTheme, PaletteColorOptions } from '@mui/material/styles';

const fontFamily = ['"Open Sans"', 'sans-serif'].join(',');

const primary: PaletteColorOptions = {
  main: '#ffffff',
  dark: '#fafafa',
  contrastText: '#000000',
};

export const theme = createTheme({
  palette: {
    primary,
  },
  typography: {
    fontFamily,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: primary.dark,
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
  },
});
