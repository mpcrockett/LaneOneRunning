import { Card, Image, Stack, CardBody, Heading, Text, CardFooter } from "@chakra-ui/react";
import ItemQuantityStepper from "../../components/ItemQuantityStepper";
import { cartItem } from "../../store/cartSlice";

interface Props {
  item: cartItem;
  handleQuantityChange: (valueAsString: string, valueAsNumber: number) => void;
}

function CartItemBox(props: Props) {
  const { item, handleQuantityChange } = props;
  const itemTotal = item.price * item.quantity;

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "10%", sm: "80px" }}
        src={item.url}
        alt={`${item.brand} ${item.name} in ${item.color}`}
      />
      <Stack>
        <CardBody>
          <Heading size="xs">{`${item.brand} ${item.name}`}</Heading>
          <Text fontSize="0.75rem">{`Size: ${item.size}`}</Text>
          <Text fontSize="0.75rem">{`Color: ${item.color}`}</Text>
          <Text fontSize="0.75rem">{`$${itemTotal}`}</Text>
        </CardBody>
        <CardFooter>
          <Text fontSize="0.75rem" marginRight={"3"}>
            Quantity:
          </Text>
          <ItemQuantityStepper
            default={item.quantity}
            onChangeHandler={handleQuantityChange}
          />
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default CartItemBox