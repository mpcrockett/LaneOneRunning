import { Formik } from "formik";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import BackButton from "../../components/BackButton";
import FormItemBox from "../../components/FormItemBox";
import { registerUserSchema } from "./validateRegistrationForm";
import { RegisterFormValues } from "../../utils/Types";
import GoogleSignUp from "../../components/GoogleSignUp";

interface Props {
  handleSubmitForm: (values: RegisterFormValues) => void;
  toggleLogin: () => void;
  status: string | null;
}

function RegisterFormBox(props: Props) {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  return (
    <Center bg="brand.cream.50" w="650px" h="800px" rounded="lg" opacity="0.96">
      <Box w="80%">
        <BackButton />
        <Formik
          initialValues={initialValues}
          validationSchema={registerUserSchema}
          onSubmit={(values: RegisterFormValues) => {
            props.handleSubmitForm(values);
          }}
        >
          {(props) => (
            <FormControl>
              <form onSubmit={props.handleSubmit}>
                <Heading size="md" mb="2rem" textAlign="center">
                  Create a New Account
                </Heading>
                <FormItemBox>
                  <FormControl isInvalid={!!props.errors.firstName}>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      size='xs'
                      type="text"
                      id="firstName"
                      name="firstName"
                      onChange={props.handleChange}
                      value={props.values.firstName}
                    />
                    <FormErrorMessage>
                      {props.errors.firstName}
                    </FormErrorMessage>
                  </FormControl>
                </FormItemBox>

                <FormItemBox>
                  <FormControl isInvalid={!!props.errors.lastName}>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      size='xs'
                      type="text"
                      id="lastName"
                      name="lastName"
                      onChange={props.handleChange}
                      value={props.values.lastName}
                    />
                    <FormErrorMessage>{props.errors.lastName}</FormErrorMessage>
                  </FormControl>
                </FormItemBox>

                <FormItemBox>
                  <FormControl isInvalid={!!props.errors.email}>
                    <FormLabel>Email address</FormLabel>
                    <Input
                      size='xs'
                      type="text"
                      id="email"
                      name="email"
                      onChange={props.handleChange}
                      value={props.values.email}
                    />
                  </FormControl>
                  <FormErrorMessage>{props.errors.email}</FormErrorMessage>
                  {!!props.errors.email == false && (
                    <FormHelperText>
                      We'll never share your email.
                    </FormHelperText>
                  )}
                </FormItemBox>

                <FormItemBox>
                  <FormControl isInvalid={!!props.errors.password}>
                    <FormLabel>Password</FormLabel>
                    <Input
                      size='xs'
                      type="password"
                      id="password"
                      name="password"
                      onChange={props.handleChange}
                      value={props.values.password}
                    />
                  </FormControl>
                  <FormHelperText>
                    Passwords should be at least 8 characters and include at
                    least one number, special character, and capital letter.
                  </FormHelperText>
                </FormItemBox>

                <FormItemBox>
                  <FormControl isInvalid={!!props.errors.confirm_password}>
                    <FormLabel>Re-enter password</FormLabel>
                    <Input
                      size='xs'
                      type="password"
                      id="confirm_password"
                      name="confirm_password"
                      onChange={props.handleChange}
                      value={props.values.confirm_password}
                    />
                    <FormErrorMessage>
                      {props.errors.confirm_password}
                    </FormErrorMessage>
                  </FormControl>
                </FormItemBox>
                <Button
                  m={4}
                  colorScheme="teal"
                  variant="outline"
                  type="submit"
                  onClick={() => props.validateForm()}
                >
                  Submit
                </Button>
              </form>
            </FormControl>
          )}
        </Formik>
        <Box
          alignSelf="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Text>or</Text>

          <Box m="4">
            <GoogleSignUp />
          </Box>

          <Button onClick={() => props.toggleLogin()} variant="link" size="xs">
            Already have an account? Click here to log in.
          </Button>
        </Box>
      </Box>
    </Center>
  );
}

export default RegisterFormBox;
