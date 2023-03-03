import "./cta.css";
import food1 from "../../assets/food1.jpg";
import Button from "./../Button/Button";
import { Link } from "react-router-dom";
const Cta = () => {
  return (
    <div className="container">
      <div className="flex">
        <div className="cta-container">
          <h1>
            <span> Little Lemon </span> Chicago
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nisi
            enim excepturi, vero quaerat ipsum natus corrupti quibusdam.
          </p>
          <Link to={"/booking"}>
            <Button title={"Reserve a Table"} />
          </Link>
        </div>
        <div className="img-container">
          <img src={food1} alt="food" />
        </div>
      </div>
    </div>
  );
};

export default Cta;
