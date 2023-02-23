import "./index.css";
import food1 from "../../assets/food1.jpg";
const Cta = () => {
  return (
    <div className="container">
      <div className="cta-container">
        <h1>
          <span> Little Lemon </span> Chicago
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nisi
          enim excepturi, vero quaerat ipsum natus corrupti quibusdam.
        </p>
        <button>Reserve a Table</button>
      </div>
      <div className="img-container">
        <img src={food1} alt="food" />
      </div>
    </div>
  );
};

export default Cta;
