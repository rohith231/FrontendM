import * as actionType from "../actionType";

const initialState = {
  isValidUser: false,
  patientData: null,
  otpError: false,
  errorMsg: "",
  resetData: null,
  isEmailValid: false,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_USER: {
      return {
        ...state,
        isValidUser: action.value,
      };
    }
    case actionType.SET_PATIENT_DATA: {
      console.log("called");
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
      console.log(action.value);
      return {
        ...state,
        isNewUser: !action.value.isUserExist,
        errorMsg: action.value.message,
      };
    }
    case actionType.SET_RESET_DATA: {
      return {
        ...state,
        resetData: action.value,
      };
    }
    case actionType.SET_EMAIL_VALID: {
      return {
        ...state,
        isEmailValid: action.value,
      };
    }
    default:
      return state;
  }
};
export default login;
