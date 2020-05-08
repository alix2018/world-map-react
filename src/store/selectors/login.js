import {createSelector} from 'reselect';

export const getLoginState = state => state.login;

export const getIsLoading = createSelector(
  getLoginState,
  loginState => loginState.isLoading
);
