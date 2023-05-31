import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import CheckoutFormBox from "./CheckoutFormBox";
import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import CartItemBox from "../Cart/CartItemBox";
import { updateQuantity } from "../../store/cartSlice";
import CartItem from "../Cart/CartItem";
import NavButton from "../../components/NavButton";

export type Address = {
  first_name?: string;
  last_name?: string;
  street_address_1?: string;
  street_address_2?: string;
  city?: string;
  state?: string;
  zipcode?: string;
};

function CheckoutForm() {
  const items = useAppSelector((state) => state.cart.items);
  const cartTotal = useAppSelector((state) => state.cart.cartTotal);
  const [address, setAddress] = useState<Address>({});

  const handleSubmitForm = () => {
    console.log(address);
    console.log(items);
    console.log("Submitted");
  };

  return (
    <>
      <CheckoutFormBox
        handleSubmitForm={handleSubmitForm}
        handleSaveAddress={setAddress}
        address={address}
      />
      <Box
        ml="2"
        bg="brand.cream.50"
        w="550px"
        h="800px"
        rounded="lg"
        opacity="0.96"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box padding="5">
          <Heading size="md" mb="2rem" textAlign="center">
            Your Order
          </Heading>
          <Box overflow="scroll">
            {items.map((item) => {
              return <CartItem item={item} />;
            })}
          </Box>
        </Box>
        <Box padding="5" width="100%">
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            padding="5"
          >
            <Heading size="sm">Subtotal</Heading>
            <Text>{`$${cartTotal}`}</Text>
          </Box>
        </Box>
        <Box padding='5'>
          <NavButton
            label={"Continue to payment"}
            clickHandler={() => console.log("clicked")}
          />
        </Box>
      </Box>
    </>
  );
}

export default CheckoutForm;
