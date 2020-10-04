import {createSelector} from 'reselect';

export const getRegistrationState = state => state.registration;

export const getIsLoading = createSelector(
  getRegistrationState,
  registrationState => registrationState.isLoading
);

export const getToken = createSelector(
  getRegistrationState,
  registrationState => {
    if (registrationState.token) {
      return registrationState.token;
    }
  }
);

export const getError = createSelector(
  getRegistrationState,
  registrationState => {
    if (registrationState.error && registrationState.error) {
      return registrationState.error;
    }
  }
);
