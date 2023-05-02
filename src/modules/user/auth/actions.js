import {
  AUTH_ENTROPY_PASSWORD_DATA,
  AUTH_ENTROPY_PASSWORD_ERROR,
  AUTH_ENTROPY_PASSWORD_FETCH,
  AUTH_LOGOUT_FAILURE,
  AUTH_LOGOUT_FETCH,
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_IN_FETCH,
  AUTH_SIGN_IN_REQUIRE_2FA,
  AUTH_SIGN_UP_ERROR,
  AUTH_SIGN_UP_FETCH,
  AUTH_SIGN_UP_REQUIRE_VERIFICATION,
  AUTH_TEST_STATE,
  AUTH_VERIFICATION_FETCH,
  AUTH_VERIFICATION_SUCCESS,
} from "./constants";

export const entropyPasswordFetch = (payload) => ({
  type: AUTH_ENTROPY_PASSWORD_FETCH,
  payload,
});

export const entropyPasswordData = (payload) => ({
  type: AUTH_ENTROPY_PASSWORD_DATA,
  payload,
});

export const entropyPasswordError = (payload) => ({
  type: AUTH_ENTROPY_PASSWORD_ERROR,
  payload,
});

export const signIn = (payload) => ({
  type: AUTH_SIGN_IN_FETCH,
  payload,
});

export const signInError = (payload) => ({
  type: AUTH_SIGN_IN_ERROR,
  payload,
});

export const signInRequire2FA = (payload) => ({
  type: AUTH_SIGN_IN_REQUIRE_2FA,
  payload,
});

export const signUp = (payload) => ({
  type: AUTH_SIGN_UP_FETCH,
  payload,
});

export const signUpError = (payload) => ({
  type: AUTH_SIGN_UP_ERROR,
  payload,
});

export const signUpRequireVerification = (payload) => ({
  type: AUTH_SIGN_UP_REQUIRE_VERIFICATION,
  payload,
});

export const verificationFetch = (payload) => ({
  type: AUTH_VERIFICATION_FETCH,
  payload,
});

export const verificationSuccess = () => ({
  type: AUTH_VERIFICATION_SUCCESS,
});

export const logoutFetch = () => ({
  type: AUTH_LOGOUT_FETCH,
});

export const logoutError = (payload) => ({
  type: AUTH_LOGOUT_FAILURE,
  payload,
});
