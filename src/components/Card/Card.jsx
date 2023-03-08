import "./card.css";

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
        <p className="delivery">Order delivery</p>
      </div>
    </div>
  );
};

export default Card;
