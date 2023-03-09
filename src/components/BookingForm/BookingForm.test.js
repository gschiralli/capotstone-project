import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  const availableTimes = ["12:00", "17:00", "15:00"];
  const dispatchMock = jest.fn();
  const submitForm = jest.fn();
  test("renders the date input field with the correct attributes", () => {
    render(
      <BookingForm availableTimes={availableTimes} dispatch={dispatchMock} />
    );

    const dateInput = screen.getByLabelText("Choose date");

    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("name", "date");
    expect(dateInput).toHaveAttribute("id", "res-date");
    expect(dateInput).toHaveAttribute("required");
  });

  test("renders the time select field with the correct attributes", () => {
    render(
      <BookingForm availableTimes={availableTimes} dispatch={dispatchMock} />
    );

    const timeSelect = screen.getByLabelText("Choose time");

    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute("name", "time");
    expect(timeSelect).toHaveAttribute("id", "res-time");
    expect(timeSelect).toHaveAttribute("required");
  });

  test("renders the guests input field with the correct attributes", () => {
    render(
      <BookingForm availableTimes={availableTimes} dispatch={dispatchMock} />
    );

    const guestsInput = screen.getByLabelText("Number of guests");

    expect(guestsInput).toBeInTheDocument();
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("name", "guests");
    expect(guestsInput).toHaveAttribute("id", "guests");
    expect(guestsInput).toHaveAttribute("min", "2");
    expect(guestsInput).toHaveAttribute("max", "8");
    expect(guestsInput).toHaveAttribute("required");
  });

  test("renders the occasion select field with the correct attributes", () => {
    render(
      <BookingForm availableTimes={availableTimes} dispatch={dispatchMock} />
    );

    const occasionSelect = screen.getByLabelText("Occasion");

    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveAttribute("name", "occasion");
    expect(occasionSelect).toHaveAttribute("id", "occasion");
    expect(occasionSelect).toHaveAttribute("required");
  });

  it("renders without errors", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatchMock}
        submitForm={submitForm}
      />
    );
    const formElement = screen.getByTestId("form");
    expect(formElement).toBeInTheDocument();
  });

  it("displays validation errors when invalid values are submitted", async () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatchMock}
        submitForm={submitForm}
      />
    );
    const guestsInput = screen.getByLabelText("Number of guests");
    const submitButton = screen.getByText("Make your reservation");

    fireEvent.change(guestsInput, { target: { value: 24 } });
    fireEvent.click(submitButton);

    await screen.findByText("Please select a date");
    await screen.findByText("Maximum of 8 guests");
  });

  test("Submitting valid form data", async () => {
    // Arrange
    const dispatch = jest.fn();
    const submitForm = jest.fn();
    const availableTimes = ["12:00", "13:00", "14:00"];
    render(
      <BookingForm
        dispatch={dispatch}
        submitForm={submitForm}
        availableTimes={availableTimes}
      />
    );

    // Act
    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2023-03-15" },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "12:00" },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Birthday" },
    });
    fireEvent.submit(
      screen.getByRole("button", { name: /Make your reservation/i })
    );

    // Assert
    await waitFor(() => expect(submitForm).toHaveBeenCalledTimes(1));
  });
});
