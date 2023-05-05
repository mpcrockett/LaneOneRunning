import RegisterFormBox from "../features/Account/RegisterFormBox";
import BackgroundBox from "../components/BackgroundBox";
import { Box } from "@chakra-ui/react";

function Account() {
  return (
    <BackgroundBox>
      <Box w='100%' h='100%' display='flex' justifyContent='center' alignItems='center'>
        <RegisterFormBox />
      </Box>
    </BackgroundBox>
  );
}

export default Account