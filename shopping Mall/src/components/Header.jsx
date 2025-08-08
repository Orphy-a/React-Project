import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";
import { useStore } from "../store/useStore.jsx";

const Header = () => {
  const cart = useStore((state) => state.cart);

  console.log(cart);

  const cartCount = cart ? cart.length : 0;

  return (
    <>
      <div className="header-container">
        <div className="header">
          <div className="header-logo">
            <Link to="/">로고</Link>
          </div>
          <div className="header-nav">
            <li>
              <Link to="/cart">장바구니({cartCount})</Link>
            </li>
            <li>
              <Link to="/detail">다른 메뉴 뭘로 하지</Link>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
