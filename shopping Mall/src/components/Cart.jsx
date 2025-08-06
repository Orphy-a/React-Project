import React, { useState } from "react";
import { Table } from "react-bootstrap";
import usestore from "../store/usestore";
import "./Cart.css";

const Cart = () => {
  const cart = usestore((state) => state.cart);

  const removeCart = usestore((state) => state.removeCart);

  const [count, setCount] = useState(1);

  return (
    <>
      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>장바구니가 비어있습니다. 상품을 추가해주세요.</p>
        </div>
      ) : (
        <div className="cart-container">
          <div>장바구니</div>
          <table className="cart-table">
            <thead>
              <tr>
                <th>체크</th>
                <th>이미지</th>
                <th>상품명</th>
                <th>판매가</th>
                <th>수량</th>
                <th>적립금</th>
                <th>합계</th>
                <th>선택</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td></td>
                  <td>{product.title}</td>
                  <td>{product.price.toLocaleString()}원</td>

                  <td>
                    <button className="cart-amount-btn" onClick={() => setCount(count - 1)}>
                      -
                    </button>
                    <input type="number" value={count} className="cart-amount-input" onChange={(e) => setCount(e.target.value)} />
                    <button className="cart-amount-btn" onClick={() => setCount(count + 1)}>
                      +
                    </button>
                  </td>
                  <td>{(product.price * 0.05 * count).toLocaleString()}원</td>
                  <td>{(product.price * count).toLocaleString()}원</td>
                  <td className="cart-btn-container">
                    <button>주문하기</button>
                    <button
                      className="delete-btn"
                      onClick={() => {
                        removeCart(product);
                      }}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Cart;
