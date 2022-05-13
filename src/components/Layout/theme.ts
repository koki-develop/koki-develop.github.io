// TODO: ファイルごと消す

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
  main: '#606060',
  light: '#777777',
  dark: '#444444',
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
          a: {
            color: primary.contrastText,
            textDecoration: 'none',
          },
          body: {
            backgroundColor: primary.dark,
            overscrollBehaviorY: 'none',
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
      MuiChip: {
        styleOverrides: {
          label: {
            paddingLeft: 8,
          },
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
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(0, 0, 0, 0.87)',
              borderWidth: 1,
            },
          },
        },
      },
    },
  }),
);
