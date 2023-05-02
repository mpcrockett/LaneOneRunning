import { Box, Button, Center, Image } from "@chakra-ui/react";
import logo from "../../assets/1.png";
import Cart from "../Cart/Cart";
import Search from "./Search";

interface Props {
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>,
}

function NavBar(props: Props) {
  const { setSelectedTab } = props;

  const handleButtonClick = (label: string) => {
    setSelectedTab(label)
  }

  return (
    <Box
      width="100%"
      bg="brand.cream.50"
      display="flex"
      justifyContent={"space-around"}
      alignItems={"center"}
      id="nav-bar-box"
    >
      <Box
        display="flex"
        flexDirection={"row"}
        width="33%"
        justifyContent={"space-around"}
        id="category-button-box"
      >
        <Button variant="navButton" onClick={() => handleButtonClick("men")}>
          Men
        </Button>
        <Button variant="navButton" onClick={() => handleButtonClick("women")}>
          Women
        </Button>
        <Button variant="navButton" onClick={() => handleButtonClick("accessories")}>
          Accessories
        </Button>
      </Box>
      <Center width="minContent">
        <Image boxSize="250px" src={logo} alt="logo" bg="brand.cream.50" />
      </Center>
      <Box
        display="flex"
        flexDirection={"row"}
        width="33%"
        justifyContent={"space-around"}
        id="about-cart-search-box"
      >
        <Button variant="navButton" onClick={() => handleButtonClick("about")}>
          About
        </Button>
        <Button variant="navButton" onClick={() => handleButtonClick("contact")}>
          Contact
        </Button>
        <Box
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Search />
          <Cart />
        </Box>
      </Box>
    </Box>
  );
}

export default NavBar;
