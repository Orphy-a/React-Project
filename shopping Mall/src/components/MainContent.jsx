import React, { useState } from "react";
import "../styles/main.css";
import product from "../data/product.js";

const MainContent = () => {
  const [shoes, setShoes] = useState(product);

  console.log(shoes);

  return (
    <>
      <div className="main-container">
        <div className="main-bg"></div>
        <div className="main-container">
          <div className="main-row">
            {shoes.map((shoe) => (
              <div className="main-col" key={shoe.id}>
                <img src="#" />
                <h4>{shoe.title}</h4>
                <p>{shoe.price.toLocaleString()} 원</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
