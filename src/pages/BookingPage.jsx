import { useReducer } from "react";
import BookingForm from "../components/BookingForm/BookingForm";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import {
  initializeTimes,
  updateTimes,
} from "../utils/bookingUtils/bookingUtils";
import { submitAPI } from "../utils/api/api";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
  const [state, dispatch] = useReducer(updateTimes, {
    availableTimes: initializeTimes(),
  });

  const navigate = useNavigate();

  function submitForm(formData) {
    if (submitAPI(formData)) {
      return navigate("/confirmation");
    }
  }
  return (
    <>
      <Nav />
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          margin: "2rem auto",
        }}
      >
        <BookingForm
          availableTimes={state.availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </main>
      <Footer />
    </>
  );
};

export default BookingPage;
