import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import Order from "../pages/Order";
import Navbar from "../components/Navbar";
import SignIn from "../pages/SignIn";
import Posts from "../pages/Posts";
import PostDetails from "../pages/PostDetails";

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
        path: "/:id",
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/posts/:id",
        element: <PostDetails />,
        loader: async ({ params }) =>
          fetch(`https://dummyjson.com/posts/${params.id}`),
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
