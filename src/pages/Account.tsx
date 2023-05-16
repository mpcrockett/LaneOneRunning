import BackgroundBox from "../components/BackgroundBox";
import { Box, useBoolean } from "@chakra-ui/react";
import RegisterFormContainer from "../features/Register/RegisterForm";
import { useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LoginForm from "../features/Login/LoginForm";

function Account() {
  const { loggedIn } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useBoolean();

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);

  return (
    <BackgroundBox>
      <Box
        w="100%"
        h="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {showLogin ? (
          <LoginForm toggleLogin={setShowLogin.off} />
        ) : (
          <RegisterFormContainer toggleLogin={setShowLogin.on} />
        )}
      </Box>
    </BackgroundBox>
  );
}

export default Account;
