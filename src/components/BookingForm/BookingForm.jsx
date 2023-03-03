import React, { useState } from "react";
import "./bookingForm.css";

function BookingForm() {
  const [reservation, setReservation] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservation({ ...reservation, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(reservation);
  };

  return (
    <form
      style={{
        display: "grid",
        maxWidth: "200px",
        gap: "20px",
        margin: "0 auto",
      }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={reservation.date}
        onChange={handleInputChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="time"
        value={reservation.time}
        onChange={handleInputChange}
      >
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        name="guests"
        value={reservation.guests}
        onChange={handleInputChange}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={reservation.occasion}
        onChange={handleInputChange}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
