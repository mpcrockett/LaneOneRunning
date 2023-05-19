import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Profile from "./pages/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route element={ <Home />} index />
      <Route path='account'>
        <Route element={<Account />} index/>
        <Route path="profile" element={<Profile />} />
      </Route>
    </Route>
  )
)

// let router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     index: true,
//     loader: homeLoader,
//   },
//   {
//     path: "/account",
//     element: <Account />
//   }
// ]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
