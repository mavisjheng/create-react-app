// https://github.com/afitiskin/redux-saga-routines
// https://github.com/zzdjk6/redux-thunk-routine

export const createRoutine = (actionType) => ({
  // action types
  // TRIGGER: `${actionType}_TRIGGER`,
  REQUEST: `${actionType}_REQUEST`,
  SUCCESS: `${actionType}_SUCCESS`,
  FAILURE: `${actionType}_FAILURE`,
  // FULFILL: `${actionType}_FULFILL`,

  // action creators
  // trigger: (payload) => ({ type: `${actionType}_TRIGGER`, payload }),
  request: (payload) => ({ type: `${actionType}_REQUEST`, payload }),
  success: (payload) => ({ type: `${actionType}_SUCCESS`, payload }),
  failure: (payload) => ({ type: `${actionType}_FAILURE`, payload }),
  // fulfill: (payload) => ({ type: `${actionType}_FULFILL`, payload }),
});
