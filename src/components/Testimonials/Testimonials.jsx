import { FaStar } from "react-icons/fa";
import p1 from "../../assets/p1.png";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonial">
      <img src={p1} alt="personal img" />
      <div className="name">John Doe</div>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
    </div>
  );
};

export default Testimonials;
