import { Link } from "react-router-dom";
import Button from "./../components/Button/Button";

function ConfirmationPage({ reservation }) {
  return (
    <div className="confirmation-page">
      <h1>Reservation Confirmed!</h1>
      <p>
        Your reservation for 2 guests on {new Date().toDateString()} at 12:00
        has been confirmed. We look forward to seeing you.
      </p>
      <Link to={"/"}>
        <Button title={"Home"} />
      </Link>
    </div>
  );
}

export default ConfirmationPage;
