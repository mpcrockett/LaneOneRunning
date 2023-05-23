import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Profile from "./pages/Profile";
import ProductsPage, {
  productsLoader,
  productsByGenderLoader,
  productsByCategoryLoader,
  productsBySubcategoryLoader
} from "./pages/Products";
import Product, { productLoader } from "./pages/Product";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<Home />} index />
      <Route path="account">
        <Route element={<Account />} index />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="products">
        <Route element={<ProductsPage />} index loader={productsLoader} />
        <Route
          path=":gender"
          element={<ProductsPage />}
          loader={productsByGenderLoader}
        />
        <Route
          path=":gender/:category"
          element={<ProductsPage />}
          loader={productsByCategoryLoader}
        />
        <Route
          path=":gender/:category/:subcategory"
          element={<ProductsPage />}
          loader={productsBySubcategoryLoader}
        />
        <Route
          path=":gender/:category/:subcategory/:id"
          element={<Product />}
          loader={productLoader}
        />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
