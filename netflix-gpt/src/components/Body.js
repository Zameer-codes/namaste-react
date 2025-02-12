import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { HOME_ROUTE, BROWSE_ROUTE } from "../utils/constants";

const router = createBrowserRouter([
  {
    path: HOME_ROUTE,
    element: <Login />,
  },
  {
    path: BROWSE_ROUTE,
    element: <Browse />,
  },
]);

const Body = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default Body;
