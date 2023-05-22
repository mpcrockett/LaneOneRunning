import Menu from "../features/Menu/Menu"
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { getProductById } from "../utils/api";
import { ProductById } from "../utils/Types";

export async function productLoader({ params }: LoaderFunctionArgs): Promise<ProductById> {
  return getProductById(params);
}

function Product() {
  const data = useLoaderData() as ProductById;

  return (
    <Menu />
  )
}

export default Product