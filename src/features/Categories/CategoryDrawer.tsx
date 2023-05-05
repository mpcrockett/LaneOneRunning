import { Box, useOutsideClick } from "@chakra-ui/react";
import { RefObject, useRef } from 'react';
import CategoryDrawerBox from "./CategoryDrawerBox";

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
    <CategoryDrawerBox ref={ref}>

    </CategoryDrawerBox>
  );
}

export default CategoryDrawer