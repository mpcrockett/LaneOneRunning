import {
  DrawerBody,
  DrawerFooter,
  Button,
  Text,
  Box,
  Heading,
} from "@chakra-ui/react";
import { IoBag, IoBagOutline } from "react-icons/io5";
import CartItem from "./CartItem";
import SideDrawer from "../../components/SideDrawer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { clearCart } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const items = useAppSelector((state) => state.cart.items);
  const cartTotal = useAppSelector((state) => state.cart.cartTotal);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isEmpty = items.length === 0;
  const freeShipping = cartTotal > 75;

  return (
    <SideDrawer label={"Your Cart"} icon={!isEmpty ? IoBag : IoBagOutline} aria-label={"Cart"}>
      <DrawerBody>
        {!isEmpty &&
          items.map((item) => {
            return <CartItem item={item} />;
          })}
      </DrawerBody>
      <Box display='flex' flexDirection='column' alignItems='center'>
        {freeShipping && <Text size='xs' align='center' m='3'>Your order qualifies for free ground shipping!</Text>}
        {!isEmpty && <Heading size='md'>{`Your subtotal is: $${cartTotal}`}</Heading>}
        {!isEmpty && (
          <Button
            variant="navButton"
            onClick={() => navigate("/account/checkout")}
          >
            Continue to checkout
          </Button>
        )}
      </Box>
      <DrawerFooter>
        <Button
          size="xs"
          variant="outline"
          mr={3}
          onClick={() => dispatch(clearCart())}
        >
          Clear
        </Button>
      </DrawerFooter>
    </SideDrawer>
  );
}

export default Cart;
