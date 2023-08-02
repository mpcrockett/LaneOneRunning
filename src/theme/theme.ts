import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { buttonTheme } from "./buttonTheme";
import "@fontsource/inter";
import "@fontsource/playfair-display";
import '@fontsource-variable/montserrat';
import { inputTheme } from "./inputTheme";

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const colors = {
  gray: {
    50: "#F3F2F1",
    100: "#DEDBD9",
    200: "#C9C4C0",
    300: "#B3ADA8",
    400: "#9E968F",
    500: "#898076",
    600: "#6D665F",
    700: "#524D47",
    800: "#37332F",
    900: "#1B1A18"
  },
  blue: {
    50: "#F1F3F4",
    100: "#D8DDDF",
    200: "#BEC7CB",
    300: "#A5B2B6",
    400: "#8B9CA1",
    500: "#72868D",
    600: "#5B6B71",
    700: "#445155",
    800: "#2E3638",
    900: "#171B1C"
  },
  teal: {
    50: "#F3F3F1",
    100: "#DEDCD8",
    200: "#C9C6BF",
    300: "#B4AFA6",
    400: "#9F998E",
    500: "#8A8375",
    600: "#6F695D",
    700: "#534E46",
    800: "#37342F",
    900: "#1C1A17"
  },
  green: {
    50: "#F3F3F2",
    100: "#DDDCD9",
    200: "#C7C6C1",
    300: "#B2AFA9",
    400: "#9C9991",
    500: "#868279",
    600: "#6B6861",
    700: "#514E48",
    800: "#363430",
    900: "#1B1A18"
  },
  cream: {
    50: '#f2f1f0'
  }
}

const textStyles = {
  h1: {
    fontFamily: `'Montserrat Variable', sans-serif`,
    fontSize: ['14px', '16px'],
    fontWeight: 'normal',
    lineHeight: '110%',
    letterSpacing: '-2%',
    textTransform: 'uppercase',
  },
  h2: {
    fontFamily: `'Montserrat Variable', sans-serif`,
    fontSize: ['12px', '14px'],
    fontWeight: 'semibold',
    lineHeight: '110%',
    letterSpacing: '-1%',
    textTransform: 'uppercase',
  },
  body: {
    fontFamily: `'Inter', sans-serif`,
    fontSize: ['8px', '10px']
  }
}

const breakpoints = {
  sm: '30em', // 480px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '80em', // 1280px
  '2xl': '96em', // 1536px
}

const theme = extendTheme({ colors, breakpoints, textStyles, components: { Button: buttonTheme, Input: inputTheme }, config })

export default theme

