import "../styles/main.css";
import data from "../data/data.jsx";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="main-container">
        <div className="main-bg"></div>
        <div className="main-row">
          {data.map((shoes) => (
            <div className="main-product" key={shoes.id} onClick={() => navigate(`/detail/${shoes.id}`)} style={{ cursor: "pointer" }}>
              <img className="main-product-img" src={`https://codingapple1.github.io/shop/shoes${shoes.id}.jpg`} alt={shoes.title} />
              <div>{shoes.title}</div>
              <div>{shoes.price}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
