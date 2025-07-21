import React from "react";
import "../styles/main.css";

const imageNames = ["shoes1.jpg", "shoes2.jpg", "shoes3.jpg"];

const Main = () => {
  return (
    <>
      <div className="main-container">
        <div className="main-bg"></div>
        <div className="main-row">
          <div className="main-product">
            <img className="main-product-img" src="https://codingapple1.github.io/shop/shoes1.jpg" />
            <div>상품명</div>
            <div>상품가격</div>
          </div>
          <div className="main-product">
            <img className="main-product-img" src="https://codingapple1.github.io/shop/shoes2.jpg" />
            <div>상품명</div>
            <div>상품가격</div>
          </div>
          <div className="main-product">
            <img className="main-product-img" src="https://codingapple1.github.io/shop/shoes3.jpg" />
            <div>상품명</div>
            <div>상품가격</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
