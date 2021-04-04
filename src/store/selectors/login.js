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

export const getError = createSelector(
  getLoginState,
  loginState => {
    if (loginState.error) {
      return loginState.error;
    }
  }
);
