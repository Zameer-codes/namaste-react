import ReactDOM from "react-dom/client";
/**
 * it is being imported from react-dom/client since it is improvised in v18 for optimal rendering and supports backward compatibility
 * in v17 or less it is imported from react-dom
 */
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import MenuCard from "./components/Menucard";
import { lazy, Suspense } from "react";
import Login from "./components/Login";

const Cart = lazy(() => import("./components/Cart"));

const FoodApp = () => {
  return (
    <div className="h-[100%] w-[100%]">
      <Header />
      <div className=" h-[calc(100vh-100px)] overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:'/login',
    element: <Login/>
  },
  {
    path: "/",
    element: <FoodApp />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1>Loading ...</h1>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/menu/:resId",
        element: <MenuCard />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider
    router={appRouter}
  />
);
