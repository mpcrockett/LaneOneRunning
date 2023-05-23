import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { Products } from "../utils/Types";
import { getProducts, getProductsByCategory, getProductsByGender, getProductsBySubcategory } from "../utils/api";
import Menu from "../features/Menu/Menu";
import ProductsGrid from "../features/Products/ProductsGrid";
import Breadcrumbs from "../components/Breadcrumbs";

export async function productsLoader(): Promise<Products> {
  return getProducts();
}

export async function productsByGenderLoader({
    params,
  }: LoaderFunctionArgs): Promise<Products> {
  return getProductsByGender(params);
}

export async function productsByCategoryLoader({
  params,
}: LoaderFunctionArgs): Promise<Products> {
  return getProductsByCategory(params);
}

export async function productsBySubcategoryLoader({
  params,
}: LoaderFunctionArgs): Promise<Products> {
  return getProductsBySubcategory(params);
}

function ProductsPage() {
  const data = useLoaderData() as Products;

  return (
    <>
      <Menu />
      <Breadcrumbs />
      <ProductsGrid data={data} />
    </>
  );
}

export default ProductsPage;
