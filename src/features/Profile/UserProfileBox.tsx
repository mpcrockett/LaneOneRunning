import {
  DrawerBody,
  Button,
  Stack,
  StackDivider,
  Box,
  Text,
} from "@chakra-ui/react";
import { BsPerson, BsPersonFill } from "react-icons/bs";
import { UserProfile } from "../../utils/Types";
import UserProfileSkeleton from "./UserProfileSkeleton";
import NavButton from "../../components/NavButton";
import SideDrawer from "../../components/SideDrawer";
import { useNavigate } from "react-router-dom";

interface Props {
  handleLogOut: () => void;
  user: UserProfile | null;
  status: string | null;
}

function UserProfileBox(props: Props) {
  const navigate = useNavigate();
  return (
    <SideDrawer label={"Your Account"} icon={props.user === null ? BsPerson: BsPersonFill}>
     { props.status === 'pending' ? <UserProfileSkeleton /> : <DrawerBody pt="50px">
        <Stack mb='15px'>
          <Text pt="2" fontSize="sm">
            {`Logged in as: ${props.user?.first_name} ${props.user?.last_name}`}
          </Text>
          <Text fontSize="xs">{props.user?.email}</Text>
          {props.user?.loyalty_acct !== null && (
            <Text fontSize="xs">{`Your rewards account number is ${props.user?.loyalty_acct}`}</Text>
          )}
        </Stack>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <NavButton
              label={"Your Orders"}
              clickHandler={() => navigate('/account/orders')}
            />
          </Box>
          <Button m={4} colorScheme="teal" variant="outline" onClick={props.handleLogOut}>
            Log Out
          </Button>
        </Stack>
      </DrawerBody> }
    </SideDrawer>
  );
}

export default UserProfileBox;
