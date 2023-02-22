const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">{/* <img src="" alt="company Logo" /> */}</div>
          <div className="col">
            <h2>Doormat Navigation</h2>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </div>
          <div className="col">
            <h2>Contact</h2>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </div>
          <div className="col">
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
