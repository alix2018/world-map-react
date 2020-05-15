import {createSelector} from 'reselect';

export const getLoginState = state => state.login;

export const getIsLoading = createSelector(
  getLoginState,
  loginState => loginState.isLoading
);

export const getToken = createSelector(
  getLoginState,
  loginState => {
    if (loginState.token) {
      return loginState.token;
    }
  }
);

export const getStatusError = createSelector(
  getLoginState,
  loginState => {
    if (loginState.error && loginState.error.status) {
      return loginState.error.status;
    }
  }
);
