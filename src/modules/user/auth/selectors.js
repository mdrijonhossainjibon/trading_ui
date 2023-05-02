export const selectSignInRequire2FA = (state) => state.user.auth.require2FA;

export const selectSignUpRequireVerification = (state) =>
  state.user.auth.requireVerification;

export const selectSignUpError = (state) => state.user.auth.signUpError;

export const selectEmailVerified = (state) => state.user.auth.emailVerified;

export const selectCurrentPasswordEntropy = (state) =>
  state.user.auth.current_password_entropy;
