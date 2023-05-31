import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text
} from "@chakra-ui/react";
import { Address } from "./CheckoutForm";
import BackButton from "../../components/BackButton";
import { useAppSelector } from "../../store/hooks";
import { validateAddressSchema } from "./validateAddressSchema";
import { Formik } from "formik";
import FormItemBox from "../../components/FormItemBox";

interface Props {
  handleSubmitForm: () => void;
  handleSaveAddress: React.Dispatch<React.SetStateAction<Address>>;
  address: Address
}

function CheckoutFormBox(props: Props) {
  const user = useAppSelector((state) => state.user.user);

  const initialValues = {
    first_name: user.first_name || "",
    last_name: user.last_name || "",
    street_address_one: "",
    street_address_two: "",
    city: "",
    state: "",
    zipcode: "",
  };

  return (
    <Box
      bg="brand.cream.50"
      w="450px"
      h="800px"
      rounded="lg"
      opacity="0.96"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box position="relative" top="5" left="-200">
        <BackButton />
      </Box>
      <Box w="80%" padding="5">
        <Formik
          initialValues={initialValues}
          validationSchema={validateAddressSchema}
          onSubmit={(values: Address) => {
            props.handleSaveAddress(values);
          }}
        >
          {(props) => (
            <FormControl>
              <form onSubmit={props.handleSubmit}>
                <Heading size="md" mb="2rem" textAlign="center">
                  Shipping Address
                </Heading>

                <FormItemBox>
                  <FormControl isInvalid={!!props.errors.first_name}>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      size="xs"
                      type="text"
                      id="first_name"
                      name="first_name"
                      onChange={props.handleChange}
                      value={props.values.first_name}
                    />
                    <FormErrorMessage>
                      {props.errors.first_name}
                    </FormErrorMessage>
                  </FormControl>
                </FormItemBox>

                <FormItemBox>
                  <FormControl isInvalid={!!props.errors.last_name}>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      size="xs"
                      type="text"
                      id="last_name"
                      name="last_name"
                      onChange={props.handleChange}
                      value={props.values.last_name}
                    />
                    <FormErrorMessage>
                      {props.errors.last_name}
                    </FormErrorMessage>
                  </FormControl>
                </FormItemBox>

                <FormItemBox>
                  <FormControl isInvalid={!!props.errors.street_address_one}>
                    <FormLabel>Street Address</FormLabel>
                    <Input
                      size="xs"
                      type="text"
                      id="street_address_one"
                      name="street_address_one"
                      onChange={props.handleChange}
                      value={props.values.street_address_one}
                    />
                    <FormErrorMessage>
                      {props.errors.street_address_one}
                    </FormErrorMessage>
                  </FormControl>
                </FormItemBox>

                <FormItemBox>
                  <FormControl isInvalid={!!props.errors.street_address_two}>
                    <FormLabel>Street Address 2</FormLabel>
                    <Input
                      size="xs"
                      type="text"
                      id="street_address_two"
                      name="street_address_two"
                      onChange={props.handleChange}
                      value={props.values.street_address_two}
                    />
                    <FormErrorMessage>
                      {props.errors.street_address_two}
                    </FormErrorMessage>
                  </FormControl>
                </FormItemBox>

                <FormItemBox>
                  <FormControl isInvalid={!!props.errors.city}>
                    <FormLabel>City</FormLabel>
                    <Input
                      size="xs"
                      type="text"
                      id="city"
                      name="city"
                      onChange={props.handleChange}
                      value={props.values.city}
                    />
                    <FormErrorMessage>{props.errors.city}</FormErrorMessage>
                  </FormControl>
                </FormItemBox>

                <FormItemBox>
                  <FormControl isInvalid={!!props.errors.state}>
                    <FormLabel>State</FormLabel>
                    <Input
                      size="xs"
                      type="text"
                      id="state"
                      name="state"
                      onChange={props.handleChange}
                      value={props.values.state}
                    />
                    <FormErrorMessage>{props.errors.state}</FormErrorMessage>
                  </FormControl>
                </FormItemBox>

                <FormItemBox>
                  <FormControl isInvalid={!!props.errors.zipcode}>
                    <FormLabel>Zipcode</FormLabel>
                    <Input
                      size="xs"
                      type="text"
                      id="zipcode"
                      name="zipcode"
                      onChange={props.handleChange}
                      value={props.values.zipcode}
                    />
                    <FormErrorMessage>{props.errors.zipcode}</FormErrorMessage>
                  </FormControl>
                </FormItemBox>

                <Button
                  m={4}
                  colorScheme="teal"
                  variant="outline"
                  type="submit"
                  size="xs"
                  onClick={() => props.validateForm()}
                >
                  Save Address
                </Button>
              </form>
            </FormControl>
          )}
        </Formik>
      </Box>

      <Box
        w="80%"
        padding=""
        display="flex"
        flexDirection="column"
        alignItems="left"
        mb="5"
      >
        <Heading size="xs" alignSelf="center">
          Your Shipping Address
        </Heading>
        <Text fontSize="xs">{`${props.address?.first_name} ${props.address?.last_name}`}</Text>
        <Text fontSize="xs">{props.address?.street_address_one}</Text>
        <Text fontSize="xs">{props.address?.street_address_two}</Text>
        <Text fontSize="xs">{props.address?.city}</Text>
        <Text fontSize="xs">{props.address?.state}</Text>
        <Text fontSize="xs">{props.address?.zipcode}</Text>
      </Box>
    </Box>
  );
}

export default CheckoutFormBox;
