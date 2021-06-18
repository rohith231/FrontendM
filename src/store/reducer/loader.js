import * as actionType from "../actionType";

const initialState = {
  error: false,
  loading: false,
};

const loader = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_LOADER: {
      return {
        ...state,
        loading: action.value,
      };
    }
    case actionType.SET_ERROR: {
      return {
        ...state,
        error: action.value,
      };
    }
    default:
      return state;
  }
};
export default loader;
