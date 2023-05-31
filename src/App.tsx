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
import AuthCallback from "./pages/AuthCallback";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import Orders from "./pages/Orders";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<Home />} index />
      <Route path="/callback">
        <Route element={<AuthCallback />} index />
      </Route>
      <Route path="/success">
        <Route element={<Success />} index />
      </Route>
      <Route path="/cancel">
        <Route element={<Cancel />} index />
      </Route>
      <Route path="account">
        <Route element={<Account />} index />
        <Route path="profile" element={<Profile />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="orders" element={<Orders />} />
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
