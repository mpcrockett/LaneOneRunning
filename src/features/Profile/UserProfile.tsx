import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getUserProfileAsync, logOutUserAsync } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import SideDrawer from "../../components/SideDrawer";
import { BsPerson, BsPersonFill } from "react-icons/bs";
import UserProfileSkeleton from "./UserProfileSkeleton";
import { Box, Button, DrawerBody, Stack, StackDivider, Text } from "@chakra-ui/react";
import NavButton from "../../components/NavButton";

function UserProfile() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, loggedIn, getUser_status } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserProfileAsync());
  }, [dispatch]);

  const handleLogOut = () => {
    dispatch(logOutUserAsync())
  }

  return (
    // <UserProfileBox status={status} user={user} handleLogOut={handleLogOut}/>
    <SideDrawer label={"Your Account"} icon={loggedIn ? BsPersonFill : BsPerson}>
      {getUser_status === 'pending' && <UserProfileSkeleton />}
      {loggedIn && <DrawerBody pt="50px">
        <Stack mb='15px'>
          {<Text pt="2" fontSize="sm">
            {`Logged in as: ${user?.first_name} ${user?.last_name}`}
          </Text>}
          <Text fontSize="xs">{user?.email}</Text>
          {user?.loyalty_acct !== null && (
            <Text fontSize="xs">{`Your rewards account number is ${user?.loyalty_acct}`}</Text>
          )}
        </Stack>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <NavButton
              label={"Your Orders"}
              clickHandler={() => navigate('/account/orders')}
            />
          </Box>
          <Button m={4} colorScheme="teal" variant="outline" onClick={handleLogOut}>
            Log Out
          </Button>
        </Stack>
      </DrawerBody>}
    </SideDrawer>
  );
}

export default UserProfile;
