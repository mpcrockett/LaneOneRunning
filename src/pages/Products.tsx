import { Products } from "../utils/Types";
import { getProducts } from "../utils/api";

export async function productsLoader(): Promise<Products> {
  return getProducts();
}

function Products() {
  return (
    <div>Products</div>
  )
}

export default Products