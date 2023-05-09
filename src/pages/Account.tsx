import BackgroundBox from "../components/BackgroundBox";
import { Box } from "@chakra-ui/react";
import RegisterFormContainer from "../features/Account/RegisterFormContainer";
import { useAppSelector } from "../store/hooks";
import Profile from "./Profile";

function Account() {
  const { loggedIn } = useAppSelector((state) => state.user);

  return (
    <BackgroundBox>
      <Box w='100%' h='100%' display='flex' justifyContent='center' alignItems='center'>
        {loggedIn ? <Profile /> : <RegisterFormContainer />}
      </Box>
    </BackgroundBox>
  );
}

export default Account