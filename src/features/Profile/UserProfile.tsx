import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getUserProfileAsync, logOutUserAsync } from "../../store/userSlice";
import UserProfileBox from "./UserProfileBox";

function UserProfile() {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.user);
  const status = useAppSelector((state) => state.user.getUser_status);

  useEffect(() => {
    dispatch(getUserProfileAsync());
  }, []);

  const handleLogOut = () => {
    dispatch(logOutUserAsync())
  }

  return (
    <UserProfileBox status={status} user={user} handleLogOut={handleLogOut}/>
  );
}

export default UserProfile;
