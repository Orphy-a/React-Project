import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import DetailsPage from "../pages/DetailsPage";
import NotFoundPage from "../pages/NotFoundPage";
import CartPage from "../pages/CartPage";

export const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/detail/:id", element: <DetailsPage /> },
  { path: "/cart", element: <CartPage /> },

  // 404 페이지
  { path: "*", element: <NotFoundPage /> },
]);
