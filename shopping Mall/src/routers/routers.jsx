import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import DetailsPage from "../pages/DetailsPage";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/detail/:id", element: <DetailsPage /> },

  // 404 페이지
  { path: "*", element: <NotFoundPage /> },
]);
