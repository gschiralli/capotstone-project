import React, { useState } from "react";
import "./bookingForm.css";
import dining from "../../assets/dining.jpg";

function BookingForm({ availableTimes, dispatch }) {
  const [reservation, setReservation] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservation({ ...reservation, [name]: value });
    if (name === "date") {
      dispatch({ type: "update_time", payload: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(reservation);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-left">
        <h1>Reserve Your Table</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem autem eos nobis, dolorem iure aliquid?
        </p>
        <div className="mt-6">
          <div className="pb-4">
            <label htmlFor="res-date">Choose date</label>

            <input
              type="date"
              name="date"
              id="res-date"
              onChange={handleInputChange}
              value={reservation.date}
            />
          </div>

          <div className="pb-4">
            <label htmlFor="res-time">Choose time</label>
            <select
              type="email"
              name="time"
              id="res-time"
              value={reservation.time}
              onChange={handleInputChange}
            >
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          {/* Country input field */}
          <div className="pb-4">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guets"
              name="guests"
              onChange={handleInputChange}
              value={reservation.guests}
            />
          </div>
          <div className="pb-4">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              name="occasion"
              onChange={handleInputChange}
              value={reservation.occasion}
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>
          <input type="submit" value="Make your reservation" />
        </div>
      </div>
      <div className="img-div">
        <img src={dining} alt="dining room" />
      </div>
    </form>
  );
}

export default BookingForm;
