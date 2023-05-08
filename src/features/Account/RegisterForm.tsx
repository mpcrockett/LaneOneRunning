import { useFormik } from "formik";
import { Box, Button, Center, FormControl, FormHelperText, FormLabel, Heading, Input } from "@chakra-ui/react";
import BackButton from "../../components/BackButton";
import FormItemBox from "../../components/FormItemBox";
import NavButton from "../../components/NavButton";


interface Values {
  firstName: string,
  lastName: string,
  email: string,
  password: string
}

function RegisterForm() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    onSubmit: (values: Values) => {
      console.log(JSON.stringify(values, null, 3))
    },
  })

  return (
    <Center bg="brand.cream.50" w="650px" h="90%" rounded="lg" opacity="0.96">
      <Box w="80%">
        <BackButton />
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <Heading size="md" mb="2rem" textAlign="center">
              Create a New Account
            </Heading>
            <FormItemBox>
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
            </FormItemBox>
            <FormItemBox>
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
            </FormItemBox>
            <FormItemBox>
              <FormLabel>Email address</FormLabel>
              <Input
                type="text"
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormItemBox>
            <FormItemBox>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <FormHelperText>
                Passwords should be at least 8 characters and include at least
                two numbers, special characters, capital letters
              </FormHelperText>
            </FormItemBox>
            <FormItemBox>
              <FormLabel>Re-enter password</FormLabel>
              <Input type="password" />
            </FormItemBox>
            <Button m={4} colorScheme="teal" variant="outline" type="submit">
              Submit
            </Button>
            <NavButton
              clickHandler={() => console.log("Clicked!")}
              label="Already registered? Click here to log in."
            />
          </FormControl>
        </form>
      </Box>
    </Center>
  );
}

export default RegisterForm