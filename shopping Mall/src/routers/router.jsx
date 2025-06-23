import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import EventPage from "../pages/event/EventPage";
import EventOne from "../components/Event/EventOne";
import EventTwo from "../components/Event/EventTwo";

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },

  { path: "/about/member", element: <div>멤버</div> },
  { path: "/about/location", element: <div>회사위치</div> },

  {
    path: "/event",
    element: <EventPage />,
    children: [
      { path: "/event/one", element: <EventOne /> },
      { path: "/event/two", element: <EventTwo /> },
    ],
  },

  { path: "*", element: <div>404 not found</div> },
]);

export default router;
