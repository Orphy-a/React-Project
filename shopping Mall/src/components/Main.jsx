import "../styles/main.css";
import data from "../data/data.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useStore, useRecentProductStore } from "../store/useStore.jsx";

const Main = () => {
  const navigate = useNavigate();

  // 최근 본 상품 목록 가져오기
  const recentProducts = useRecentProductStore((state) => state.recentProducts);
  const products = useStore((state) => state.products);

  // 최근 본 상품 정보 찾기
  const recentProductDetails = recentProducts.map((id) => products.find((product) => product.id === id)).filter(Boolean);

  return (
    <>
      <div className="main-layout">
        <div className="main-content">
          <div className="main-container">
            <div className="main-bg"></div>
            <div className="main-row">
              {data.map((shoes) => (
                <div className="main-product" key={shoes.id}>
                  <img className="main-product-img" onClick={() => navigate(`/detail/${shoes.id}`)} style={{ cursor: "pointer" }} src={`https://codingapple1.github.io/shop/shoes${shoes.id}.jpg`} alt={shoes.title} />
                  <div className="main-product-title">{shoes.title}</div>
                  <div className="main-product-price">{shoes.price.toLocaleString()}원</div>
                </div>
              ))}
            </div>
            <button
              className="main-more-btn"
              onClick={() => {
                axios
                  .get(`http://localhost:5173/detail/${shoes.id}`)
                  .then((data) => {
                    console.log(data.data);
                  })
                  .catch(() => {
                    console.log("요청 실패");
                  });
              }}
            >
              더보기
            </button>
          </div>
        </div>

        {/* 오른쪽 사이드바 - 최근 본 상품 */}
        {recentProductDetails.length > 0 && (
          <div className="sidebar">
            <div className="sidebar-content">
              <h3 className="sidebar-title">최근 본 상품</h3>
              <div className="sidebar-products">
                {recentProductDetails.map((product) => (
                  <div key={product.id} className="sidebar-product-item" onClick={() => navigate(`/detail/${product.id}`)}>
                    <img className="sidebar-product-img" src={`https://codingapple1.github.io/shop/shoes${product.id}.jpg`} alt={product.title} />
                    <div className="sidebar-product-info">
                      <div className="sidebar-product-title">{product.title}</div>
                      <div className="sidebar-product-price">{product.price.toLocaleString()}원</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Main;
