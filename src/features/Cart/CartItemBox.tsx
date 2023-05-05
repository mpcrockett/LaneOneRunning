import { Card, Image, Stack, CardBody, Heading, Text, CardFooter } from "@chakra-ui/react";
import ItemQuantityStepper from "../../components/ItemQuantityStepper";

interface Props {
  item: {
    image: string,
    imageAlt?: string
    name: string,
    size: string,
    color: string,
    quantity: number,
  }
}

function CartItemBox(props: Props) {
  const { item } = props;
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "10%", sm: "80px" }}
        src={item.image}
        alt={item?.imageAlt}
      />
      <Stack>
        <CardBody>
          <Heading size="xs">{item.name}</Heading>
          <Text fontSize="0.75rem">{`Size: ${item.size}`}</Text>
          <Text fontSize="0.75rem">{`Color: ${item.color}`}</Text>
        </CardBody>
        <CardFooter>
          <Text fontSize="0.75rem" marginRight={"3"}>
            Quantity:
          </Text>
          <ItemQuantityStepper default={item.quantity} />
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default CartItemBox