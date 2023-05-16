import BackgroundBox from "../components/BackgroundBox";
import UserProfile from "../features/Profile/UserProfile";
import Menu from "../features/Menu/Menu";

function Profile() {
  return (
    <BackgroundBox>
      <Menu />
      <UserProfile />
    </BackgroundBox>
  );
}

export default Profile;
