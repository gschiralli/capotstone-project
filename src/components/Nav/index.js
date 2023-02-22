import { ReactComponent as Logo } from "../../assets/Logo.svg";
import "./index.css";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">
            <Logo />
          </a>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Reservations</a>
        </li>
        <li>
          <a href="#">Order</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
