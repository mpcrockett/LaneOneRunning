import { useLoaderData } from "react-router-dom";
import { Products } from "../utils/Types";
import { getProducts } from "../utils/api";
import Menu from "../features/Menu/Menu";
import ProductsGrid from "../features/Products/ProductsGrid";

export async function productsLoader(): Promise<Products> {
  return getProducts();
}

function ProductsPage() {
  const data = useLoaderData() as Products;

  return (
    <>
      <Menu />
      <ProductsGrid data={data} />
    </>
  )
}

export default ProductsPage;