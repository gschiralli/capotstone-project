import { ReactComponent as Logo } from "../../assets/Logo.svg";
import "./index.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { useState } from "react";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <IconContext.Provider value={{ color: "var(--primary-color)" }}>
      <nav className="navbar">
        <div className="navbar-container container">
          <a href="#" className="navbar-logo" onClick={closeMobileMenu}>
            <Logo />
          </a>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a className="nav-links" href="#" onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-links" href="" onClick={closeMobileMenu}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-links" href="" onClick={closeMobileMenu}>
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-links" href="" onClick={closeMobileMenu}>
                Reservations
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-links" href="" onClick={closeMobileMenu}>
                Order
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-links" href="" onClick={closeMobileMenu}>
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </IconContext.Provider>
  );
};

export default Nav;
