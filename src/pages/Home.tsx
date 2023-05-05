import { useLoaderData } from "react-router-dom";
import Menu from "../features/Menu/Menu"
import { getMessage } from '../utils/mockApi'
import BackgroundBox from "../components/BackgroundBox";

interface HomeLoaderData {
  message: string
}

export async function homeLoader(): Promise<HomeLoaderData> {
  return getMessage()
}

function Home() {
  let data = useLoaderData() as HomeLoaderData;

  return (
    <BackgroundBox>
      <Menu />
      <p>{data.message}</p>
    </BackgroundBox>
  );
};

export default Home