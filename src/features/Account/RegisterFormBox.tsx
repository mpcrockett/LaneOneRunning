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
} from "@chakra-ui/react";
import BackButton from "../../components/BackButton";
import FormItemBox from "../../components/FormItemBox";
import NavButton from "../../components/NavButton";
import { registerUserSchema } from "./validateRegistrationForm";
import { RegisterFormValues } from "../../utils/Types";

interface Props {
  handleSubmitForm: (values: RegisterFormValues) => void,
  toggleLogin: () => void,
  status: string | null
}

function RegisterForm(props: Props) {
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
        <NavButton
          clickHandler={() => props.toggleLogin()}
          label="Already registered? Click here to log in."
        />
      </Box>
    </Center>
  );
}

export default RegisterForm;
