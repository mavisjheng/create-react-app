import { SET_RINGS } from "../actions/rings";

const initialState = {
  rings: [],
};

export default function ringsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_RINGS:
      return {
        ...state,
        rings: action.rings,
      };

    default:
      return state;
  }
}
