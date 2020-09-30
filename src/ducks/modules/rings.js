import axios from "axios";
import { actionRoutine } from "utils/action-routine";

// actions
const NAMESPACE = "rings";
export const GET_RINGS = actionRoutine(`${NAMESPACE}/GET_RINGS`);

// reducer
const initialState = {
  isFetching: false,
  rings: [],
  hasError: false,
};

export default function reducer(state = initialState, { type, payload } = {}) {
  switch (type) {
    case GET_RINGS.REQUEST:
      return {
        ...state,
        isFetching: true,
        hasError: false,
      };

    case GET_RINGS.SUCCESS:
      return {
        ...state,
        isFetching: false,
        rings: payload,
      };

    case GET_RINGS.FAILURE:
      return {
        ...state,
        isFetching: false,
        hasError: true,
      };

    default:
      return state;
  }
}

// action creators
export const getRings = () => async (dispatch) => {
  dispatch({ type: GET_RINGS.REQUEST });

  try {
    const result = await axios.get(
      "https://run.mocky.io/v3/adc0e655-b26f-4738-a0d8-9cc976a8fa36"
    );
    dispatch({ type: GET_RINGS.SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_RINGS.FAILURE });
  }
};
