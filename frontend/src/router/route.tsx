import App from "@/App";
import Home from "@/pages/home";
import NotFound from "@/pages/NotFound";
import Product from "@/pages/Product";
import Cart from "@/pages/Cart";
import { type RouteObject } from "react-router-dom";

const routesConfig: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "product",
        element: <Product />
      },
      {
        path: "cart",
        element: <Cart />
      }
    ],
  },
];

export default routesConfig;