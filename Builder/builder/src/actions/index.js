import { LOGIN_SUCCESS, INITIATE_APPLICATION } from "../constants/index";

export function loginSuccess(payload) {
  return { type: LOGIN_SUCCESS, payload };
}
export function initiateApplication(payload) {
  return { type: INITIATE_APPLICATION, payload };
}
