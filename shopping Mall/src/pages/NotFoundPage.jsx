import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h2>페이지를 찾을 수 없습니다 😥</h2>
      <p>
        존재하지 않는 경로입니다.
        <br />
        이전 페이지로 돌아가세요.
      </p>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
};

export default NotFoundPage;
