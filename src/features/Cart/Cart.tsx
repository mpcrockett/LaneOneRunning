import { DrawerBody, DrawerFooter, Button } from "@chakra-ui/react";
import { IoBagOutline } from "react-icons/io5";
import CartItem from "./CartItem";
import SideDrawer from "../../components/SideDrawer";
import { useAppSelector } from "../../store/hooks";

function Cart() {
  const items = useAppSelector((state) => state.cart.items);

  return (
    <SideDrawer label={"Your Cart"} icon={IoBagOutline}>
      <DrawerBody>
        {items.length > 0 && items.map((item) => {
          return <CartItem item={item} />
        })
        }
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
