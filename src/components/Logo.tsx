import { Center, Image } from '@chakra-ui/react';
import logo from "../assets/1.png";

function Logo() {
  return (
    <Center width="minContent">
      <Image w={[100, 200, 300]} src={logo} alt="logo" bg="brand.cream.50" />
    </Center>
  );
}

export default Logo