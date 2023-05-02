import { useLoaderData } from "react-router-dom";
import Menu from "../components/Menu/Menu"
import { getMessage } from '../utils/mockApi'

interface HomeLoaderData {
  message: string
}

export async function homeLoader(): Promise<HomeLoaderData> {
  return getMessage()
}


function Home() {
  let data = useLoaderData() as HomeLoaderData;
  return (
    <>
    <Menu />
    <p>{data.message}</p>  
    </>
  )
};

export default Home