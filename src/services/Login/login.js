import { postService } from "../../utilities/request/restClient";
import { config } from "../../constants";

export const sendOtpService = (data) => {
  return postService(`${config.dev.baseURL}/getotp`, data);
};
export const verifyOtpService = (data) => {
  return postService(`${config.dev.baseURL}/verifylogin`, data);
};
export const registerService = (data) => {
  return postService(`${config.dev.baseURL}/register`, data);
};
export const completeProfileService = (data) => {
  return postService(`${config.dev.baseURL}/completeprofile`, data);
};
export const getDetailsService = (data) => {
  return postService(`${config.dev.baseURL}/get-details`, data);
};
export const sendOtpToEmailService = (data) => {
  return postService(`${config.dev.baseURL}/validate-Email`, data);
};
export const verifyQuestionsService = (data) => {
  return postService(`${config.dev.baseURL}/validate-security-qes`, data);
};

