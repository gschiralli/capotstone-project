import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  const availableTimes = ["12:00 PM", "1:00 PM", "2:00 PM"];
  const dispatchMock = jest.fn();
  test("renders the heading 'Reserve Your Table'", () => {
    render(
      <BookingForm availableTimes={availableTimes} dispatch={dispatchMock} />
    );
    const heading = screen.getByRole("heading", { name: "Reserve Your Table" });
    expect(heading).toBeInTheDocument();
  });
});
