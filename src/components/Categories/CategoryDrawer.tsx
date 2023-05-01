import { Box } from '@chakra-ui/react';

function CategoryDrawer() {
  return (
    <Box
      width="100%"
      bg="brand.cream.50"
      display="flex"
      justifyContent={"space-around"}
      alignItems={"center"}
      minHeight="200px"
      id="category-option-box"
    ></Box>
  );
}

export default CategoryDrawer