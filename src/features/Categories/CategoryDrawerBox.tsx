import { Box } from '@chakra-ui/react';
import { LegacyRef } from 'react';

interface Props {
  ref?: LegacyRef<HTMLDivElement>,
  children?: React.ReactNode
}

function CategoryDrawerBox(props: Props) {
  return (
    <Box
      ref={props?.ref}
      width="100%"
      bg="brand.cream.50"
      display="flex"
      justifyContent={"space-around"}
      alignItems={"center"}
      minHeight="200px"
      id="category-option-box"
      zIndex={2}
    >
      {props?.children}
    </Box>
  );
}

export default CategoryDrawerBox