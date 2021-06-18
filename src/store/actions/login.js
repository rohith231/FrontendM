import * as actionType from "../actionType";
import { setLoading, setError } from "./loader";
import {
  sendOtpService,
  verifyOtpService,
  getDetailsService,
  sendOtpToEmailService,
  verifyQuestionsService
} from "../../services/Login/login";

export const sendOtp = (data) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    sendOtpService(data)
      .then((res) => {
        console.log("sds", res);
        let { data } = res;
        dispatch(setLoading(false));
        if (data.isUserExist) {
          dispatch(setUser(true));
          dispatch(setError(false));
        } else {
          dispatch(setError(true));
          dispatch(setUser(false));
        }
      })
      .catch((err) => {
        dispatch(setLoading(false));
        dispatch(setError(true));
        dispatch(setUser(false));
      });
  };
};

export const verifyLogin = (data) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    verifyOtpService(data)
      .then((res) => {
        console.log("sds", res);
        let { data } = res;
        dispatch(setLoading(false));
        dispatch(setPatientData(data.message));
      })
      .catch((err) => {
        dispatch(setOtpError(true));
        dispatch(setLoading(false));
      });
  };
};

export const getDetails = (data) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    getDetailsService(data)
      .then((res) => {
        console.log("sds", res);
        let { data } = res;
        dispatch(setLoading(false));
        dispatch(setResetData(data));
      })
      .catch((err) => {
        dispatch(setError(true));
        dispatch(setLoading(false));
      });
  };
};

export const sendOtpToEmail = (data) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    sendOtpToEmailService(data)
      .then((res) => {
        console.log("sds", res);
        let { data } = res;
        dispatch(setLoading(false));
        dispatch(setIsValidEmail(true));
      })
      .catch((err) => {
        dispatch(setError(true));
        dispatch(setIsValidEmail(false));
      });
  };
};
export const verifyQuestions = (data) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    verifyQuestionsService(data)
      .then((res) => {
        console.log("sds", res);
        let { data } = res;
        dispatch(setLoading(false));
        dispatch(setPatientData(data));
      })
      .catch((err) => {
        dispatch(setError(true));
      });
  };
};

export const setIsValidEmail = (value) => {
  return {
    type: actionType.SET_EMAIL_VALID,
    value: value,
  };
};

export const setResetData = (value) => {
  return {
    type: actionType.SET_RESET_DATA,
    value: value,
  };
};
export const setUser = (value) => {
  return {
    type: actionType.SET_USER,
    value: value,
  };
};
export const setNewUser = (value) => {
  return {
    type: actionType.SET_NEW_USER,
    value: value,
  };
};

export const setPatientData = (value) => {
  return {
    type: actionType.SET_PATIENT_DATA,
    value: value,
  };
};
export const setOtpError = (value) => {
  return {
    type: actionType.SET_OTP_ERROR,
    value: value,
  };
};
