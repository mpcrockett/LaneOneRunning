import {
  Box,
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Link,
} from "@chakra-ui/react";
import NavButton from "../../components/NavButton";
import BackButton from "../../components/BackButton";
import { Formik } from "formik";
import { LoginFormValues } from "../../utils/Types";
import FormItemBox from "../../components/FormItemBox";
import { loginSchema } from "./validateLoginForm";

interface Props {
  toggleLogin: () => void;
  handleSubmitForm: (values: LoginFormValues) => void;
}

function LoginForm(props: Props) {
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <Center bg="brand.cream.50" w="650px" h="800px" rounded="lg" opacity="0.96">
      <Box w="80%">
        <BackButton />
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={(values: LoginFormValues) => {
            props.handleSubmitForm(values);
          }}
        >
          {(props) => (
            <FormControl>
              <form onSubmit={props.handleSubmit}>
                <Heading size="md" mb="2rem" textAlign="center">
                  Log In to Your Account
                </Heading>
                <FormItemBox>
                  <FormControl>
                    <FormLabel>Email Address</FormLabel>
                    <Input
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
                    Forgot your password?
                    <Link color="teal.500" href="#" ml="5px">
                      Reset it here.
                    </Link>
                  </FormHelperText>
                </FormItemBox>
                <Button
                  m={4}
                  colorScheme="teal"
                  variant="outline"
                  type="submit"
                  onClick={() => props.validateForm()}
                >
                  Log In
                </Button>
              </form>
            </FormControl>
          )}
        </Formik>
        <NavButton
          clickHandler={() => props.toggleLogin()}
          label="Don't have an account? Click here to create one."
        />
      </Box>
    </Center>
  );
}

export default LoginForm;
