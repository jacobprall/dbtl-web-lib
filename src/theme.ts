import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// Define the color schemes for light and dark themes
const colors = {
  // light: {
  //   background: "#ffffff",
  //   primary: "#c42224", //
  //   secondary: "#ffd700",
  //   text: "#000000",
  //   // surface: "#eeeeee",
  //   // error: "#ff0000",
  // },
  // dark: {
  //   background: "#0c0c0c",
  //   primary: "#c42224",
  //   secondary: "#ffe135",
  //   text: "#ffffff",
  //   surface: "#333333",
  //   error: "#cf6679", // Kind of pinkish error
  // },
  background: "#000000",
  primary: "#c42224",
  secondary: "#ffd700",
  white: "#ffffff",
  gray: "#a8a8a8",
  red5: "#c42224",
  red6: "#921516",
};

const components = {
  Button: {
    // You can base styles that apply to all variants here
    baseStyle: {
      fontWeight: "bold", // Example of a base style
      padding: "8px 16px", // Example of a base style
      width: "100%",
      borderRadius: "12px",
    },
    variants: {
      primary: {
        bg: colors.red5,
        color: colors.white,
        _hover: {
          bg: colors.red6,
        },
        _disabled: {
          bg: colors.red6,
          color: colors.white,
          _hover: {
            bg: colors.red6,
          },
        },
      },
      secondary: {
        bg: "transparent",
        color: colors.white,
        border: "2px solid",
        borderColor: colors.red5,
        _hover: {
          bg: colors.red5,
          color: "white",
        },
        _disabled: {
          bg: colors.red6,
          color: colors.white,
          _hover: {
            bg: colors.red6,
          },
        },
      },
    },
  },
};

// Define the base styles for both themes
const styles = {
  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // global: (props: any) => ({
  //   body: {
  //     bg:
  //       props.colorMode === "dark"
  //         ? colors.dark.background
  //         : colors.light.background,
  //     color: props.colorMode === "dark" ? colors.dark.text : colors.light.text,
  //   },
  //   a: {
  //     color:
  //       props.colorMode === "dark" ? colors.dark.primary : colors.light.primary,
  //   },
  // }),
};

// Define typography, breakpoints, and other attributes as needed
const typography = {
  fonts: {
    heading: "Mulish, sans-serif",
    body: "Mulish, sans-serif",
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
};

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
};

// Define the spacing and sizing scale if necessary
const space = {
  px: "1px",
  0: "0",
  1: "0.25rem",
  2: "0.5rem",
  4: "1rem",
  8: "2rem",
  16: "4rem",
  32: "8rem",
  64: "16rem",
  128: "32rem",
};

// Theme configuration options
const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "ck",
};

// Combine the theme
const theme = extendTheme({
  components,
  colors,
  styles,
  typography,
  breakpoints,
  space,
  config,
});

export default theme;
