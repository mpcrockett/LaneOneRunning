// import Menu from "../features/Menu/Menu";
import { LoaderFunctionArgs, useLoaderData, useParams } from "react-router-dom";
import { getProductById } from "../utils/api";
import { ProductById } from "../utils/Types";
import ProductProfile from "../features/Product/ProductProfile";
import Breadcrumbs from "../components/Breadcrumbs";

export async function productLoader({
  params,
}: LoaderFunctionArgs): Promise<ProductById> {
  return getProductById(params);
}

function Product() {
  const data = useLoaderData() as ProductById;

  let params = useParams();
  console.log(params);

  return (
    <>
      {/* <Menu /> */}
      <Breadcrumbs />
      <ProductProfile {...data} />
    </>
  );
}

export default Product;
