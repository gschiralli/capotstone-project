import { initializeTimes, updateTimes } from "./bookingUtils";

describe("initializeTimes function", () => {
  test("returns an array of available reservation times", () => {
    const expectedTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    const actualTimes = initializeTimes();
    expect(actualTimes).toEqual(expectedTimes);
  });
});

describe("updateTimes function", () => {
  test("returns the same value that is provided in the state", () => {
    const state = { availableTimes: ["17:00", "18:00", "19:00"] };
    const action = { type: "SOME_ACTION" };
    const updatedState = updateTimes(state, action);
    expect(updatedState).toEqual(state);
  });
});
