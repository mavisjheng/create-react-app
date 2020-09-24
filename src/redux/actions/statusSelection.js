// action type
export const SELECT_STATUS = "SELECT_STATUS";

// action creator
export const selectStatus = (status) => ({
  type: SELECT_STATUS,
  status,
});
