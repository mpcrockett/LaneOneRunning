import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import "@fontsource/inter";

const inputField = defineStyle({
  color: 'brand.gray.900',
  fontFamily: `'Inter', sans-serif`,
  fontSize: 'md',
  fontWeight: '300',
  margin: '10px',
  variant: 'flushed'
})

export const inputTheme = defineStyleConfig({
  variants: { inputField },
})