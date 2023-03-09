import { initializeTimes, updateTimes } from "./bookingUtils";

describe("initializeTimes function", () => {
  describe("initializeTimes function", () => {
    test("returns an array of available reservation times", () => {
      const times = initializeTimes();
      expect(Array.isArray(times)).toBe(true);
    });
  });
});

describe("updateTimes function", () => {
  test("update the available times based on a given date", () => {
    const state = { availableTimes: ["17:00", "18:00", "19:00"] };
    const action = { type: "update_time", payload: new Date() };
    const updatedState = updateTimes(state, action);
    expect(updatedState).not.toEqual(state);
  });
});
