import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react';

function CartItem() {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "10%", sm: "80px" }}
        src=""
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="xs">Item</Heading>

          <Text py="1" fontSize="0.75rem">
            This is the item description
          </Text>

          <Text fontSize="0.75rem">Size:</Text>

          <Text fontSize="0.75rem">Color:</Text>
        </CardBody>

        <CardFooter>
          <Text fontSize="0.75rem" marginRight={"3"}>
            Quantity:
          </Text>

          <NumberInput size="xs" step={1} defaultValue={15} min={0} max={30}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

        </CardFooter>
        
      </Stack>

    </Card>
  );
}

export default CartItem