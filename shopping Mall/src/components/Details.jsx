import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/detail.css";
import { useStore } from "../store/useStore.jsx";
import { useRecentProductStore } from "../store/useStore.jsx";

const Details = () => {
  //파라미터 받아옴
  const { id } = useParams();

  // 숫자로 변환
  const productId = Number(id);

  // 데이터에서 숫자로 변환한 id로 물건 정보 찾기
  const product = useStore((state) => state.products.find((item) => item.id === productId));

  // 생명주기 mount - update - unmount
  // mount, update시 코드 실행됨
  // 어려운 연산, 서버에서 데이터 가져오는 작업, 타이머에 주로 사용
  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, []);

  const [alert, setAlert] = useState(true);
  const [active, setActive] = useState(0);
  const tabs = ["탭1", "탭2", "탭3"];

  // 장바구니 추가
  const addCart = useStore((state) => state.addCart);

  // 최근 본 상품 추가
  const addRecentProduct = useRecentProductStore((state) => state.addRecentProduct);

  // 최근 본 상품 기록
  useEffect(() => {
    if (productId) {
      addRecentProduct(productId);
    }
  }, [productId, addRecentProduct]);

  return (
    <>
      <div className="detail-product-container">
        <img className="detail-product-img" src={`https://codingapple1.github.io/shop/shoes${product.id}.jpg`} alt={product.title} />
        <div className="detail-product-info">
          <div>{product.title}</div>
          <div>{product.content}</div>
          <div>{product.price.toLocaleString()} 원</div>
          <button onClick={() => addCart(product)}>장바구니</button>
          <button className="detail-product-order-btn">주문하기</button>
        </div>
      </div>
      <div className="tab-container">
        {tabs.map((tab, idx) => (
          <button key={idx} className={active === idx ? "tab-btn active" : "tab-btn"} onClick={() => setActive(idx)}>
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content-container">
        <TabContent />
      </div>
    </>
  );

  function TabContent() {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
      setFadeIn(true);
    }, [active]);

    if (active === 0) {
      return <div className={`tab-content ${fadeIn ? "fade-in" : ""}`}>내용1</div>;
    } else if (active === 1) {
      return <div className={`tab-content ${fadeIn ? "fade-in" : ""}`}>내용2</div>;
    } else {
      return <div className={`tab-content ${fadeIn ? "fade-in" : ""}`}>내용3</div>;
    }
  }
};

export default Details;
