import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { homeLoader } from "./pages/Home";
import Account from "./pages/Account";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    index: true,
    loader: homeLoader,
  },
  {
    path: "/account",
    element: <Account />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
