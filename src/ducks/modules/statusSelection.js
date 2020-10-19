// actions
const NAMESPACE = 'status-selection';
export const SELECT_STATUS = `${NAMESPACE}/SELECT_STATUS`;

// reducer
const initialState = {
  status: 'All',
};

export default function reducer(state = initialState, { type, payload } = {}) {
  switch (type) {
    case SELECT_STATUS:
      return {
        ...state,
        status: payload,
      };

    default:
      return state;
  }
}

// action creators
export const selectStatus = status => ({
  type: SELECT_STATUS,
  payload: status,
});
