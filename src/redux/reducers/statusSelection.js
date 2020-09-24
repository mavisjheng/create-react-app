import { SELECT_STATUS } from "../actions/statusSelection";

const initialState = {
  status: "All",
};

export default function statusSelectionReducer(
  state = initialState,
  action = {}
) {
  switch (action.type) {
    case SELECT_STATUS:
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
}
