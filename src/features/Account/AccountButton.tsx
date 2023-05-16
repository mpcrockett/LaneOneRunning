import { BsPerson } from "react-icons/bs";
import { Icon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { Center } from "@chakra-ui/react";

function AccountButton() {
  return (
    <Center width="16px" height="16px" m="10px">
      <Link to={"/account"}>
        <Icon boxSize={6} as={BsPerson} />
      </Link>
    </Center>
  );
}

export default AccountButton;
