import "./Card.css";

const Card = ({ imgsrc, title, price, desc }) => {
  return (
    <div class="card">
      <img src={imgsrc} alt="image" />
      <h2>{title}</h2>
      <span class="price">${price}</span>
      <p>{desc}</p>
      <button>Order Now</button>
    </div>
  );
};

export default Card;
