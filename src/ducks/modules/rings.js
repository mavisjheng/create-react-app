// actions
const NAMESPACE = "rings";
export const SET_RINGS = `${NAMESPACE}/SET_RINGS`;

// reducer
const initialState = {
  rings: [],
};

export default function reducer(state = initialState, action = {}) {
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

// action creators
export const setRings = (data) => ({
  type: SET_RINGS,
  rings: data,
});
