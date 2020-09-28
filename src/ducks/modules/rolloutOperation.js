// actions
const NAMESPACE = "rollout-operation";
export const SELECT_ACTION = `${NAMESPACE}/SELECT_ACTION`;

// reducer
const initialState = {
  action: "",
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SELECT_ACTION:
      return {
        ...state,
        action: action.action,
      };

    default:
      return state;
  }
}

// action creators
export const selectAction = (action) => ({
  type: SELECT_ACTION,
  action,
});
