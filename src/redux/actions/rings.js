// action type
export const SET_RINGS = "SET_RINGS";

// action creator
export const setRings = (data) => ({
  type: SET_RINGS,
  rings: data,
});
