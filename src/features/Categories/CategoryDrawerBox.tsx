import { Box } from "@chakra-ui/react";
import { ForwardedRef, forwardRef } from "react";

interface Props {
  children?: React.ReactNode;
}

const CategoryDrawerBox = forwardRef<HTMLDivElement, Props>(
  function CategoryDrawerBox(props: Props, ref: ForwardedRef<HTMLDivElement>) {
    return (
      <div ref={ref}>
        <Box
          width="100%"
          bg="brand.cream.50"
          display="flex"
          justifyContent={"space-around"}
          alignItems={"left"}
          minHeight="200px"
          id="category-option-box"
          zIndex={2}
        >
          {props?.children}
        </Box>
      </div>
    );
  }
);

export default CategoryDrawerBox;
