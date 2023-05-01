import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Icon,
  useDisclosure,
  Input,
  Button,
  Box,
} from "@chakra-ui/react";
import { useRef} from "react";
import { IoCartOutline } from "react-icons/io5"
import CartItem from "./CartItem";

function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  
  return (
    <>
      <Icon
        ref={btnRef}
        as={IoCartOutline}
        boxSize={6}
        ml="14px"
        onClick={onOpen}
        color="brand.gray.900"
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="brand.cream.50">
          <DrawerCloseButton variant="ghost" />
          <DrawerHeader fontFamily={`'Playfair Display', serif`} fontSize='lg' fontWeight='400'>Your Cart</DrawerHeader>
          <DrawerBody>
            <CartItem />
          </DrawerBody>

          <DrawerFooter>
            <Button size="xs" variant="outline" mr={3} onClick={onClose}>
              Clear
            </Button>
            <Button variant="navButton">Continue to checkout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Cart;
