import * as actionType from "../actionType";
import { setLoading, setError } from "./loader";
import { setPatientData } from "./login";
import { sendOtpService, registerService, completeProfileService } from "../../services/Login/login";

export const sendOtpRegister = (data) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    sendOtpService(data)
      .then((res) => {
        console.log("sds", res);
        let { data } = res;
        dispatch(setLoading(false));
        dispatch(setNewUser(data));
        dispatch(setLoading(false));
      })
      .catch((err) => {
        dispatch(setLoading(false));
        dispatch(setError(true));
        // dispatch(setNewUser(err));
      });
  };
};
export const register = (data) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    registerService(data)
      .then((res) => {
        console.log("sds", res);
        let { data } = res;
        dispatch(setLoading(false));
        dispatch(setPatientData(data));
      })
      .catch((err) => {
        dispatch(setOtpError(true));
        dispatch(setLoading(false));
      });
  };
};
export const completeProfile = (data) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    completeProfileService(data)
      .then((res) => {
        console.log("sds", res);
        let { data } = res;
        dispatch(setLoading(false));
        dispatch(setPatientData(data));
      })
      .catch((err) => {
        dispatch(setOtpError(true));
        dispatch(setLoading(false));
      });
  };
};
export const setNewUser = (value) => {
  return {
    type: actionType.SET_NEW_USER,
    value: value,
  };
};
export const handleBack = (value) => {
    return {
      type: actionType.HANDLE_BACK,
      value: value,
    };
  };
export const setOtpError = (value) => {
  return {
    type: actionType.SET_OTP_ERROR,
    value: value,
  };
};
