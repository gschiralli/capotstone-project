import { Link } from "react-router-dom";
import Button from "./../components/Button/Button";
import { useLocation } from "react-router-dom";

function ConfirmationPage() {
  const { state } = useLocation();

  return (
    <div className="confirmation-page">
      <h1>Reservation Confirmed!</h1>
      <p>
        Your reservation for {state.guests} guests on{" "}
        {new Date(state.date).toDateString()} at {state.time} has been
        confirmed. We look forward to seeing you.
      </p>
      <Link to={"/"}>
        <Button title={"Home"} />
      </Link>
    </div>
  );
}

export default ConfirmationPage;
