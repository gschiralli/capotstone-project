import { fetchAPI } from "./../api/api";

export function initializeTimes() {
  let date = new Date();
  return fetchAPI(date);
}

export function updateTimes(state, action) {
  if (action.type === "update_time") {
    const availableTimes = fetchAPI(action.payload);
    return {
      ...state,
      availableTimes,
    };
  }
  return state;
}
