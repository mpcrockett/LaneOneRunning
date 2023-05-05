import { Box } from "@chakra-ui/react"
import NavBar from "../NavBar/NavBar"
import CategoryDrawer from "../Categories/CategoryDrawer"
import { useState } from "react";

function Menu() {
  const [selectedTab, setSelectedTab] = useState<null | string>(null);
  
  return (
    <Box display="flex" flexDirection={"column"} id="outer-menu-box">
      <NavBar setSelectedTab={setSelectedTab} />
      {selectedTab && (
        <CategoryDrawer
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
        />
      )}
    </Box>
  );
}

export default Menu