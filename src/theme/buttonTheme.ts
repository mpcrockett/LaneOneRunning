import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import "@fontsource/playfair-display";

const navButton = defineStyle({
  color: 'brand.gray.900',
  fontFamily: `'Playfair Display', serif`,
  fontSize: 'lg',
  fontWeight: '400',
  marginTop: '0px',
  _hover: { textDecoration: 'underline' }
})

export const buttonTheme = defineStyleConfig({
  variants: { navButton },
})