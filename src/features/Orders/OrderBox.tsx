import { Box, Heading, Text } from "@chakra-ui/react";
import useOrders from "../../hooks/useOrders";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import OrderCard from "./OrderCard";
import BackButton from "../../components/BackButton";

function OrderBox() {
  const { isLoading, data, error } = useOrders();

  return (
    <Box
      bg="brand.cream.50"
      w="800px"
      h="800px"
      rounded="lg"
      opacity="0.96"
      display="flex"
      flexDirection="column"
      alignItems="center"
      margin="25"
    >
      <Box position="relative" top="5" left="0">
        <BackButton />
      </Box>
      <Heading size="md" m="5">
        Your Orders
      </Heading>
      {isLoading && <LoadingSkeleton height="20" />}
      {error && (
        <Text>
          We're sorry. We had a problem fetching your orders. Please try again
          later.
        </Text>
      )}
      <Box display="flex" flexDirection="column" alignItems="center">
        {data?.map((order) => {
          return <OrderCard order={order} />;
        })}
      </Box>
    </Box>
  );
}

export default OrderBox;
