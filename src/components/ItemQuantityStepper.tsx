import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

interface Props {
  default?: number
}

function ItemQuantityStepper(props: Props) {
  return (
    <NumberInput
      size="xs"
      step={1}
      defaultValue={props?.default || 0}
      min={0}
      max={30}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
}

export default ItemQuantityStepper