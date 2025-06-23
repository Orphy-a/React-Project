import React from "react";
import { useStore } from "zustand";
import product from "../data/product";

const detail = () => {
  const products = useStore((state) => state.products);
  const setProducts = useStore((state) => state.setProducts);

  useeffect(() => {
    setProducts(product);
  }, [setProducts]);

  return (
    <div className="product-container">
      <div className="row">
        {products.map((product) => (
          <>
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">{product.title}</h4>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default detail;
