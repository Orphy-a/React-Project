import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";

const EventPage = () => {
  return (
    <>
      <Header />
      <div>오늘의 이벤트</div>
      <Outlet />
    </>
  );
};

export default EventPage;
