import App from "@/App";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Product from "@/pages/Product";
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
      }
    ],
  },
];

export default routesConfig;