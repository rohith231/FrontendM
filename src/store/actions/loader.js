import * as actionType from "../actionType";

export const setLoading = (value) => {
  return {
    type: actionType.SET_LOADER,
    value: value,
  };
};

export const setError = (value) => {
  return {
    type: actionType.SET_ERROR,
    value: value,
  };
};
