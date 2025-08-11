import React, { memo, useMemo, useState } from "react";
import Header from "../components/Header";
import Cart from "../components/Cart";
import "../styles/Cart.css";

// 자식 컴포넌트 재렌더링 막기
const Child = memo(function () {
  console.log("재렌더링");
  return <div>자식 컴포넌트</div>;
});

function 함수() {
  return;
}

const CartPage = () => {
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    return 함수();
  });

  return (
    <>
      <Header />
      <Cart />
      <Child count={count} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      {count}
    </>
  );
};

export default CartPage;
