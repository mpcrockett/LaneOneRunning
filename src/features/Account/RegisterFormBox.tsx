import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Center,
  Heading
} from "@chakra-ui/react";
import FormItemBox from "../../components/FormItemBox";
import NavButton from "../../components/NavButton";
import BackButton from "../../components/BackButton";

interface Props {
  submitHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => void;
}

function RegisterFormBox(props: Props) {
  return (
    <Center bg="brand.cream.50" w="650px" h="90%" rounded="lg" opacity="0.96">
      <Box w="80%">
        <BackButton />
        <FormControl>
          <Heading size="md" mb="2rem" textAlign ='center'>
            Create a New Account
          </Heading>
          <FormItemBox>
            <FormLabel>First Name</FormLabel>
            <Input type="text" />
          </FormItemBox>
          <FormItemBox>
            <FormLabel>Last Name</FormLabel>
            <Input type="text" />
          </FormItemBox>
          <FormItemBox>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormItemBox>
          <FormItemBox>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
            <FormHelperText>
              Passwords should be at least 8 characters and include at least two
              numbers, special characters, capital letters
            </FormHelperText>
          </FormItemBox>
          <FormItemBox>
            <FormLabel>Re-enter password</FormLabel>
            <Input type="password" />
          </FormItemBox>
          <Button
            m={4}
            colorScheme="teal"
            variant='outline'
            type="submit"
            onClick={(e) => props.submitHandler(e)}
          >
            Submit
          </Button>
          <NavButton clickHandler={() => console.log('Clicked!')} label='Already registered? Click here to log in.' />
        </FormControl>
      </Box>
    </Center>
  );
}

export default RegisterFormBox;
