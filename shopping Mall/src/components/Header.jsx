import React from "react";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-logo">
          <a href="#">로고</a>
        </div>
        <div className="header-nav">
          <li>
            <a href="#">메뉴1</a>
          </li>
          <li>
            <a href="#">메뉴2</a>
          </li>
        </div>
      </div>
    </>
  );
};

export default Header;
