import axios from 'axios';
import { createRoutine } from 'utils/create-routine';

// actions
const NAMESPACE = 'rings';
export const fetchRingsRoutine = createRoutine(`${NAMESPACE}/FETCH_RINGS`);

// reducer
const initialState = {
  isFetching: false,
  rings: [],
  hasError: false,
};

export default function reducer(state = initialState, { type, payload } = {}) {
  switch (type) {
    case fetchRingsRoutine.REQUEST:
      return {
        ...state,
        isFetching: true,
        hasError: false,
      };

    case fetchRingsRoutine.SUCCESS:
      return {
        ...state,
        isFetching: false,
        rings: payload,
      };

    case fetchRingsRoutine.FAILURE:
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
export const fetchRings = () => async dispatch => {
  dispatch(fetchRingsRoutine.request());

  try {
    const result = await axios.get('/rings');
    dispatch(fetchRingsRoutine.success(result.data));
  } catch (error) {
    dispatch(fetchRingsRoutine.failure());
  }
};
