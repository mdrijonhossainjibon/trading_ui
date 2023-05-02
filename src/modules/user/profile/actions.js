import {
  PROFILE_CHANGE_PASSWORD_DATA,
  PROFILE_CHANGE_PASSWORD_ERROR,
  PROFILE_CHANGE_PASSWORD_FETCH,
  PROFILE_CHANGE_USER_DATA,
  PROFILE_CHANGE_USER_ERROR,
  PROFILE_CHANGE_USER_FETCH,
  PROFILE_CHANGE_USER_LEVEL,
  PROFILE_GENERATE_2FA_QRCODE_DATA,
  PROFILE_GENERATE_2FA_QRCODE_ERROR,
  PROFILE_GENERATE_2FA_QRCODE_FETCH,
  PROFILE_RESET_USER,
  PROFILE_TOGGLE_2FA_DATA,
  PROFILE_TOGGLE_2FA_ERROR,
  PROFILE_TOGGLE_2FA_FETCH,
  PROFILE_TOGGLE_USER_2FA,
  PROFILE_USER_DATA,
  PROFILE_USER_ERROR,
  PROFILE_USER_FETCH,
} from "./constants";

export const changePasswordFetch = (payload) => ({
  type: PROFILE_CHANGE_PASSWORD_FETCH,
  payload,
});

export const changePasswordData = () => ({
  type: PROFILE_CHANGE_PASSWORD_DATA,
});

export const changePasswordError = (payload) => ({
  type: PROFILE_CHANGE_PASSWORD_ERROR,
  payload,
});

export const toggle2faFetch = (payload) => ({
  type: PROFILE_TOGGLE_2FA_FETCH,
  payload,
});

export const toggle2faData = () => ({
  type: PROFILE_TOGGLE_2FA_DATA,
});

export const toggle2faError = (payload) => ({
  type: PROFILE_TOGGLE_2FA_ERROR,
  payload,
});

export const generate2faQRFetch = () => ({
  type: PROFILE_GENERATE_2FA_QRCODE_FETCH,
});

export const generate2faQRData = (payload) => ({
  type: PROFILE_GENERATE_2FA_QRCODE_DATA,
  payload,
});

export const generate2faQRError = (payload) => ({
  type: PROFILE_GENERATE_2FA_QRCODE_ERROR,
  payload,
});

export const userFetch = () => ({
  type: PROFILE_USER_FETCH,
});

export const userData = (payload) => ({
  type: PROFILE_USER_DATA,
  payload,
});

export const userError = (payload) => ({
  type: PROFILE_USER_ERROR,
  payload,
});

export const userReset = () => ({
  type: PROFILE_RESET_USER,
});

export const changeUserLevel = (payload) => ({
  type: PROFILE_CHANGE_USER_LEVEL,
  payload,
});

export const toggleUser2fa = () => ({
  type: PROFILE_TOGGLE_USER_2FA,
});

export const changeUserDataFetch = (payload) => ({
  type: PROFILE_CHANGE_USER_FETCH,
  payload,
});

export const changeUserData = (payload) => ({
  type: PROFILE_CHANGE_USER_DATA,
  payload,
});

export const changeUserDataError = (payload) => ({
  type: PROFILE_CHANGE_USER_ERROR,
  payload,
});
