import React, { useState } from "react";
import { useStore } from "../store/useStore.jsx";
import "../styles/Cart.css";

const Cart = () => {
  const cart = useStore((state) => state.cart);
  const removeCart = useStore((state) => state.removeCart);

  // 상품별 수량 상태를 객체 형태로 관리 (id: count)
  const [counts, setCounts] = useState(() => {
    // 초기값 설정: 모두 1로 시작
    const initialCounts = {};
    cart.forEach((product) => {
      initialCounts[product.id] = 1;
    });
    return initialCounts;
  });

  const [selectedItems, setSelectedItems] = useState([]);

  const allChecked = cart.length > 0 && selectedItems.length === cart.length;

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(cart.map((product) => product.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (e, id) => {
    if (e.target.checked) {
      setSelectedItems((prev) => [...prev, id]);
    } else {
      setSelectedItems((prev) => prev.filter((itemId) => itemId !== id));
    }
  };

  // 수량 변경 함수
  const handleCountChange = (id, newCount) => {
    if (newCount < 1) return; // 1보다 작으면 변경 안 함
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: newCount,
    }));
  };

  const totalPrice = cart.reduce((sum, product) => {
    const count = counts[product.id] || 1;
    return sum + product.price * count;
  }, 0);

  return (
    <>
      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>장바구니가 비어있습니다. 상품을 추가해주세요.</p>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-title">장바구니</div>
          <div className="cart-subtitle">담은 상품 목록</div>
          <table className="cart-table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" checked={allChecked} onChange={handleSelectAll} />
                </th>
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
              {cart.map((product) => {
                const isChecked = selectedItems.includes(product.id);
                const count = counts[product.id] || 1;
                return (
                  <tr key={product.id}>
                    <td>
                      <input type="checkbox" checked={isChecked} onChange={(e) => handleSelectItem(e, product.id)} />
                    </td>
                    <td>
                      <div className="cart-img"></div>
                    </td>
                    <td>{product.title}</td>
                    <td>{product.price.toLocaleString()}원</td>

                    <td className="cart-amount-container">
                      <button className="cart-amount-btn" onClick={() => handleCountChange(product.id, Math.max(count - 1, 1))}>
                        -
                      </button>
                      <input
                        type="number"
                        value={count}
                        className="cart-amount-input"
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          if (val >= 1) handleCountChange(product.id, val);
                        }}
                      />
                      <button className="cart-amount-btn" onClick={() => handleCountChange(product.id, count + 1)}>
                        +
                      </button>
                    </td>

                    <td>{(product.price * 0.05 * count).toLocaleString()}원</td>
                    <td>{(product.price * count).toLocaleString()}원</td>

                    <td className="cart-btn-container">
                      <button className="order-btn">주문하기</button>
                      <button
                        className="delete-btn"
                        onClick={() => {
                          removeCart(product);
                          setSelectedItems((prev) => prev.filter((id) => id !== product.id));
                          // 삭제 시 수량 상태도 정리할 경우:
                          setCounts((prev) => {
                            const copy = { ...prev };
                            delete copy[product.id];
                            return copy;
                          });
                        }}
                      >
                        삭제
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="cart-total">총 결제 금액 : {totalPrice.toLocaleString()}원</div>
        </div>
      )}
    </>
  );
};

export default Cart;
