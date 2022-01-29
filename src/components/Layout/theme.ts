import {
  createTheme,
  responsiveFontSizes,
  PaletteColorOptions,
} from '@mui/material/styles';

const fontFamily = ['"Open Sans"', 'sans-serif'].join(',');

const primary: PaletteColorOptions = {
  main: '#FFFFFF',
  light: '#FFFFFF',
  dark: '#FAFAFA',
  contrastText: '#000000',
};

const secondary: PaletteColorOptions = {
  main: '#191919',
  light: '#303030',
  dark: '#000000',
  contrastText: '#FFFFFF',
};

export const theme = responsiveFontSizes(
  createTheme({
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
            backgroundColor: primary.dark,
            fontFamily,
            letterSpacing: 1,
          },
          ul: {
            listStyleType: 'none',
            padding: 0,
          },
        },
      },
      MuiAppBar: {
        defaultProps: {
          elevation: 2,
        },
      },
      MuiPaper: {
        defaultProps: {
          elevation: 2,
        },
      },
      MuiCard: {
        defaultProps: {
          elevation: 2,
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
  }),
);
