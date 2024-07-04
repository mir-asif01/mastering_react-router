import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import Order from "../pages/Order";
import Navbar from "../components/Navbar";
import SignIn from "../pages/SignIn";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "sign-in",
        element: <SignIn></SignIn>,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
