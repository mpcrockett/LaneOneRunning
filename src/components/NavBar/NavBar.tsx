import { Box, Button, Center, Image } from "@chakra-ui/react";
import logo from "../../assets/1.png";
import Cart from "../Cart/Cart";
import Search from "./Search";

function NavBar() {
  return (
      <Box
        width="100%"
        bg="brand.cream.50"
        display="flex"
        justifyContent={"space-around"}
        alignItems={"center"}
        id='nav-bar-box'
      >
        <Box
          display="flex"
          flexDirection={"row"}
          width="33%"
          justifyContent={"space-around"}
          id='category-button-box'
        >
          <Button variant="navButton">Men</Button>
          <Button variant="navButton">Women</Button>
          <Button variant="navButton">Accessories</Button>
        </Box>
        <Center width="minContent">
          <Image boxSize="250px" src={logo} alt="logo" bg="brand.cream.50" />
        </Center>
        <Box
          display="flex"
          flexDirection={"row"}
          width="33%"
          justifyContent={"space-around"}
          id='about-cart-search-box'
        >
          <Button variant="navButton">About</Button>
          <Button variant="navButton">Contact</Button>
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
