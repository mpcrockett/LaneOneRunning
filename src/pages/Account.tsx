import BackgroundBox from "../components/BackgroundBox";
import { Box } from "@chakra-ui/react";
import RegisterForm from "../features/Account/RegisterForm";

function Account() {
  return (
    <BackgroundBox>
      <Box w='100%' h='100%' display='flex' justifyContent='center' alignItems='center'>
        <RegisterForm />
      </Box>
    </BackgroundBox>
  );
}

export default Account