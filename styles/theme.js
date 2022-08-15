import { Box, createTheme, Grow } from '@mui/material';
import { forwardRef } from 'react';

const gutter = 30;

const white = '#fff';
const black = '#111';

const serifFont =
  "Cormorant, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif";
const sansSerifFont =
  "Avenir, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif";

const DialogTransition = forwardRef((props, ref) => <Grow ref={ref} {...props} />);

const light = {
  main: '#ffffff',
  light: '#ffffff',
  dark: '#ECF0F1',
  contrastText: black,
  900: '#B8BDC1',
  800: '#D7DCDD',
  700: '#ECF0F1',
  600: '#F6F8F9',
  500: '#ffffff',
  400: '#ffffff',
  300: '#ffffff',
  200: '#ffffff',
  100: '#ffffff',
};

const dark = {
  main: '#000000',
  light: '#ffffff',
  dark: '#000000',
  contrastText: white,
  900: '#000000',
  800: '#000000',
  700: '#000000',
  600: '#000000',
  500: '#000000',
  400: '#2F3033',
  300: '#494B4F',
  200: '#64676C',
  100: '#7F8388',
};

const grey = {
  main: '#9BA0A5',
  contrastText: black,
  900: '#2F3033',
  800: '#494B4F',
  700: '#64676C',
  600: '#7F8388',
  500: '#9BA0A5',
  400: '#B8BDC1',
  300: '#D7DCDD',
  200: '#ECF0F1',
  100: '#F6F8F9',
};

const primary = {
  main: '#5E7461',
  contrastText: white,
  900: '#5E7461',
  800: '#7E9182',
  700: '#9DA89F',
  600: '#C0C8C0',
  500: '#DFE3DF',
  400: '#E6E9E6',
  300: '#ECEFEE',
  200: '#F2F4F3',
  100: '#F9FAF9',
};

const secondary = {
  main: '#ED6C04',
  contrastText: white,
  900: '#2F1601',
  800: '#5F2B02',
  700: '#8E4102',
  600: '#BE5603',
  500: '#ED6C04',
  400: '#F4A768',
  300: '#F8C49B',
  200: '#FBE2CD',
  100: '#FDF0E6',
};

const grayGreen = {
  main: '#282928',
  contrastText: white,
  900: '#282928',
  800: '#404240',
  700: '#5B5D5B',
  600: '#757775',
  500: '#8F918F',
  400: '#AAABAA',
  300: '#C4C6C4',
  200: '#DFE0DF',
  100: '#EAEBEA',
  50: '#F3F3F3',
  25: '#FAFAFA',
};

const grayStone = {
  main: '#1F1D1B',
  contrastText: white,
  900: '#1F1D1B',
  800: '#2A2725',
  700: '#3F3D39',
  600: '#57534E',
  500: '#76726E',
  400: '#A29E9A',
  300: '#D9D7D5',
  200: '#E9E8E7',
  100: '#EFEDED',
  50: '#F4F4F4',
  25: '#FAF9F9',
};

const warning = {
  main: '#EAA004',
  contrastText: white,
  900: '#311F04',
  800: '#613E07',
  700: '#925E0B',
  600: '#C27D0E',
  500: '#F39C12',
  400: '#F8C471',
  300: '#FAD7A0',
  200: '#FDEBD0',
  100: '#FEF5E7',
};

const error = {
  main: '#E74C3C',
  contrastText: white,
  900: '#2E0F0C',
  800: '#5C1E18',
  700: '#8B2E24',
  600: '#B93D30',
  500: '#E74C3C',
  400: '#F1948A',
  300: '#F5B7B1',
  200: '#FADBD8',
  100: '#FDEDEC',
};

const success = {
  main: '#77BD5A',
  contrastText: white,
  900: '#182612',
  800: '#304C24',
  700: '#477136',
  600: '#5F9748',
  500: '#77BD5A',
  400: '#ADD79C',
  300: '#C9E5BD',
  200: '#E4F2DE',
  100: '#F1F8EF',
};

const info = {
  main: '#3498DB',
  contrastText: white,
  900: '#0A1E2C',
  800: '#153D58',
  700: '#1F5B83',
  600: '#2A7AAF',
  500: '#3498DB',
  400: '#85C1E9',
  300: '#AED6F1',
  200: '#D6EAF8',
  100: '#EBF5FB',
};

const palette = {
  common: {
    black,
    white,
  },
  background: {
    default: white,
  },
  grayGreen,
  grayStone,
  black: dark,
  white: light,
  primary,
  secondary,
  error,
  warning,
  success,
  info,
  grey,
  text: {
    primary: grayGreen['900'],
    secondary: grayGreen['800'],
  },
};

const breakpoints = {
  xs: 0,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1600,
};

const containerWidths = {
  sm: 750,
  md: 970,
  lg: 1170,
  xl: 1560,
};

const typography = {
  htmlFontSize: 16,
  fontFamily: sansSerifFont,
  fontSize: 14,
  h1: {
    fontWeight: 500,
    fontSize: 40,
    lineHeight: '52px',
  },
  h2: {
    fontWeight: 500,
    fontSize: 36,
    lineHeight: '44px',
  },
  h3: {
    fontWeight: 500,
    fontSize: 32,
    lineHeight: '40px',
  },
  h4: {
    fontWeight: 500,
    fontSize: 28,
    lineHeight: '36px',
  },
  h5: {
    fontWeight: 500,
    fontSize: 24,
    lineHeight: '32px',
  },
  h6: {
    fontWeight: 500,
    fontSize: 20,
    lineHeight: '28px',
  },
  display1: {
    fontWeight: 700,
    fontFamily: serifFont,
    fontSize: 40,
    lineHeight: '52px',
  },
  bodySmall: {
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '20px',
  },
  bodyMedium: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '24px',
  },
  bodyMediumMedium: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: '24px',
  },
  bodyMediumLarge: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '28px',
  },
  bodyMediumExtraLarge: {
    fontWeight: 500,
    fontSize: 18,
    lineHeight: '28px',
  },
  bodyLarge: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '28px',
  },
  bodyExtraLarge: {
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '28px',
  },
  buttonSmall: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '24px',
  },
  buttonMedium: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '24px',
  },
  buttonLarge: {
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '24px',
  },
};

let themeConfig = createTheme({
  containerWidths,
  breakpoints: {
    values: breakpoints,
  },
  gutter,
  palette,
  typography,
  shape: {
    borderRadius: 4,
  },
});

themeConfig = createTheme(themeConfig, {
  components: {
    MuiDialog: {
      defaultProps: {
        TransitionComponent: DialogTransition,
      },
    },
    MuiDivider: {
      styleOverrides: {
        light: {
          borderColor: themeConfig.palette.grayGreen['100'],
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          ...typography.bodyMedium,
          fontWeight: 800,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          paddingTop: 8,
          paddingRight: 8,
          paddingLeft: 8,
          marginTop: 0,
          ...typography.bodyMedium,
          color: themeConfig.palette.grayGreen['800'],
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          ...themeConfig.typography.buttonMedium,
          textTransform: 'none',
          borderRadius: 2,
        },
        sizeSmall: {
          ...themeConfig.typography.buttonSmall,
          padding: '8px 16px',
        },
        sizeMedium: {
          padding: '12px 20px',
        },
        sizeLarge: {
          ...themeConfig.typography.buttonLarge,
          padding: '16px 32px',
        },
      },
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
      variants: [
        {
          props: { variant: 'contained', color: 'black' },
          style: {
            backgroundColor: themeConfig.palette.black[400],
            color: themeConfig.palette.black.contrastText,
          },
        },
        {
          props: { variant: 'contained', color: 'light' },
          style: {
            backgroundColor: themeConfig.palette.white[400],
            color: themeConfig.palette.white.contrastText,
          },
        },
      ],
    },
    MuiSelect: {},
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: themeConfig.gutter / 2,
          paddingRight: themeConfig.gutter / 2,
          ...Object.keys(themeConfig.containerWidths).reduce(
            (acc, screenSize) => ({
              ...acc,
              [`@media (min-width: ${themeConfig.breakpoints.values[screenSize]}px)`]: {
                ...(themeConfig.breakpoints.values[screenSize] === 768
                  ? {
                      paddingLeft: themeConfig.gutter / 2,
                      paddingRight: themeConfig.gutter / 2,
                    }
                  : {}),
                maxWidth: themeConfig.containerWidths[screenSize],
              },
            }),
            {},
          ),
        },
        disableGutters: {
          paddingRight: 0,
          paddingLeft: 0,
        },
        maxWidthXs: {
          maxWidth: 'auto',
        },
        maxWidthSm: {
          maxWidth: 750,
        },
        maxWidthMd: {
          maxWidth: 970,
        },
        maxWidthLg: {
          maxWidth: 1170,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        color: themeConfig.palette.black.main,
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:active': {
            backgroundColor: themeConfig.palette.grey['200'],
          },
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiBreadcrumbs: {
      defaultProps: {
        separator: (
          <Box component="span" color="grayStone.400" sx={{ mt: 0.5 }}>
            •
          </Box>
        ),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: `1px solid ${themeConfig.palette.grey['200']}`,
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },
    MuiCardActionArea: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
        focusRipple: false,
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 0,
          color: themeConfig.palette.grey[300],
          transition: 'color .1s ease',
          backgroundColor: 'transparent !important',
          '&:hover': {
            color: themeConfig.palette.grey[600],
            '&:active': {
              color: themeConfig.palette.grayGreen[600],
              'svg rect': {
                fill: themeConfig.palette.grayGreen[300],
              },
            },
          },
          '&:active': {
            color: themeConfig.palette.grayGreen[600],
            backgroundColor: themeConfig.palette.grayGreen[300],
          },
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${themeConfig.palette.grey[300]}`,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: white,
            backgroundColor: themeConfig.palette.primary[900],
            '&:hover': {
              backgroundColor: themeConfig.palette.primary[900],
              borderColor: themeConfig.palette.grayGreen[300],
            },
          },
          '&:hover': {
            backgroundColor: 'transparent',
            borderColor: themeConfig.palette.grayGreen[300],
          },
        },
      },
    },
    // MuiChip: {
    //   styleOverrides: {
    //     root: {
    //       height: 'auto',
    //       backgroundColor: themeConfig.palette.grayGreen[200],
    //       border: `1px solid ${themeConfig.palette.grayGreen[500]}`,
    //       overflow: 'hidden',
    //     },
    //     clickable: {
    //       '&:hover, &:focus-visible': {
    //         backgroundColor: themeConfig.palette.grayGreen[300],
    //       },
    //       '&:active': {
    //         boxShadow: 'none',
    //       },
    //     },
    //     deletable: {
    //       '.MuiChip-label': {
    //         paddingRight: 12,
    //       },
    //       '.MuiChip-label.MuiChip-labelSmall': {
    //         paddingRight: 8,
    //       },
    //       '&:focus-visible': {
    //         backgroundColor: themeConfig.palette.grayGreen[300],
    //       },
    //     },
    // label: {
    //   paddingTop: 7,
    //   paddingBottom: 7,
    //   paddingRight: 16,
    //   paddingLeft: 16,
    //   color: gray[100],
    //   fontSize: '13px',
    //   lineHeight: '16px',
    // },
    // labelSmall: {
    //   paddingTop: 3,
    //   paddingBottom: 3,
    //   paddingRight: 12,
    //   paddingLeft: 12,
    //   fontSize: '13px',
    //   lineHeight: '16px',
    // },
    // deleteIcon: {
    //   width: 16,
    //   height: 16,
    //   padding: 2,
    //   margin: '0 12px 0 0',
    //   color: gray[60],
    // },
    // deleteIconSmall: {
    //   width: 12,
    //   height: 12,
    //   padding: 0,
    //   marginRight: '12px',
    //   marginLeft: '-2px',
    //   color: gray[60],
    // },
    // },
    // },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          display1: 'h1',
          bodySmall: 'p',
          bodyMedium: 'p',
          bodyLarge: 'p',
          bodyExtraLarge: 'p',
          buttonSmall: 'span',
          buttonMedium: 'span',
        },
      },
    },
  },
});

const theme = themeConfig;

export default theme;
