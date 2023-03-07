import { useReducer } from "react";
import BookingForm from "../components/BookingForm/BookingForm";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import { initializeTimes, updateTimes } from "../utils/bookingUtils";

const BookingPage = () => {
  const [state, dispatch] = useReducer(updateTimes, {
    availableTimes: initializeTimes(),
  });

  return (
    <>
      <Nav />
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <BookingForm
          availableTimes={state.availableTimes}
          dispatch={dispatch}
        />
      </main>
      <Footer />
    </>
  );
};

export default BookingPage;
