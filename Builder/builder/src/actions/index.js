import {
  LOGIN_SUCCESS,
  TOKEN_OK,
  TOKEN_FAIL,
  ROLE_OK,
  HANDLE_SIDEBAR_ITEM_CHOSEN
} from "../constants/index";

export function loginSuccess(payload) {
  return { type: LOGIN_SUCCESS, payload };
}
export function tokenOk(payload) {
  return { type: TOKEN_OK, payload };
}
export function tokenFail() {
  return { type: TOKEN_FAIL };
}
export function roleOk() {
  return { type: ROLE_OK };
}
export function handleSidebarItemChosen(payload) {
  return { type: HANDLE_SIDEBAR_ITEM_CHOSEN, payload };
}
