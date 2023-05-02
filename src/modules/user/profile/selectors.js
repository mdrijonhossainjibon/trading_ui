export const selectChangePasswordSuccess = (state) =>
  state.user.profile.passwordChange.success;

export const selectTwoFactorAuthQR = (state) =>
  state.user.profile.twoFactorAuth.url;

export const selectTwoFactorAuthBarcode = (state) =>
  state.user.profile.twoFactorAuth.barcode;

export const selectTwoFactorAuthSuccess = (state) =>
  state.user.profile.twoFactorAuth.success;

export const selectUserLoggedIn = (state) => {
  const {
    user: { profile },
  } = state;

  return (
    !profile.userData.isFetching && profile.userData.user.state === "active"
  );
};

export const selectUserInfo = (state) => state.user.profile.userData.user;

export const selectUserFetching = (state) =>
  state.user.profile.userData.isFetching;

export const selectUserDataChange = (state) =>
  state.user.profile.userData.success;
