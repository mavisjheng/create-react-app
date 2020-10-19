// actions
const NAMESPACE = 'rollout-operation';
export const SELECT_ACTION = `${NAMESPACE}/SELECT_ACTION`;

// reducer
const initialState = {
  action: '',
};

export default function reducer(state = initialState, { type, payload } = {}) {
  switch (type) {
    case SELECT_ACTION:
      return {
        ...state,
        action: payload,
      };

    default:
      return state;
  }
}

// action creators
export const selectAction = action => ({
  type: SELECT_ACTION,
  payload: action,
});
