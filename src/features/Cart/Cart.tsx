import { DrawerBody, DrawerFooter, Button } from "@chakra-ui/react";
import { IoCartOutline } from "react-icons/io5";
import CartItem from "./CartItem";
import SideDrawer from "../../components/SideDrawer";

function Cart() {
  return (
    <SideDrawer label={"Your Cart"} icon={IoCartOutline}>
      <DrawerBody>
        <CartItem />
      </DrawerBody>
      <DrawerFooter>
        <Button size="xs" variant="outline" mr={3}>
          Clear
        </Button>
        <Button variant="navButton">Continue to checkout</Button>
      </DrawerFooter>
    </SideDrawer>
  );
}

export default Cart;
