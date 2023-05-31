import { Box } from "@chakra-ui/react";
import BackgroundBox from "../components/BackgroundBox";
import CheckoutForm from "../features/Checkout/CheckoutForm";

function Checkout() {
  return (
    <BackgroundBox>
      <Box
        w="100%"
        h="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CheckoutForm />
      </Box>
    </BackgroundBox>
  );
}

export default Checkout;
