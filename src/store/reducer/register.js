import * as actionType from "../actionType";

const initialState = {
  patientData: null,
  otpError: false,
  isNewUser: false,
  isExistingUser: false,
  errorMsg: "",
};

const register = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_PATIENT_DATA: {
      return {
        ...state,
        patientData: action.value,
      };
    }
    case actionType.SET_OTP_ERROR: {
      return {
        ...state,
        otpError: action.value,
      };
    }
    case actionType.SET_NEW_USER: {
      return {
        ...state,
        isNewUser: !action.value.isUserExist,
        isExistingUser: action.value.isUserExist,
        errorMsg: action.value.message,
      };
    }
    case actionType.HANDLE_BACK: {
      return {
        ...state,
        isNewUser: action.value,
      };
    }
    default:
      return state;
  }
};
export default register;
