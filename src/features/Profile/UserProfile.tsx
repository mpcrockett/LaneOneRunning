import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getUserProfileAsync } from "../../store/userSlice";
import UserProfileBox from "./UserProfileBox";

function UserProfile() {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.user);
  const status = useAppSelector((state) => state.user.getUser_status);

  useEffect(() => {
    dispatch(getUserProfileAsync());
  }, []);

  return (
    <UserProfileBox status={status} user={user} />
  );
}

export default UserProfile;
