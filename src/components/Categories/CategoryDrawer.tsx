import { Box, useOutsideClick } from "@chakra-ui/react";
import { RefObject, useRef } from 'react';

interface Props {
  selectedTab: string | null;
  setSelectedTab: React.Dispatch<React.SetStateAction<string | null>>;
}

function CategoryDrawer(props: Props) { 
  const ref: RefObject<HTMLDivElement> = useRef(null);

  useOutsideClick({
    ref: ref,
    handler: () => props.setSelectedTab(null),
  });

  return (
    <Box
      ref={ref}
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