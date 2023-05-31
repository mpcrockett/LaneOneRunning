import { Box, Flex, Text, Image, Card } from "@chakra-ui/react"
import { OrderObject } from "../../utils/Types"

interface Props {
  order: OrderObject
}

function OrderCard(props: Props) {
  const { order } = props;
  return (
    <Card width="750px" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box p="6">
        <Text fontSize="xl" fontWeight="bold">
          Order ID: {order.order_id}
        </Text>
        <Text>Address ID: {order.address_id}</Text>
      </Box>

      {order.items.map((item) => (
        <Flex p="4" key={item.item_id}>
          <Image src={item.url} alt={item.name} boxSize="100px" mr="4" />

          <Box>
            <Text fontSize="xl">{item.name}</Text>
            <Text fontSize="sm">{item.brand}</Text>
            <Text fontSize="sm">{item.size}</Text>
            <Text fontSize="sm">{item.color}</Text>
            <Text fontSize="sm">Quantity: {item.quantity}</Text>
            <Text fontSize="sm">Price: {item.price}</Text>
          </Box>
        </Flex>
      ))}
    </Card>
  );
}

export default OrderCard