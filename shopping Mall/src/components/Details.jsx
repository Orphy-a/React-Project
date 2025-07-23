import React, { useEffect, useState } from "react";
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

  // 생명주기 mount - update - unmount
  // mount, update시 코드 실행됨
  // 어려운 연산, 서버에서 데이터 가져오는 작업, 타이머에 주로 사용
  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, []);

  const [alert, setAlert] = useState(true);

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
      {alert == true ? <div className="alert">useEffect, setTimeout 연습</div> : null}
    </>
  );
};

export default Details;
