import "./card.css";
import { TbTruckDelivery } from "react-icons/tb";
const Card = ({ imgsrc, title, price, desc }) => {
  return (
    <div className="card">
      <img src={imgsrc} alt="Food" />
      <div className="info">
        <div className="title-price">
          <h2 className="title">{title}</h2>
          <p className="price">$ {price}</p>
        </div>
        <p className="description">{desc}</p>
        <p className="delivery">
          Order delivery &nbsp; <TbTruckDelivery />
        </p>
      </div>
    </div>
  );
};

export default Card;
