import React from "react";
import "../styles/header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header">
          <div className="header-logo">
            <Link to="/">로고</Link>
          </div>
          <div className="header-nav">
            <li>
              <Link to="/detail">메뉴1</Link>
            </li>
            <li>
              <Link to="/detail">메뉴1</Link>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
