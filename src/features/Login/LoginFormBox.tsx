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
  Link,
  Text,
} from "@chakra-ui/react";
import BackButton from "../../components/BackButton";
import { Formik } from "formik";
import { LoginFormValues } from "../../utils/Types";
import FormItemBox from "../../components/FormItemBox";
import { loginSchema } from "./validateLoginForm";
import GoogleSignIn from "../../components/GoogleSignIn";

interface Props {
  toggleLogin: () => void;
  handleSubmitForm: (values: LoginFormValues) => void;
  status: string | null;
}

function LoginForm(props: Props) {
  const initialValues = {
    email: "",
    password: "",
  };

  const isError = props.status === "failed";

  return (
    <Center bg="brand.cream.50" w="650px" h="800px" rounded="lg" opacity="0.96">
      <Box w="80%" display="flex" flexDirection="column">
        <BackButton />
        <Heading size="sm" mb="2rem" textAlign="center">
          Log In to Your Account
        </Heading>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={(values: LoginFormValues) => {
            props.handleSubmitForm(values);
          }}
        >
          {(props) => (
            <FormControl isInvalid={isError}>
              <form onSubmit={props.handleSubmit}>
                <FormItemBox>
                  <FormControl>
                    <FormLabel size="xs">Email Address</FormLabel>
                    <Input
                      size="xs"
                      type="text"
                      id="email"
                      name="email"
                      onChange={props.handleChange}
                      value={props.values.email}
                    />
                  </FormControl>
                </FormItemBox>
                <FormItemBox>
                  <FormControl>
                    <FormLabel size="xs">Password</FormLabel>
                    <Input
                      size="xs"
                      type="password"
                      id="password"
                      name="password"
                      onChange={props.handleChange}
                      value={props.values.password}
                    />
                  </FormControl>
                  <FormHelperText>
                    Forgot your password?
                    <Link color="teal.500" href="#" ml="5px">
                      Reset it here.
                    </Link>
                  </FormHelperText>
                  <FormErrorMessage>
                    Invalid email or password.
                  </FormErrorMessage>
                </FormItemBox>
                <Button
                  m={4}
                  colorScheme="teal"
                  variant="outline"
                  type="submit"
                  size="sm"
                  onClick={() => props.validateForm()}
                >
                  Log In
                </Button>
              </form>
            </FormControl>
          )}
        </Formik>

        <Box alignSelf="center" display='flex' flexDirection='column' alignItems='center'>
          <Text>or</Text>

          <Box m="4">
            <GoogleSignIn />
          </Box>

          <Button onClick={() => props.toggleLogin()} variant="link" size="xs">
            Don't have an account? Click here to create one.
          </Button>
        </Box>
      </Box>
    </Center>
  );
}

export default LoginForm;
