export const actionRoutine = (actionType) => ({
  // TRIGGER: `${actionType}_TRIGGER`,
  REQUEST: `${actionType}_REQUEST`,
  SUCCESS: `${actionType}_SUCCESS`,
  FAILURE: `${actionType}_FAILURE`,
  // FULFILL: `${actionType}_FULFILL`,
});
