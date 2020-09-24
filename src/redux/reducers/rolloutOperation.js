import { SELECT_ACTION } from "../actions/rolloutOperation";

const initialState = {
  action: "",
};

export default function rolloutOperationReducer(
  state = initialState,
  action = {}
) {
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
