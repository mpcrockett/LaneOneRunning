import BackgroundBox from "../components/BackgroundBox";
import { Box } from "@chakra-ui/react";
import RegisterFormContainer from "../features/Account/RegisterFormContainer";
import { useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Account() {
  const { loggedIn } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if(loggedIn) {
      navigate('/')
    }
  }, [loggedIn]);

  return (
    <BackgroundBox>
      <Box w='100%' h='100%' display='flex' justifyContent='center' alignItems='center'>
        <RegisterFormContainer />
      </Box>
    </BackgroundBox>
  );
}

export default Account