import { useReducer } from "react";
import BookingForm from "../components/BookingForm/BookingForm";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import {
  initializeTimes,
  updateTimes,
} from "../utils/bookingUtils/bookingUtils";
import { submitAPI } from "../utils/api/api";

const BookingPage = () => {
  const [state, dispatch] = useReducer(updateTimes, {
    availableTimes: initializeTimes(),
  });

  function submitForm(formData) {
    return submitAPI(formData);
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
