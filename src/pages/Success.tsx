import { useNavigate } from "react-router-dom";
import NavButton from "../components/NavButton";
import BackgroundBox from "../components/BackgroundBox";
import { Box, Heading } from "@chakra-ui/react";

function Success() {
  const navigate = useNavigate();

  return (
    <BackgroundBox>
      <Box
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Box
          bg="brand.cream.50"
          width="650px"
          height="450px"
          alignSelf="center"
          borderRadius='lg'
          display='flex'
          flexDirection='column'
          alignContent='center'
          justifyContent='center'
        >
          <Heading textAlign='center'>Your order was successful!</Heading>
          <NavButton
            label={"Click here to return to the homepage."}
            clickHandler={() => navigate("/")}
          />
        </Box>
      </Box>
    </BackgroundBox>
  );
}

export default Success;
