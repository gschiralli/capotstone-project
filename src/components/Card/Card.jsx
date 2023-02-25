import "./card.css";

const Card = ({ imgsrc, title, price, desc }) => {
  return (
    <div class="card">
      <img src={imgsrc} alt="Product image" />
      <div class="info">
        <div class="title-price">
          <h2 class="title">{title}</h2>
          <p class="price">$ {price}</p>
        </div>
        <p class="description">{desc}</p>
        <p class="delivery">Order delivery</p>
      </div>
    </div>
  );
};

export default Card;
