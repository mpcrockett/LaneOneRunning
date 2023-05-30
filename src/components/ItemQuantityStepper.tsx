import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

interface Props {
  default?: number;
  onChangeHandler: (valueAsString: string, valueAsNumber: number) => void;
}

function ItemQuantityStepper(props: Props) {
  return (
    <NumberInput
      size="xs"
      step={1}
      defaultValue={props?.default || 0}
      min={0}
      max={30}
      onChange={props.onChangeHandler}
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