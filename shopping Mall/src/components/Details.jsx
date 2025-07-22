import React from "react";
import data from "../data/data.jsx";
import { useParams } from "react-router-dom";
import "../styles/detail.css";

const Details = () => {
  //파라미터 받아옴
  const { id } = useParams();

  // 숫자로 변환
  const productId = Number(id);

  // 데이터에서 숫자로 변환한 id로 물건 정보 찾기
  const product = data.find((item) => item.id === productId);

  return (
    <>
      <div className="detail-product-container">
        <img className="detail-product-img" src={`https://codingapple1.github.io/shop/shoes${product.id}.jpg`} alt={product.title} />
        <div className="detail-product-info">
          <div>{product.title}</div>
          <div>{product.content}</div>
          <div>{product.price.toLocaleString()} 원</div>
          <button className="detail-product-order-btn">주문하기</button>
        </div>
      </div>
    </>
  );
};

export default Details;
