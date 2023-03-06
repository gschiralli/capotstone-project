import { useReducer } from "react";
import BookingForm from "../components/BookingForm/BookingForm";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";

const BookingPage = () => {
  function updateTimes(state, action) {
    return {
      ...state,
    };
  }

  function initializeTimes() {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }
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
