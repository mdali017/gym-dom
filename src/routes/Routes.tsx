import MainLayout from "@/components/layout/MainLayout";
import Cart from "@/pages/Cart/Cart";
import Home from "@/pages/Home/Home";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";
import Products from "@/pages/Products/Products";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/details",
        element: <ProductDetails />,
      },
      {
        path: "/carts",
        element: <Cart />
      },
    ],
  },
]);
