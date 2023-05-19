import Menu from "../features/Menu/Menu"
import { getProductCategories } from '../utils/api'
import BackgroundBox from "../components/BackgroundBox";
import { Gender } from "../utils/Types";

export async function homeLoader(): Promise<Gender> {
  return getProductCategories()
}

function Home() {
  return (
    <BackgroundBox>
      <Menu />
    </BackgroundBox>
  );
};

export default Home