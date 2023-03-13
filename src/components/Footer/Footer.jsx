import "./footer.css";
import logo from "../../assets/footer-logo.png";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="grid">
          <div className="grid-col">
            <img src={logo} alt="company Logo" style={{ width: "7rem" }} />
          </div>
          <div className="grid-col">
            <h2>Doormat Navigation</h2>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </div>
          <div className="grid-col">
            <h2>Contact</h2>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </div>
          <div className="grid-col">
            <h2>Social Media Links</h2>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
