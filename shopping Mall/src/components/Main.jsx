import "../styles/main.css";
import data from "../data/data.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Main = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="main-container">
        <div className="main-bg"></div>
        <div className="main-row">
          {data.map((shoes) => (
            <div className="main-product" key={shoes.id}>
              <img className="main-product-img" onClick={() => navigate(`/detail/${shoes.id}`)} style={{ cursor: "pointer" }} src={`https://codingapple1.github.io/shop/shoes${shoes.id}.jpg`} alt={shoes.title} />
              <div>{shoes.title}</div>
              <div>{shoes.price}</div>
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
    </>
  );
};

export default Main;
