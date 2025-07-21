import React, { useState } from "react";
import "../styles/main.css";
import data from "../data/data.jsx";

const Main = () => {
  return (
    <>
      <div className="main-container">
        <div className="main-bg"></div>
        <div className="main-row">
          {data.map((shoes) => (
            <div className="main-product" key={shoes.id}>
              <img className="main-product-img" src={`https://codingapple1.github.io/shop/shoes${shoes.id}.jpg`} alt={shoes.title} />
              <div>{shoes.title}</div>
              <div>{shoes.price}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
